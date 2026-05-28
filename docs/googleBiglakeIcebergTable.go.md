# `googleBiglakeIcebergTable` Submodule <a name="`googleBiglakeIcebergTable` Submodule" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeIcebergTable <a name="GoogleBiglakeIcebergTable" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table google_biglake_iceberg_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

googlebiglakeicebergtable.NewGoogleBiglakeIcebergTable(scope Construct, id *string, config GoogleBiglakeIcebergTableConfig) GoogleBiglakeIcebergTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig">GoogleBiglakeIcebergTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig">GoogleBiglakeIcebergTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putPartitionSpec">PutPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetPartitionSpec">ResetPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPartitionSpec` <a name="PutPartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putPartitionSpec"></a>

```go
func PutPartitionSpec(value GoogleBiglakeIcebergTablePartitionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putSchema"></a>

```go
func PutSchema(value GoogleBiglakeIcebergTableSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBiglakeIcebergTableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetPartitionSpec` <a name="ResetPartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetPartitionSpec"></a>

```go
func ResetPartitionSpec()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProject"></a>

```go
func ResetProject()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBiglakeIcebergTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

googlebiglakeicebergtable.GoogleBiglakeIcebergTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

googlebiglakeicebergtable.GoogleBiglakeIcebergTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

googlebiglakeicebergtable.GoogleBiglakeIcebergTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

googlebiglakeicebergtable.GoogleBiglakeIcebergTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleBiglakeIcebergTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBiglakeIcebergTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBiglakeIcebergTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeIcebergTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpec">PartitionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference">GoogleBiglakeIcebergTablePartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference">GoogleBiglakeIcebergTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference">GoogleBiglakeIcebergTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpecInput">PartitionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PartitionSpec`<sup>Required</sup> <a name="PartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpec"></a>

```go
func PartitionSpec() GoogleBiglakeIcebergTablePartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference">GoogleBiglakeIcebergTablePartitionSpecOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schema"></a>

```go
func Schema() GoogleBiglakeIcebergTableSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference">GoogleBiglakeIcebergTableSchemaOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeouts"></a>

```go
func Timeouts() GoogleBiglakeIcebergTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference">GoogleBiglakeIcebergTableTimeoutsOutputReference</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PartitionSpecInput`<sup>Optional</sup> <a name="PartitionSpecInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.partitionSpecInput"></a>

```go
func PartitionSpecInput() GoogleBiglakeIcebergTablePartitionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.schemaInput"></a>

```go
func SchemaInput() GoogleBiglakeIcebergTableSchema
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeIcebergTableConfig <a name="GoogleBiglakeIcebergTableConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

&googlebiglakeicebergtable.GoogleBiglakeIcebergTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Catalog: *string,
	Name: *string,
	Namespace: *string,
	Schema: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema,
	DeletionPolicy: *string,
	Id: *string,
	Location: *string,
	PartitionSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec,
	Project: *string,
	Properties: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.catalog">Catalog</a></code> | <code>*string</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.name">Name</a></code> | <code>*string</code> | The name of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The parent namespace of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.location">Location</a></code> | <code>*string</code> | The location of the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.partitionSpec">PartitionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | partition_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#project GoogleBiglakeIcebergTable#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.properties">Properties</a></code> | <code>*map[string]*string</code> | User-defined properties for the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

The name of the IcebergCatalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#catalog GoogleBiglakeIcebergTable#catalog}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The parent namespace of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#namespace GoogleBiglakeIcebergTable#namespace}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.schema"></a>

```go
Schema GoogleBiglakeIcebergTableSchema
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#schema GoogleBiglakeIcebergTable#schema}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#deletion_policy GoogleBiglakeIcebergTable#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#location GoogleBiglakeIcebergTable#location}

---

##### `PartitionSpec`<sup>Optional</sup> <a name="PartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.partitionSpec"></a>

```go
PartitionSpec GoogleBiglakeIcebergTablePartitionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#partition_spec GoogleBiglakeIcebergTable#partition_spec}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#project GoogleBiglakeIcebergTable#project}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

User-defined properties for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#properties GoogleBiglakeIcebergTable#properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableConfig.property.timeouts"></a>

```go
Timeouts GoogleBiglakeIcebergTableTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts">GoogleBiglakeIcebergTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#timeouts GoogleBiglakeIcebergTable#timeouts}

---

### GoogleBiglakeIcebergTablePartitionSpec <a name="GoogleBiglakeIcebergTablePartitionSpec" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

&googlebiglakeicebergtable.GoogleBiglakeIcebergTablePartitionSpec {
	Fields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec.property.fields">Fields</a></code> | <code>interface{}</code> | fields block. |

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#fields GoogleBiglakeIcebergTable#fields}

---

### GoogleBiglakeIcebergTablePartitionSpecFields <a name="GoogleBiglakeIcebergTablePartitionSpecFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

&googlebiglakeicebergtable.GoogleBiglakeIcebergTablePartitionSpecFields {
	Name: *string,
	SourceId: *f64,
	Transform: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.name">Name</a></code> | <code>*string</code> | The name of the partition field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.sourceId">SourceId</a></code> | <code>*f64</code> | The source field ID for the partition field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.transform">Transform</a></code> | <code>*string</code> | The transform to apply to the source field. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.sourceId"></a>

```go
SourceId *f64
```

- *Type:* *f64

The source field ID for the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#source_id GoogleBiglakeIcebergTable#source_id}

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFields.property.transform"></a>

```go
Transform *string
```

- *Type:* *string

The transform to apply to the source field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#transform GoogleBiglakeIcebergTable#transform}

---

### GoogleBiglakeIcebergTableSchema <a name="GoogleBiglakeIcebergTableSchema" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

&googlebiglakeicebergtable.GoogleBiglakeIcebergTableSchema {
	Fields: interface{},
	IdentifierFieldIds: *[]*f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.fields">Fields</a></code> | <code>interface{}</code> | fields block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.identifierFieldIds">IdentifierFieldIds</a></code> | <code>*[]*f64</code> | The field IDs that make up the identifier for the table. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.type">Type</a></code> | <code>*string</code> | The type of the schema. |

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#fields GoogleBiglakeIcebergTable#fields}

---

##### `IdentifierFieldIds`<sup>Optional</sup> <a name="IdentifierFieldIds" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.identifierFieldIds"></a>

```go
IdentifierFieldIds *[]*f64
```

- *Type:* *[]*f64

The field IDs that make up the identifier for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#identifier_field_ids GoogleBiglakeIcebergTable#identifier_field_ids}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#type GoogleBiglakeIcebergTable#type}

---

### GoogleBiglakeIcebergTableSchemaFields <a name="GoogleBiglakeIcebergTableSchemaFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

&googlebiglakeicebergtable.GoogleBiglakeIcebergTableSchemaFields {
	Id: *f64,
	Name: *string,
	Required: interface{},
	Type: *string,
	Doc: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.id">Id</a></code> | <code>*f64</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.name">Name</a></code> | <code>*string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.required">Required</a></code> | <code>interface{}</code> | Whether the field is required. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.type">Type</a></code> | <code>*string</code> | The type of the field. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.doc">Doc</a></code> | <code>*string</code> | A description of the field. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.id"></a>

```go
Id *f64
```

- *Type:* *f64

The unique identifier of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#id GoogleBiglakeIcebergTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#name GoogleBiglakeIcebergTable#name}

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Whether the field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#required GoogleBiglakeIcebergTable#required}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#type GoogleBiglakeIcebergTable#type}

---

##### `Doc`<sup>Optional</sup> <a name="Doc" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFields.property.doc"></a>

```go
Doc *string
```

- *Type:* *string

A description of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#doc GoogleBiglakeIcebergTable#doc}

---

### GoogleBiglakeIcebergTableTimeouts <a name="GoogleBiglakeIcebergTableTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

&googlebiglakeicebergtable.GoogleBiglakeIcebergTableTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#create GoogleBiglakeIcebergTable#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#delete GoogleBiglakeIcebergTable#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#update GoogleBiglakeIcebergTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#create GoogleBiglakeIcebergTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#delete GoogleBiglakeIcebergTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_biglake_iceberg_table#update GoogleBiglakeIcebergTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeIcebergTablePartitionSpecFieldsList <a name="GoogleBiglakeIcebergTablePartitionSpecFieldsList" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

googlebiglakeicebergtable.NewGoogleBiglakeIcebergTablePartitionSpecFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBiglakeIcebergTablePartitionSpecFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.get"></a>

```go
func Get(index *f64) GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference <a name="GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

googlebiglakeicebergtable.NewGoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceIdInput">SourceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transformInput">TransformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transform">Transform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.fieldId"></a>

```go
func FieldId() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```go
func SourceIdInput() *f64
```

- *Type:* *f64

---

##### `TransformInput`<sup>Optional</sup> <a name="TransformInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transformInput"></a>

```go
func TransformInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.sourceId"></a>

```go
func SourceId() *f64
```

- *Type:* *f64

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.transform"></a>

```go
func Transform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBiglakeIcebergTablePartitionSpecOutputReference <a name="GoogleBiglakeIcebergTablePartitionSpecOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

googlebiglakeicebergtable.NewGoogleBiglakeIcebergTablePartitionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBiglakeIcebergTablePartitionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.putFields">PutFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList">GoogleBiglakeIcebergTablePartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.specId">SpecId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fields"></a>

```go
func Fields() GoogleBiglakeIcebergTablePartitionSpecFieldsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecFieldsList">GoogleBiglakeIcebergTablePartitionSpecFieldsList</a>

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.specId"></a>

```go
func SpecId() *f64
```

- *Type:* *f64

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBiglakeIcebergTablePartitionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTablePartitionSpec">GoogleBiglakeIcebergTablePartitionSpec</a>

---


### GoogleBiglakeIcebergTableSchemaFieldsList <a name="GoogleBiglakeIcebergTableSchemaFieldsList" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

googlebiglakeicebergtable.NewGoogleBiglakeIcebergTableSchemaFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBiglakeIcebergTableSchemaFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.get"></a>

```go
func Get(index *f64) GoogleBiglakeIcebergTableSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBiglakeIcebergTableSchemaFieldsOutputReference <a name="GoogleBiglakeIcebergTableSchemaFieldsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

googlebiglakeicebergtable.NewGoogleBiglakeIcebergTableSchemaFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBiglakeIcebergTableSchemaFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resetDoc">ResetDoc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDoc` <a name="ResetDoc" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.resetDoc"></a>

```go
func ResetDoc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.docInput">DocInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.idInput">IdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.doc">Doc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocInput`<sup>Optional</sup> <a name="DocInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.docInput"></a>

```go
func DocInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.idInput"></a>

```go
func IdInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Doc`<sup>Required</sup> <a name="Doc" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.doc"></a>

```go
func Doc() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBiglakeIcebergTableSchemaOutputReference <a name="GoogleBiglakeIcebergTableSchemaOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

googlebiglakeicebergtable.NewGoogleBiglakeIcebergTableSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBiglakeIcebergTableSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetIdentifierFieldIds">ResetIdentifierFieldIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentifierFieldIds` <a name="ResetIdentifierFieldIds" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetIdentifierFieldIds"></a>

```go
func ResetIdentifierFieldIds()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList">GoogleBiglakeIcebergTableSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.schemaId">SchemaId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIdsInput">IdentifierFieldIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIds">IdentifierFieldIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fields"></a>

```go
func Fields() GoogleBiglakeIcebergTableSchemaFieldsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaFieldsList">GoogleBiglakeIcebergTableSchemaFieldsList</a>

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.schemaId"></a>

```go
func SchemaId() *f64
```

- *Type:* *f64

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `IdentifierFieldIdsInput`<sup>Optional</sup> <a name="IdentifierFieldIdsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIdsInput"></a>

```go
func IdentifierFieldIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentifierFieldIds`<sup>Required</sup> <a name="IdentifierFieldIds" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.identifierFieldIds"></a>

```go
func IdentifierFieldIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBiglakeIcebergTableSchema
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableSchema">GoogleBiglakeIcebergTableSchema</a>

---


### GoogleBiglakeIcebergTableTimeoutsOutputReference <a name="GoogleBiglakeIcebergTableTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlebiglakeicebergtable"

googlebiglakeicebergtable.NewGoogleBiglakeIcebergTableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBiglakeIcebergTableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergTable.GoogleBiglakeIcebergTableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



