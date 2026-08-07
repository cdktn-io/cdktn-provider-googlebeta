# `googleChronicleDataExport` Submodule <a name="`googleChronicleDataExport` Submodule" id="@cdktn/provider-google-beta.googleChronicleDataExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleDataExport <a name="GoogleChronicleDataExport" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export google_chronicle_data_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

googlechronicledataexport.NewGoogleChronicleDataExport(scope Construct, id *string, config GoogleChronicleDataExportConfig) GoogleChronicleDataExport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig">GoogleChronicleDataExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig">GoogleChronicleDataExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putIngestionLabels">PutIngestionLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetIncludeLogTypes">ResetIncludeLogTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetIngestionLabels">ResetIngestionLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetNamespaces">ResetNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIngestionLabels` <a name="PutIngestionLabels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putIngestionLabels"></a>

```go
func PutIngestionLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putIngestionLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putTimeouts"></a>

```go
func PutTimeouts(value GoogleChronicleDataExportTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeLogTypes` <a name="ResetIncludeLogTypes" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetIncludeLogTypes"></a>

```go
func ResetIncludeLogTypes()
```

##### `ResetIngestionLabels` <a name="ResetIngestionLabels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetIngestionLabels"></a>

```go
func ResetIngestionLabels()
```

##### `ResetNamespaces` <a name="ResetNamespaces" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetNamespaces"></a>

```go
func ResetNamespaces()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleDataExport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

googlechronicledataexport.GoogleChronicleDataExport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

googlechronicledataexport.GoogleChronicleDataExport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

googlechronicledataexport.GoogleChronicleDataExport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

googlechronicledataexport.GoogleChronicleDataExport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleChronicleDataExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleChronicleDataExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleChronicleDataExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleDataExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dataExportId">DataExportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dataExportStatus">DataExportStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList">GoogleChronicleDataExportDataExportStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.estimatedVolume">EstimatedVolume</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.exportedVolume">ExportedVolume</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.ingestionLabels">IngestionLabels</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList">GoogleChronicleDataExportIngestionLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference">GoogleChronicleDataExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.gcsBucketInput">GcsBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.includeLogTypesInput">IncludeLogTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.ingestionLabelsInput">IngestionLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.namespacesInput">NamespacesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.gcsBucket">GcsBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.includeLogTypes">IncludeLogTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataExportId`<sup>Required</sup> <a name="DataExportId" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dataExportId"></a>

```go
func DataExportId() *string
```

- *Type:* *string

---

##### `DataExportStatus`<sup>Required</sup> <a name="DataExportStatus" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.dataExportStatus"></a>

```go
func DataExportStatus() GoogleChronicleDataExportDataExportStatusList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList">GoogleChronicleDataExportDataExportStatusList</a>

---

##### `EstimatedVolume`<sup>Required</sup> <a name="EstimatedVolume" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.estimatedVolume"></a>

```go
func EstimatedVolume() *f64
```

- *Type:* *f64

---

##### `ExportedVolume`<sup>Required</sup> <a name="ExportedVolume" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.exportedVolume"></a>

```go
func ExportedVolume() *f64
```

- *Type:* *f64

---

##### `IngestionLabels`<sup>Required</sup> <a name="IngestionLabels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.ingestionLabels"></a>

```go
func IngestionLabels() GoogleChronicleDataExportIngestionLabelsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList">GoogleChronicleDataExportIngestionLabelsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.timeouts"></a>

```go
func Timeouts() GoogleChronicleDataExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference">GoogleChronicleDataExportTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `GcsBucketInput`<sup>Optional</sup> <a name="GcsBucketInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.gcsBucketInput"></a>

```go
func GcsBucketInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeLogTypesInput`<sup>Optional</sup> <a name="IncludeLogTypesInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.includeLogTypesInput"></a>

```go
func IncludeLogTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IngestionLabelsInput`<sup>Optional</sup> <a name="IngestionLabelsInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.ingestionLabelsInput"></a>

```go
func IngestionLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.namespacesInput"></a>

```go
func NamespacesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.gcsBucket"></a>

```go
func GcsBucket() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeLogTypes`<sup>Required</sup> <a name="IncludeLogTypes" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.includeLogTypes"></a>

```go
func IncludeLogTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.namespaces"></a>

```go
func Namespaces() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleDataExportConfig <a name="GoogleChronicleDataExportConfig" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

&googlechronicledataexport.GoogleChronicleDataExportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndTime: *string,
	GcsBucket: *string,
	Instance: *string,
	Location: *string,
	StartTime: *string,
	Id: *string,
	IncludeLogTypes: *[]*string,
	IngestionLabels: interface{},
	Namespaces: *[]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleChronicleDataExport.GoogleChronicleDataExportTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.endTime">EndTime</a></code> | <code>*string</code> | Last, exclusive time from the range. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.gcsBucket">GcsBucket</a></code> | <code>*string</code> | Link to the destination Cloud Storage bucket. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.instance">Instance</a></code> | <code>*string</code> | The unique identifier for the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.startTime">StartTime</a></code> | <code>*string</code> | Start, inclusive time from the range. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#id GoogleChronicleDataExport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.includeLogTypes">IncludeLogTypes</a></code> | <code>*[]*string</code> | The specific log types to include in the Data Export request. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.ingestionLabels">IngestionLabels</a></code> | <code>interface{}</code> | ingestion_labels block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.namespaces">Namespaces</a></code> | <code>*[]*string</code> | The namespaces used to filter the export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#project GoogleChronicleDataExport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Last, exclusive time from the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#end_time GoogleChronicleDataExport#end_time}

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.gcsBucket"></a>

```go
GcsBucket *string
```

- *Type:* *string

Link to the destination Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#gcs_bucket GoogleChronicleDataExport#gcs_bucket}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The unique identifier for the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#instance GoogleChronicleDataExport#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#location GoogleChronicleDataExport#location}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Start, inclusive time from the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#start_time GoogleChronicleDataExport#start_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#id GoogleChronicleDataExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeLogTypes`<sup>Optional</sup> <a name="IncludeLogTypes" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.includeLogTypes"></a>

```go
IncludeLogTypes *[]*string
```

- *Type:* *[]*string

The specific log types to include in the Data Export request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#include_log_types GoogleChronicleDataExport#include_log_types}

---

##### `IngestionLabels`<sup>Optional</sup> <a name="IngestionLabels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.ingestionLabels"></a>

```go
IngestionLabels interface{}
```

- *Type:* interface{}

ingestion_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#ingestion_labels GoogleChronicleDataExport#ingestion_labels}

---

##### `Namespaces`<sup>Optional</sup> <a name="Namespaces" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.namespaces"></a>

```go
Namespaces *[]*string
```

- *Type:* *[]*string

The namespaces used to filter the export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#namespaces GoogleChronicleDataExport#namespaces}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#project GoogleChronicleDataExport#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportConfig.property.timeouts"></a>

```go
Timeouts GoogleChronicleDataExportTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts">GoogleChronicleDataExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#timeouts GoogleChronicleDataExport#timeouts}

---

### GoogleChronicleDataExportDataExportStatus <a name="GoogleChronicleDataExportDataExportStatus" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

&googlechronicledataexport.GoogleChronicleDataExportDataExportStatus {

}
```


### GoogleChronicleDataExportIngestionLabels <a name="GoogleChronicleDataExportIngestionLabels" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

&googlechronicledataexport.GoogleChronicleDataExportIngestionLabels {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.property.key">Key</a></code> | <code>*string</code> | The key. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.property.value">Value</a></code> | <code>*string</code> | The value. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#key GoogleChronicleDataExport#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabels.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#value GoogleChronicleDataExport#value}

---

### GoogleChronicleDataExportTimeouts <a name="GoogleChronicleDataExportTimeouts" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

&googlechronicledataexport.GoogleChronicleDataExportTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#create GoogleChronicleDataExport#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#delete GoogleChronicleDataExport#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#create GoogleChronicleDataExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_chronicle_data_export#delete GoogleChronicleDataExport#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleDataExportDataExportStatusList <a name="GoogleChronicleDataExportDataExportStatusList" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

googlechronicledataexport.NewGoogleChronicleDataExportDataExportStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleChronicleDataExportDataExportStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.get"></a>

```go
func Get(index *f64) GoogleChronicleDataExportDataExportStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleChronicleDataExportDataExportStatusOutputReference <a name="GoogleChronicleDataExportDataExportStatusOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

googlechronicledataexport.NewGoogleChronicleDataExportDataExportStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleChronicleDataExportDataExportStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.dataRbacFiltered">DataRbacFiltered</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.error">Error</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.exportedGlobPatterns">ExportedGlobPatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus">GoogleChronicleDataExportDataExportStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataRbacFiltered`<sup>Required</sup> <a name="DataRbacFiltered" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.dataRbacFiltered"></a>

```go
func DataRbacFiltered() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.error"></a>

```go
func Error() *string
```

- *Type:* *string

---

##### `ExportedGlobPatterns`<sup>Required</sup> <a name="ExportedGlobPatterns" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.exportedGlobPatterns"></a>

```go
func ExportedGlobPatterns() *[]*string
```

- *Type:* *[]*string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleChronicleDataExportDataExportStatus
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportDataExportStatus">GoogleChronicleDataExportDataExportStatus</a>

---


### GoogleChronicleDataExportIngestionLabelsList <a name="GoogleChronicleDataExportIngestionLabelsList" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

googlechronicledataexport.NewGoogleChronicleDataExportIngestionLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleChronicleDataExportIngestionLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.get"></a>

```go
func Get(index *f64) GoogleChronicleDataExportIngestionLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleChronicleDataExportIngestionLabelsOutputReference <a name="GoogleChronicleDataExportIngestionLabelsOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

googlechronicledataexport.NewGoogleChronicleDataExportIngestionLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleChronicleDataExportIngestionLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportIngestionLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleChronicleDataExportTimeoutsOutputReference <a name="GoogleChronicleDataExportTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlechronicledataexport"

googlechronicledataexport.NewGoogleChronicleDataExportTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleChronicleDataExportTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleDataExport.GoogleChronicleDataExportTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



