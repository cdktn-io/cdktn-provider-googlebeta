# `googleVertexAiFeatureOnlineStoreIamBinding` Submodule <a name="`googleVertexAiFeatureOnlineStoreIamBinding` Submodule" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiFeatureOnlineStoreIamBinding <a name="GoogleVertexAiFeatureOnlineStoreIamBinding" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding google_vertex_ai_feature_online_store_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlevertexaifeatureonlinestoreiambinding"

googlevertexaifeatureonlinestoreiambinding.NewGoogleVertexAiFeatureOnlineStoreIamBinding(scope Construct, id *string, config GoogleVertexAiFeatureOnlineStoreIamBindingConfig) GoogleVertexAiFeatureOnlineStoreIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig">GoogleVertexAiFeatureOnlineStoreIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig">GoogleVertexAiFeatureOnlineStoreIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.putCondition"></a>

```go
func PutCondition(value GoogleVertexAiFeatureOnlineStoreIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiFeatureOnlineStoreIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlevertexaifeatureonlinestoreiambinding"

googlevertexaifeatureonlinestoreiambinding.GoogleVertexAiFeatureOnlineStoreIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlevertexaifeatureonlinestoreiambinding"

googlevertexaifeatureonlinestoreiambinding.GoogleVertexAiFeatureOnlineStoreIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlevertexaifeatureonlinestoreiambinding"

googlevertexaifeatureonlinestoreiambinding.GoogleVertexAiFeatureOnlineStoreIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlevertexaifeatureonlinestoreiambinding"

googlevertexaifeatureonlinestoreiambinding.GoogleVertexAiFeatureOnlineStoreIamBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleVertexAiFeatureOnlineStoreIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiFeatureOnlineStoreIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiFeatureOnlineStoreIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiFeatureOnlineStoreIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference">GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.featureOnlineStoreInput">FeatureOnlineStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.featureOnlineStore">FeatureOnlineStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.condition"></a>

```go
func Condition() GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference">GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.conditionInput"></a>

```go
func ConditionInput() GoogleVertexAiFeatureOnlineStoreIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a>

---

##### `FeatureOnlineStoreInput`<sup>Optional</sup> <a name="FeatureOnlineStoreInput" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.featureOnlineStoreInput"></a>

```go
func FeatureOnlineStoreInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `FeatureOnlineStore`<sup>Required</sup> <a name="FeatureOnlineStore" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.featureOnlineStore"></a>

```go
func FeatureOnlineStore() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiFeatureOnlineStoreIamBindingCondition <a name="GoogleVertexAiFeatureOnlineStoreIamBindingCondition" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlevertexaifeatureonlinestoreiambinding"

&googlevertexaifeatureonlinestoreiambinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#expression GoogleVertexAiFeatureOnlineStoreIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#title GoogleVertexAiFeatureOnlineStoreIamBinding#title}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#description GoogleVertexAiFeatureOnlineStoreIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#expression GoogleVertexAiFeatureOnlineStoreIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#title GoogleVertexAiFeatureOnlineStoreIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#description GoogleVertexAiFeatureOnlineStoreIamBinding#description}.

---

### GoogleVertexAiFeatureOnlineStoreIamBindingConfig <a name="GoogleVertexAiFeatureOnlineStoreIamBindingConfig" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlevertexaifeatureonlinestoreiambinding"

&googlevertexaifeatureonlinestoreiambinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FeatureOnlineStore: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition,
	Id: *string,
	Project: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.featureOnlineStore">FeatureOnlineStore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#feature_online_store GoogleVertexAiFeatureOnlineStoreIamBinding#feature_online_store}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#members GoogleVertexAiFeatureOnlineStoreIamBinding#members}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#role GoogleVertexAiFeatureOnlineStoreIamBinding#role}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#id GoogleVertexAiFeatureOnlineStoreIamBinding#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#project GoogleVertexAiFeatureOnlineStoreIamBinding#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#region GoogleVertexAiFeatureOnlineStoreIamBinding#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FeatureOnlineStore`<sup>Required</sup> <a name="FeatureOnlineStore" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.featureOnlineStore"></a>

```go
FeatureOnlineStore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#feature_online_store GoogleVertexAiFeatureOnlineStoreIamBinding#feature_online_store}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#members GoogleVertexAiFeatureOnlineStoreIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#role GoogleVertexAiFeatureOnlineStoreIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.condition"></a>

```go
Condition GoogleVertexAiFeatureOnlineStoreIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#condition GoogleVertexAiFeatureOnlineStoreIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#id GoogleVertexAiFeatureOnlineStoreIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#project GoogleVertexAiFeatureOnlineStoreIamBinding#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_vertex_ai_feature_online_store_iam_binding#region GoogleVertexAiFeatureOnlineStoreIamBinding#region}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference <a name="GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v17/googlevertexaifeatureonlinestoreiambinding"

googlevertexaifeatureonlinestoreiambinding.NewGoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiFeatureOnlineStoreIamBindingCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiFeatureOnlineStoreIamBinding.GoogleVertexAiFeatureOnlineStoreIamBindingCondition">GoogleVertexAiFeatureOnlineStoreIamBindingCondition</a>

---



