# `googleVectorSearchIndex` Submodule <a name="`googleVectorSearchIndex` Submodule" id="@cdktn/provider-google-beta.googleVectorSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVectorSearchIndex <a name="GoogleVectorSearchIndex" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index google_vector_search_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

googlevectorsearchindex.NewGoogleVectorSearchIndex(scope Construct, id *string, config GoogleVectorSearchIndexConfig) GoogleVectorSearchIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig">GoogleVectorSearchIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig">GoogleVectorSearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure">PutDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann">PutDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDedicatedInfrastructure">ResetDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDenseScann">ResetDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDistanceMetric">ResetDistanceMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetFilterFields">ResetFilterFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetStoreFields">ResetStoreFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDedicatedInfrastructure` <a name="PutDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure"></a>

```go
func PutDedicatedInfrastructure(value GoogleVectorSearchIndexDedicatedInfrastructure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDedicatedInfrastructure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---

##### `PutDenseScann` <a name="PutDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann"></a>

```go
func PutDenseScann(value GoogleVectorSearchIndexDenseScann)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putDenseScann.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVectorSearchIndexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

---

##### `ResetDedicatedInfrastructure` <a name="ResetDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDedicatedInfrastructure"></a>

```go
func ResetDedicatedInfrastructure()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDenseScann` <a name="ResetDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDenseScann"></a>

```go
func ResetDenseScann()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDistanceMetric` <a name="ResetDistanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetDistanceMetric"></a>

```go
func ResetDistanceMetric()
```

##### `ResetFilterFields` <a name="ResetFilterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetFilterFields"></a>

```go
func ResetFilterFields()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetProject"></a>

```go
func ResetProject()
```

##### `ResetStoreFields` <a name="ResetStoreFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetStoreFields"></a>

```go
func ResetStoreFields()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVectorSearchIndex resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

googlevectorsearchindex.GoogleVectorSearchIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

googlevectorsearchindex.GoogleVectorSearchIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

googlevectorsearchindex.GoogleVectorSearchIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

googlevectorsearchindex.GoogleVectorSearchIndex_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleVectorSearchIndex resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVectorSearchIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVectorSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVectorSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructure">DedicatedInfrastructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScann">DenseScann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference">GoogleVectorSearchIndexDenseScannOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference">GoogleVectorSearchIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructureInput">DedicatedInfrastructureInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScannInput">DenseScannInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetricInput">DistanceMetricInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFieldsInput">FilterFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexFieldInput">IndexFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexIdInput">IndexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFieldsInput">StoreFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetric">DistanceMetric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFields">FilterFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexField">IndexField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexId">IndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFields">StoreFields</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DedicatedInfrastructure`<sup>Required</sup> <a name="DedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructure"></a>

```go
func DedicatedInfrastructure() GoogleVectorSearchIndexDedicatedInfrastructureOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureOutputReference</a>

---

##### `DenseScann`<sup>Required</sup> <a name="DenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScann"></a>

```go
func DenseScann() GoogleVectorSearchIndexDenseScannOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference">GoogleVectorSearchIndexDenseScannOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeouts"></a>

```go
func Timeouts() GoogleVectorSearchIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference">GoogleVectorSearchIndexTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `DedicatedInfrastructureInput`<sup>Optional</sup> <a name="DedicatedInfrastructureInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.dedicatedInfrastructureInput"></a>

```go
func DedicatedInfrastructureInput() GoogleVectorSearchIndexDedicatedInfrastructure
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DenseScannInput`<sup>Optional</sup> <a name="DenseScannInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.denseScannInput"></a>

```go
func DenseScannInput() GoogleVectorSearchIndexDenseScann
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DistanceMetricInput`<sup>Optional</sup> <a name="DistanceMetricInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetricInput"></a>

```go
func DistanceMetricInput() *string
```

- *Type:* *string

---

##### `FilterFieldsInput`<sup>Optional</sup> <a name="FilterFieldsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFieldsInput"></a>

```go
func FilterFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexFieldInput`<sup>Optional</sup> <a name="IndexFieldInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexFieldInput"></a>

```go
func IndexFieldInput() *string
```

- *Type:* *string

---

##### `IndexIdInput`<sup>Optional</sup> <a name="IndexIdInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexIdInput"></a>

```go
func IndexIdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `StoreFieldsInput`<sup>Optional</sup> <a name="StoreFieldsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFieldsInput"></a>

```go
func StoreFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DistanceMetric`<sup>Required</sup> <a name="DistanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.distanceMetric"></a>

```go
func DistanceMetric() *string
```

- *Type:* *string

---

##### `FilterFields`<sup>Required</sup> <a name="FilterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.filterFields"></a>

```go
func FilterFields() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexField`<sup>Required</sup> <a name="IndexField" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexField"></a>

```go
func IndexField() *string
```

- *Type:* *string

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.indexId"></a>

```go
func IndexId() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `StoreFields`<sup>Required</sup> <a name="StoreFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.storeFields"></a>

```go
func StoreFields() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVectorSearchIndexConfig <a name="GoogleVectorSearchIndexConfig" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

&googlevectorsearchindex.GoogleVectorSearchIndexConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CollectionId: *string,
	IndexField: *string,
	IndexId: *string,
	Location: *string,
	DedicatedInfrastructure: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure,
	DeletionPolicy: *string,
	DenseScann: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann,
	Description: *string,
	DisplayName: *string,
	DistanceMetric: *string,
	FilterFields: *[]*string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	StoreFields: *[]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | The ID of the parent Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexField">IndexField</a></code> | <code>*string</code> | The collection schema field to index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexId">IndexId</a></code> | <code>*string</code> | ID of the Index to create. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dedicatedInfrastructure">DedicatedInfrastructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | dedicated_infrastructure block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.denseScann">DenseScann</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | dense_scann block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.description">Description</a></code> | <code>*string</code> | User-specified description of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-specified display name of the index. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.distanceMetric">DistanceMetric</a></code> | <code>*string</code> | Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.filterFields">FilterFields</a></code> | <code>*[]*string</code> | The fields to push into the index to enable fast ANN inline filtering. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.storeFields">StoreFields</a></code> | <code>*[]*string</code> | The fields to push into the index to enable inline data retrieval. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

The ID of the parent Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#collection_id GoogleVectorSearchIndex#collection_id}

---

##### `IndexField`<sup>Required</sup> <a name="IndexField" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexField"></a>

```go
IndexField *string
```

- *Type:* *string

The collection schema field to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#index_field GoogleVectorSearchIndex#index_field}

---

##### `IndexId`<sup>Required</sup> <a name="IndexId" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.indexId"></a>

```go
IndexId *string
```

- *Type:* *string

ID of the Index to create.

The id must be 1-63 characters long, and comply with
[RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
Specifically, it must be 1-63 characters long and match the regular
expression '[a-z](?:%5B-a-z0-9%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#index_id GoogleVectorSearchIndex#index_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#location GoogleVectorSearchIndex#location}

---

##### `DedicatedInfrastructure`<sup>Optional</sup> <a name="DedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.dedicatedInfrastructure"></a>

```go
DedicatedInfrastructure GoogleVectorSearchIndexDedicatedInfrastructure
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

dedicated_infrastructure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#dedicated_infrastructure GoogleVectorSearchIndex#dedicated_infrastructure}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#deletion_policy GoogleVectorSearchIndex#deletion_policy}

---

##### `DenseScann`<sup>Optional</sup> <a name="DenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.denseScann"></a>

```go
DenseScann GoogleVectorSearchIndexDenseScann
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

dense_scann block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#dense_scann GoogleVectorSearchIndex#dense_scann}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-specified description of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#description GoogleVectorSearchIndex#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-specified display name of the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#display_name GoogleVectorSearchIndex#display_name}

---

##### `DistanceMetric`<sup>Optional</sup> <a name="DistanceMetric" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.distanceMetric"></a>

```go
DistanceMetric *string
```

- *Type:* *string

Distance metric used for indexing. If not specified, will default to 'DOT_PRODUCT'. Possible values: ["DOT_PRODUCT", "COSINE_DISTANCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#distance_metric GoogleVectorSearchIndex#distance_metric}

---

##### `FilterFields`<sup>Optional</sup> <a name="FilterFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.filterFields"></a>

```go
FilterFields *[]*string
```

- *Type:* *[]*string

The fields to push into the index to enable fast ANN inline filtering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#filter_fields GoogleVectorSearchIndex#filter_fields}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#id GoogleVectorSearchIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#labels GoogleVectorSearchIndex#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#project GoogleVectorSearchIndex#project}.

---

##### `StoreFields`<sup>Optional</sup> <a name="StoreFields" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.storeFields"></a>

```go
StoreFields *[]*string
```

- *Type:* *[]*string

The fields to push into the index to enable inline data retrieval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#store_fields GoogleVectorSearchIndex#store_fields}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexConfig.property.timeouts"></a>

```go
Timeouts GoogleVectorSearchIndexTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts">GoogleVectorSearchIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#timeouts GoogleVectorSearchIndex#timeouts}

---

### GoogleVectorSearchIndexDedicatedInfrastructure <a name="GoogleVectorSearchIndexDedicatedInfrastructure" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

&googlevectorsearchindex.GoogleVectorSearchIndexDedicatedInfrastructure {
	AutoscalingSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec">AutoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | autoscaling_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.mode">Mode</a></code> | <code>*string</code> | Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"]. |

---

##### `AutoscalingSpec`<sup>Optional</sup> <a name="AutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.autoscalingSpec"></a>

```go
AutoscalingSpec GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#autoscaling_spec GoogleVectorSearchIndex#autoscaling_spec}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Mode of the dedicated infrastructure. Defaults to 'PERFORMANCE_OPTIMIZED'. Possible values: ["MODE_UNSPECIFIED", "STORAGE_OPTIMIZED", "PERFORMANCE_OPTIMIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#mode GoogleVectorSearchIndex#mode}

---

### GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec <a name="GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

&googlevectorsearchindex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec {
	MaxReplicaCount: *f64,
	MinReplicaCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | The maximum number of replicas. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | The minimum number of replicas. |

---

##### `MaxReplicaCount`<sup>Optional</sup> <a name="MaxReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.maxReplicaCount"></a>

```go
MaxReplicaCount *f64
```

- *Type:* *f64

The maximum number of replicas.

Must be >= 'min_replica_count'
and <= '1000'. If not set or set to '0', defaults to the greater
of 'min_replica_count' and '2' (or '5' for the v1beta version).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#max_replica_count GoogleVectorSearchIndex#max_replica_count}

---

##### `MinReplicaCount`<sup>Optional</sup> <a name="MinReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec.property.minReplicaCount"></a>

```go
MinReplicaCount *f64
```

- *Type:* *f64

The minimum number of replicas.

If not set or set to '0', defaults
to '2'. Must be >= '1' and <= '1000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#min_replica_count GoogleVectorSearchIndex#min_replica_count}

---

### GoogleVectorSearchIndexDenseScann <a name="GoogleVectorSearchIndexDenseScann" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

&googlevectorsearchindex.GoogleVectorSearchIndexDenseScann {
	FeatureNormType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.property.featureNormType">FeatureNormType</a></code> | <code>*string</code> | Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"]. |

---

##### `FeatureNormType`<sup>Optional</sup> <a name="FeatureNormType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann.property.featureNormType"></a>

```go
FeatureNormType *string
```

- *Type:* *string

Feature norm type for the ScaNN index. Possible values: ["FEATURE_NORM_TYPE_UNSPECIFIED", "NONE", "UNIT_L2_NORM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#feature_norm_type GoogleVectorSearchIndex#feature_norm_type}

---

### GoogleVectorSearchIndexTimeouts <a name="GoogleVectorSearchIndexTimeouts" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

&googlevectorsearchindex.GoogleVectorSearchIndexTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#create GoogleVectorSearchIndex#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#delete GoogleVectorSearchIndex#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#update GoogleVectorSearchIndex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#create GoogleVectorSearchIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#delete GoogleVectorSearchIndex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vector_search_index#update GoogleVectorSearchIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference <a name="GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

googlevectorsearchindex.NewGoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount">ResetMaxReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount">ResetMinReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReplicaCount` <a name="ResetMaxReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMaxReplicaCount"></a>

```go
func ResetMaxReplicaCount()
```

##### `ResetMinReplicaCount` <a name="ResetMinReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.resetMinReplicaCount"></a>

```go
func ResetMinReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput">MaxReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput">MinReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReplicaCountInput`<sup>Optional</sup> <a name="MaxReplicaCountInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCountInput"></a>

```go
func MaxReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `MinReplicaCountInput`<sup>Optional</sup> <a name="MinReplicaCountInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCountInput"></a>

```go
func MinReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.maxReplicaCount"></a>

```go
func MaxReplicaCount() *f64
```

- *Type:* *f64

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.minReplicaCount"></a>

```go
func MinReplicaCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---


### GoogleVectorSearchIndexDedicatedInfrastructureOutputReference <a name="GoogleVectorSearchIndexDedicatedInfrastructureOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

googlevectorsearchindex.NewGoogleVectorSearchIndexDedicatedInfrastructureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVectorSearchIndexDedicatedInfrastructureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec">PutAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec">ResetAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingSpec` <a name="PutAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec"></a>

```go
func PutAutoscalingSpec(value GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.putAutoscalingSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---

##### `ResetAutoscalingSpec` <a name="ResetAutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetAutoscalingSpec"></a>

```go
func ResetAutoscalingSpec()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec">AutoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput">AutoscalingSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingSpec`<sup>Required</sup> <a name="AutoscalingSpec" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpec"></a>

```go
func AutoscalingSpec() GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpecOutputReference</a>

---

##### `AutoscalingSpecInput`<sup>Optional</sup> <a name="AutoscalingSpecInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.autoscalingSpecInput"></a>

```go
func AutoscalingSpecInput() GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec">GoogleVectorSearchIndexDedicatedInfrastructureAutoscalingSpec</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructureOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVectorSearchIndexDedicatedInfrastructure
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDedicatedInfrastructure">GoogleVectorSearchIndexDedicatedInfrastructure</a>

---


### GoogleVectorSearchIndexDenseScannOutputReference <a name="GoogleVectorSearchIndexDenseScannOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

googlevectorsearchindex.NewGoogleVectorSearchIndexDenseScannOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVectorSearchIndexDenseScannOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resetFeatureNormType">ResetFeatureNormType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFeatureNormType` <a name="ResetFeatureNormType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.resetFeatureNormType"></a>

```go
func ResetFeatureNormType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput">FeatureNormTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormType">FeatureNormType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FeatureNormTypeInput`<sup>Optional</sup> <a name="FeatureNormTypeInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormTypeInput"></a>

```go
func FeatureNormTypeInput() *string
```

- *Type:* *string

---

##### `FeatureNormType`<sup>Required</sup> <a name="FeatureNormType" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.featureNormType"></a>

```go
func FeatureNormType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScannOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVectorSearchIndexDenseScann
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexDenseScann">GoogleVectorSearchIndexDenseScann</a>

---


### GoogleVectorSearchIndexTimeoutsOutputReference <a name="GoogleVectorSearchIndexTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevectorsearchindex"

googlevectorsearchindex.NewGoogleVectorSearchIndexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVectorSearchIndexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVectorSearchIndex.GoogleVectorSearchIndexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



