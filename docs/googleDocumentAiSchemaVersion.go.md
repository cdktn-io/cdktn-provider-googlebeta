# `googleDocumentAiSchemaVersion` Submodule <a name="`googleDocumentAiSchemaVersion` Submodule" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDocumentAiSchemaVersion <a name="GoogleDocumentAiSchemaVersion" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version google_document_ai_schema_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.NewGoogleDocumentAiSchemaVersion(scope Construct, id *string, config GoogleDocumentAiSchemaVersionConfig) GoogleDocumentAiSchemaVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig">GoogleDocumentAiSchemaVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig">GoogleDocumentAiSchemaVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema"></a>

```go
func PutSchema(value GoogleDocumentAiSchemaVersionSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDocumentAiSchemaVersionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.GoogleDocumentAiSchemaVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.GoogleDocumentAiSchemaVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.GoogleDocumentAiSchemaVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.GoogleDocumentAiSchemaVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleDocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDocumentAiSchemaVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDocumentAiSchemaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDocumentAiSchemaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference">GoogleDocumentAiSchemaVersionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference">GoogleDocumentAiSchemaVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaIdInput">SchemaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaId">SchemaId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schema"></a>

```go
func Schema() GoogleDocumentAiSchemaVersionSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference">GoogleDocumentAiSchemaVersionSchemaOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeouts"></a>

```go
func Timeouts() GoogleDocumentAiSchemaVersionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference">GoogleDocumentAiSchemaVersionTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaIdInput"></a>

```go
func SchemaIdInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaInput"></a>

```go
func SchemaInput() GoogleDocumentAiSchemaVersionSchema
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.schemaId"></a>

```go
func SchemaId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDocumentAiSchemaVersionConfig <a name="GoogleDocumentAiSchemaVersionConfig" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

&googledocumentaischemaversion.GoogleDocumentAiSchemaVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Location: *string,
	Schema: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema,
	SchemaId: *string,
	DeletionPolicy: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schemaId">SchemaId</a></code> | <code>*string</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#location GoogleDocumentAiSchemaVersion#location}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schema"></a>

```go
Schema GoogleDocumentAiSchemaVersionSchema
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema GoogleDocumentAiSchemaVersion#schema}

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.schemaId"></a>

```go
SchemaId *string
```

- *Type:* *string

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#schema_id GoogleDocumentAiSchemaVersion#schema_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#deletion_policy GoogleDocumentAiSchemaVersion#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#id GoogleDocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#labels GoogleDocumentAiSchemaVersion#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#project GoogleDocumentAiSchemaVersion#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionConfig.property.timeouts"></a>

```go
Timeouts GoogleDocumentAiSchemaVersionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts">GoogleDocumentAiSchemaVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#timeouts GoogleDocumentAiSchemaVersion#timeouts}

---

### GoogleDocumentAiSchemaVersionSchema <a name="GoogleDocumentAiSchemaVersionSchema" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

&googledocumentaischemaversion.GoogleDocumentAiSchemaVersionSchema {
	Description: *string,
	DisplayName: *string,
	DocumentPrompt: *string,
	EntityTypes: interface{},
	Metadata: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.description">Description</a></code> | <code>*string</code> | Description of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name to show users. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.documentPrompt">DocumentPrompt</a></code> | <code>*string</code> | Document-level prompt provided by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.entityTypes">EntityTypes</a></code> | <code>interface{}</code> | entity_types block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | metadata block. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#description GoogleDocumentAiSchemaVersion#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name to show users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `DocumentPrompt`<sup>Optional</sup> <a name="DocumentPrompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.documentPrompt"></a>

```go
DocumentPrompt *string
```

- *Type:* *string

Document-level prompt provided by the user.

This custom text is injected into the AI model's prompt to provide extra, document-wide guidance for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_prompt GoogleDocumentAiSchemaVersion#document_prompt}

---

##### `EntityTypes`<sup>Optional</sup> <a name="EntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.entityTypes"></a>

```go
EntityTypes interface{}
```

- *Type:* interface{}

entity_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#entity_types GoogleDocumentAiSchemaVersion#entity_types}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema.property.metadata"></a>

```go
Metadata GoogleDocumentAiSchemaVersionSchemaMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#metadata GoogleDocumentAiSchemaVersion#metadata}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypes <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

&googledocumentaischemaversion.GoogleDocumentAiSchemaVersionSchemaEntityTypes {
	Name: *string,
	BaseTypes: *[]*string,
	DisplayName: *string,
	EnumValues: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues,
	Properties: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.name">Name</a></code> | <code>*string</code> | Name of the type. It must be unique within the schema file and cannot be a "Common Type". |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes">BaseTypes</a></code> | <code>*[]*string</code> | The entity type that this type is derived from. For now, one and only one should be set. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.displayName">DisplayName</a></code> | <code>*string</code> | User defined name for the type. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.enumValues">EnumValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | enum_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.properties">Properties</a></code> | <code>interface{}</code> | properties block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the type. It must be unique within the schema file and cannot be a "Common Type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#name GoogleDocumentAiSchemaVersion#name}

---

##### `BaseTypes`<sup>Optional</sup> <a name="BaseTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes"></a>

```go
BaseTypes *[]*string
```

- *Type:* *[]*string

The entity type that this type is derived from. For now, one and only one should be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#base_types GoogleDocumentAiSchemaVersion#base_types}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User defined name for the type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `EnumValues`<sup>Optional</sup> <a name="EnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.enumValues"></a>

```go
EnumValues GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

enum_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#enum_values GoogleDocumentAiSchemaVersion#enum_values}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypes.property.properties"></a>

```go
Properties interface{}
```

- *Type:* interface{}

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#properties GoogleDocumentAiSchemaVersion#properties}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

&googledocumentaischemaversion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values">Values</a></code> | <code>*[]*string</code> | The individual values that this enum values type can include. |

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The individual values that this enum values type can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#values GoogleDocumentAiSchemaVersion#values}

---

### GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

&googledocumentaischemaversion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties {
	Name: *string,
	ValueType: *string,
	DisplayName: *string,
	Method: *string,
	OccurrenceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.name">Name</a></code> | <code>*string</code> | The name of the property. Follows the same guidelines as the EntityType name. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType">ValueType</a></code> | <code>*string</code> | A reference to the value type of the property. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName">DisplayName</a></code> | <code>*string</code> | User defined name for the property. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.method">Method</a></code> | <code>*string</code> | Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType">OccurrenceType</a></code> | <code>*string</code> | Occurrence type limits the number of instances an entity type appears in the document. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the property. Follows the same guidelines as the EntityType name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#name GoogleDocumentAiSchemaVersion#name}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

A reference to the value type of the property.

This type is subject to the same conventions as the 'Entity.base_types' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#value_type GoogleDocumentAiSchemaVersion#value_type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User defined name for the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#display_name GoogleDocumentAiSchemaVersion#display_name}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.method"></a>

```go
Method *string
```

- *Type:* *string

Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#method GoogleDocumentAiSchemaVersion#method}

---

##### `OccurrenceType`<sup>Optional</sup> <a name="OccurrenceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType"></a>

```go
OccurrenceType *string
```

- *Type:* *string

Occurrence type limits the number of instances an entity type appears in the document.

Possible values: ["OPTIONAL_ONCE", "OPTIONAL_MULTIPLE", "REQUIRED_ONCE", "REQUIRED_MULTIPLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#occurrence_type GoogleDocumentAiSchemaVersion#occurrence_type}

---

### GoogleDocumentAiSchemaVersionSchemaMetadata <a name="GoogleDocumentAiSchemaVersionSchemaMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

&googledocumentaischemaversion.GoogleDocumentAiSchemaVersionSchemaMetadata {
	DocumentAllowMultipleLabels: interface{},
	DocumentSplitter: interface{},
	PrefixedNamingOnProperties: interface{},
	SkipNamingValidation: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels">DocumentAllowMultipleLabels</a></code> | <code>interface{}</code> | If true, on a given page, there can be multiple 'document' annotations covering it. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentSplitter">DocumentSplitter</a></code> | <code>interface{}</code> | If true, a 'document' entity type can be applied to subdocument (splitting). |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties">PrefixedNamingOnProperties</a></code> | <code>interface{}</code> | If set, all the nested entities must be prefixed with the parents. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation">SkipNamingValidation</a></code> | <code>interface{}</code> | If set, this will skip the naming format validation in the schema. |

---

##### `DocumentAllowMultipleLabels`<sup>Optional</sup> <a name="DocumentAllowMultipleLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels"></a>

```go
DocumentAllowMultipleLabels interface{}
```

- *Type:* interface{}

If true, on a given page, there can be multiple 'document' annotations covering it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_allow_multiple_labels GoogleDocumentAiSchemaVersion#document_allow_multiple_labels}

---

##### `DocumentSplitter`<sup>Optional</sup> <a name="DocumentSplitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.documentSplitter"></a>

```go
DocumentSplitter interface{}
```

- *Type:* interface{}

If true, a 'document' entity type can be applied to subdocument (splitting).

Otherwise, it can only be applied to the entire document (classification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#document_splitter GoogleDocumentAiSchemaVersion#document_splitter}

---

##### `PrefixedNamingOnProperties`<sup>Optional</sup> <a name="PrefixedNamingOnProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties"></a>

```go
PrefixedNamingOnProperties interface{}
```

- *Type:* interface{}

If set, all the nested entities must be prefixed with the parents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#prefixed_naming_on_properties GoogleDocumentAiSchemaVersion#prefixed_naming_on_properties}

---

##### `SkipNamingValidation`<sup>Optional</sup> <a name="SkipNamingValidation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation"></a>

```go
SkipNamingValidation interface{}
```

- *Type:* interface{}

If set, this will skip the naming format validation in the schema.

So the string values in 'DocumentSchema.EntityType.name' and 'DocumentSchema.EntityType.Property.name' will not be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#skip_naming_validation GoogleDocumentAiSchemaVersion#skip_naming_validation}

---

### GoogleDocumentAiSchemaVersionTimeouts <a name="GoogleDocumentAiSchemaVersionTimeouts" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

&googledocumentaischemaversion.GoogleDocumentAiSchemaVersionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#create GoogleDocumentAiSchemaVersion#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#delete GoogleDocumentAiSchemaVersion#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#update GoogleDocumentAiSchemaVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#create GoogleDocumentAiSchemaVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#delete GoogleDocumentAiSchemaVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_document_ai_schema_version#update GoogleDocumentAiSchemaVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.NewGoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesList <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesList" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.NewGoogleDocumentAiSchemaVersionSchemaEntityTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDocumentAiSchemaVersionSchemaEntityTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get"></a>

```go
func Get(index *f64) GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.NewGoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues">PutEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes">ResetBaseTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues">ResetEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnumValues` <a name="PutEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues"></a>

```go
func PutEnumValues(value GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties"></a>

```go
func PutProperties(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBaseTypes` <a name="ResetBaseTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes"></a>

```go
func ResetBaseTypes()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnumValues` <a name="ResetEnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues"></a>

```go
func ResetEnumValues()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties"></a>

```go
func ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues">EnumValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput">BaseTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput">EnumValuesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes">BaseTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnumValues`<sup>Required</sup> <a name="EnumValues" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues"></a>

```go
func EnumValues() GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties"></a>

```go
func Properties() GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a>

---

##### `BaseTypesInput`<sup>Optional</sup> <a name="BaseTypesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput"></a>

```go
func BaseTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnumValuesInput`<sup>Optional</sup> <a name="EnumValuesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput"></a>

```go
func EnumValuesInput() GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues">GoogleDocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `BaseTypes`<sup>Required</sup> <a name="BaseTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes"></a>

```go
func BaseTypes() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.NewGoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get"></a>

```go
func Get(index *f64) GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.NewGoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType">ResetOccurrenceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetOccurrenceType` <a name="ResetOccurrenceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType"></a>

```go
func ResetOccurrenceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput">OccurrenceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType">OccurrenceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OccurrenceTypeInput`<sup>Optional</sup> <a name="OccurrenceTypeInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput"></a>

```go
func OccurrenceTypeInput() *string
```

- *Type:* *string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OccurrenceType`<sup>Required</sup> <a name="OccurrenceType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType"></a>

```go
func OccurrenceType() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.NewGoogleDocumentAiSchemaVersionSchemaMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels">ResetDocumentAllowMultipleLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter">ResetDocumentSplitter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties">ResetPrefixedNamingOnProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation">ResetSkipNamingValidation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDocumentAllowMultipleLabels` <a name="ResetDocumentAllowMultipleLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels"></a>

```go
func ResetDocumentAllowMultipleLabels()
```

##### `ResetDocumentSplitter` <a name="ResetDocumentSplitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter"></a>

```go
func ResetDocumentSplitter()
```

##### `ResetPrefixedNamingOnProperties` <a name="ResetPrefixedNamingOnProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties"></a>

```go
func ResetPrefixedNamingOnProperties()
```

##### `ResetSkipNamingValidation` <a name="ResetSkipNamingValidation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation"></a>

```go
func ResetSkipNamingValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput">DocumentAllowMultipleLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput">DocumentSplitterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput">PrefixedNamingOnPropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput">SkipNamingValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels">DocumentAllowMultipleLabels</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter">DocumentSplitter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties">PrefixedNamingOnProperties</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation">SkipNamingValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocumentAllowMultipleLabelsInput`<sup>Optional</sup> <a name="DocumentAllowMultipleLabelsInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput"></a>

```go
func DocumentAllowMultipleLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `DocumentSplitterInput`<sup>Optional</sup> <a name="DocumentSplitterInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput"></a>

```go
func DocumentSplitterInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixedNamingOnPropertiesInput`<sup>Optional</sup> <a name="PrefixedNamingOnPropertiesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput"></a>

```go
func PrefixedNamingOnPropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `SkipNamingValidationInput`<sup>Optional</sup> <a name="SkipNamingValidationInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput"></a>

```go
func SkipNamingValidationInput() interface{}
```

- *Type:* interface{}

---

##### `DocumentAllowMultipleLabels`<sup>Required</sup> <a name="DocumentAllowMultipleLabels" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels"></a>

```go
func DocumentAllowMultipleLabels() interface{}
```

- *Type:* interface{}

---

##### `DocumentSplitter`<sup>Required</sup> <a name="DocumentSplitter" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter"></a>

```go
func DocumentSplitter() interface{}
```

- *Type:* interface{}

---

##### `PrefixedNamingOnProperties`<sup>Required</sup> <a name="PrefixedNamingOnProperties" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties"></a>

```go
func PrefixedNamingOnProperties() interface{}
```

- *Type:* interface{}

---

##### `SkipNamingValidation`<sup>Required</sup> <a name="SkipNamingValidation" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation"></a>

```go
func SkipNamingValidation() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDocumentAiSchemaVersionSchemaMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---


### GoogleDocumentAiSchemaVersionSchemaOutputReference <a name="GoogleDocumentAiSchemaVersionSchemaOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.NewGoogleDocumentAiSchemaVersionSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDocumentAiSchemaVersionSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes">PutEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt">ResetDocumentPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes">ResetEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntityTypes` <a name="PutEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes"></a>

```go
func PutEntityTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata"></a>

```go
func PutMetadata(value GoogleDocumentAiSchemaVersionSchemaMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDocumentPrompt` <a name="ResetDocumentPrompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt"></a>

```go
func ResetDocumentPrompt()
```

##### `ResetEntityTypes` <a name="ResetEntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes"></a>

```go
func ResetEntityTypes()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypes">EntityTypes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference">GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput">DocumentPromptInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput">EntityTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt">DocumentPrompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypes"></a>

```go
func EntityTypes() GoogleDocumentAiSchemaVersionSchemaEntityTypesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaEntityTypesList">GoogleDocumentAiSchemaVersionSchemaEntityTypesList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadata"></a>

```go
func Metadata() GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference">GoogleDocumentAiSchemaVersionSchemaMetadataOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DocumentPromptInput`<sup>Optional</sup> <a name="DocumentPromptInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput"></a>

```go
func DocumentPromptInput() *string
```

- *Type:* *string

---

##### `EntityTypesInput`<sup>Optional</sup> <a name="EntityTypesInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput"></a>

```go
func EntityTypesInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.metadataInput"></a>

```go
func MetadataInput() GoogleDocumentAiSchemaVersionSchemaMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaMetadata">GoogleDocumentAiSchemaVersionSchemaMetadata</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DocumentPrompt`<sup>Required</sup> <a name="DocumentPrompt" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt"></a>

```go
func DocumentPrompt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDocumentAiSchemaVersionSchema
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionSchema">GoogleDocumentAiSchemaVersionSchema</a>

---


### GoogleDocumentAiSchemaVersionTimeoutsOutputReference <a name="GoogleDocumentAiSchemaVersionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googledocumentaischemaversion"

googledocumentaischemaversion.NewGoogleDocumentAiSchemaVersionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDocumentAiSchemaVersionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDocumentAiSchemaVersion.GoogleDocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



