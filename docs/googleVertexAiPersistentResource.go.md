# `googleVertexAiPersistentResource` Submodule <a name="`googleVertexAiPersistentResource` Submodule" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiPersistentResource <a name="GoogleVertexAiPersistentResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource google_vertex_ai_persistent_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResource(scope Construct, id *string, config GoogleVertexAiPersistentResourceConfig) GoogleVertexAiPersistentResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig">GoogleVertexAiPersistentResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig">GoogleVertexAiPersistentResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putPscInterfaceConfig">PutPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourcePools">PutResourcePools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourceRuntimeSpec">PutResourceRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetPscInterfaceConfig">ResetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetReservedIpRanges">ResetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetResourceRuntimeSpec">ResetResourceRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value GoogleVertexAiPersistentResourceEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a>

---

##### `PutPscInterfaceConfig` <a name="PutPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putPscInterfaceConfig"></a>

```go
func PutPscInterfaceConfig(value GoogleVertexAiPersistentResourcePscInterfaceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a>

---

##### `PutResourcePools` <a name="PutResourcePools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourcePools"></a>

```go
func PutResourcePools(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourcePools.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceRuntimeSpec` <a name="PutResourceRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourceRuntimeSpec"></a>

```go
func PutResourceRuntimeSpec(value GoogleVertexAiPersistentResourceResourceRuntimeSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putResourceRuntimeSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVertexAiPersistentResourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPscInterfaceConfig` <a name="ResetPscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetPscInterfaceConfig"></a>

```go
func ResetPscInterfaceConfig()
```

##### `ResetReservedIpRanges` <a name="ResetReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetReservedIpRanges"></a>

```go
func ResetReservedIpRanges()
```

##### `ResetResourceRuntimeSpec` <a name="ResetResourceRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetResourceRuntimeSpec"></a>

```go
func ResetResourceRuntimeSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiPersistentResource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.GoogleVertexAiPersistentResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.GoogleVertexAiPersistentResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.GoogleVertexAiPersistentResource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.GoogleVertexAiPersistentResource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleVertexAiPersistentResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiPersistentResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiPersistentResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiPersistentResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference">GoogleVertexAiPersistentResourceEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList">GoogleVertexAiPersistentResourceErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference">GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourcePools">ResourcePools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList">GoogleVertexAiPersistentResourceResourcePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntime">ResourceRuntime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList">GoogleVertexAiPersistentResourceResourceRuntimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntimeSpec">ResourceRuntimeSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference">GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.satisfiesPzi">SatisfiesPzi</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.satisfiesPzs">SatisfiesPzs</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference">GoogleVertexAiPersistentResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.pscInterfaceConfigInput">PscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.reservedIpRangesInput">ReservedIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourcePoolsInput">ResourcePoolsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntimeSpecInput">ResourceRuntimeSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.encryptionSpec"></a>

```go
func EncryptionSpec() GoogleVertexAiPersistentResourceEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference">GoogleVertexAiPersistentResourceEncryptionSpecOutputReference</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.error"></a>

```go
func Error() GoogleVertexAiPersistentResourceErrorList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList">GoogleVertexAiPersistentResourceErrorList</a>

---

##### `PscInterfaceConfig`<sup>Required</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.pscInterfaceConfig"></a>

```go
func PscInterfaceConfig() GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference">GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference</a>

---

##### `ResourcePools`<sup>Required</sup> <a name="ResourcePools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourcePools"></a>

```go
func ResourcePools() GoogleVertexAiPersistentResourceResourcePoolsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList">GoogleVertexAiPersistentResourceResourcePoolsList</a>

---

##### `ResourceRuntime`<sup>Required</sup> <a name="ResourceRuntime" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntime"></a>

```go
func ResourceRuntime() GoogleVertexAiPersistentResourceResourceRuntimeList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList">GoogleVertexAiPersistentResourceResourceRuntimeList</a>

---

##### `ResourceRuntimeSpec`<sup>Required</sup> <a name="ResourceRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntimeSpec"></a>

```go
func ResourceRuntimeSpec() GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference">GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference</a>

---

##### `SatisfiesPzi`<sup>Required</sup> <a name="SatisfiesPzi" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.satisfiesPzi"></a>

```go
func SatisfiesPzi() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SatisfiesPzs`<sup>Required</sup> <a name="SatisfiesPzs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.satisfiesPzs"></a>

```go
func SatisfiesPzs() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.timeouts"></a>

```go
func Timeouts() GoogleVertexAiPersistentResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference">GoogleVertexAiPersistentResourceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() GoogleVertexAiPersistentResourceEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PscInterfaceConfigInput`<sup>Optional</sup> <a name="PscInterfaceConfigInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.pscInterfaceConfigInput"></a>

```go
func PscInterfaceConfigInput() GoogleVertexAiPersistentResourcePscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a>

---

##### `ReservedIpRangesInput`<sup>Optional</sup> <a name="ReservedIpRangesInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.reservedIpRangesInput"></a>

```go
func ReservedIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcePoolsInput`<sup>Optional</sup> <a name="ResourcePoolsInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourcePoolsInput"></a>

```go
func ResourcePoolsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceRuntimeSpecInput`<sup>Optional</sup> <a name="ResourceRuntimeSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.resourceRuntimeSpecInput"></a>

```go
func ResourceRuntimeSpecInput() GoogleVertexAiPersistentResourceResourceRuntimeSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReservedIpRanges`<sup>Required</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.reservedIpRanges"></a>

```go
func ReservedIpRanges() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiPersistentResourceConfig <a name="GoogleVertexAiPersistentResourceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourcePools: interface{},
	DeletionPolicy: *string,
	DisplayName: *string,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Network: *string,
	Project: *string,
	PscInterfaceConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig,
	ReservedIpRanges: *[]*string,
	ResourceRuntimeSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.name">Name</a></code> | <code>*string</code> | The ID to use for the PersistentResource, which become the final component of the PersistentResource's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.resourcePools">ResourcePools</a></code> | <code>interface{}</code> | resource_pools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.location">Location</a></code> | <code>*string</code> | The location of the PersistentResource. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.network">Network</a></code> | <code>*string</code> | The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#project GoogleVertexAiPersistentResource#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>*[]*string</code> | A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.resourceRuntimeSpec">ResourceRuntimeSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a></code> | resource_runtime_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID to use for the PersistentResource, which become the final component of the PersistentResource's resource name.

The maximum length is 63 characters, and valid characters
are '/^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#name GoogleVertexAiPersistentResource#name}

---

##### `ResourcePools`<sup>Required</sup> <a name="ResourcePools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.resourcePools"></a>

```go
ResourcePools interface{}
```

- *Type:* interface{}

resource_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#resource_pools GoogleVertexAiPersistentResource#resource_pools}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#deletion_policy GoogleVertexAiPersistentResource#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the PersistentResource.

The name can be up to 128 characters long and can consist of any UTF-8
characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#display_name GoogleVertexAiPersistentResource#display_name}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.encryptionSpec"></a>

```go
EncryptionSpec GoogleVertexAiPersistentResourceEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#encryption_spec GoogleVertexAiPersistentResource#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize PersistentResource.

Label keys and values can be no longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.

See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#labels GoogleVertexAiPersistentResource#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the PersistentResource. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#location GoogleVertexAiPersistentResource#location}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The full name of the Compute Engine [network](/compute/docs/networks-and-firewalls#networks) to peered with Vertex AI to host the persistent resources.

For example, 'projects/12345/global/networks/myVPC'.
[Format](/compute/docs/reference/rest/v1/networks/insert)
is of the form 'projects/{project}/global/networks/{network}'.
Where {project} is a project number, as in '12345', and {network} is a
network name.

To specify this field, you must have already [configured VPC Network
Peering for Vertex
AI](https://cloud.google.com/vertex-ai/docs/general/vpc-peering).

If this field is left unspecified, the resources aren't peered with any
network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#network GoogleVertexAiPersistentResource#network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#project GoogleVertexAiPersistentResource#project}.

---

##### `PscInterfaceConfig`<sup>Optional</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.pscInterfaceConfig"></a>

```go
PscInterfaceConfig GoogleVertexAiPersistentResourcePscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#psc_interface_config GoogleVertexAiPersistentResource#psc_interface_config}

---

##### `ReservedIpRanges`<sup>Optional</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.reservedIpRanges"></a>

```go
ReservedIpRanges *[]*string
```

- *Type:* *[]*string

A list of names for the reserved IP ranges under the VPC network that can be used for this persistent resource.

If set, we will deploy the persistent resource within the provided IP
ranges. Otherwise, the persistent resource is deployed to any IP
ranges under the provided VPC network.

Example: ['vertex-ai-ip-range'].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#reserved_ip_ranges GoogleVertexAiPersistentResource#reserved_ip_ranges}

---

##### `ResourceRuntimeSpec`<sup>Optional</sup> <a name="ResourceRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.resourceRuntimeSpec"></a>

```go
ResourceRuntimeSpec GoogleVertexAiPersistentResourceResourceRuntimeSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a>

resource_runtime_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#resource_runtime_spec GoogleVertexAiPersistentResource#resource_runtime_spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceConfig.property.timeouts"></a>

```go
Timeouts GoogleVertexAiPersistentResourceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts">GoogleVertexAiPersistentResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#timeouts GoogleVertexAiPersistentResource#timeouts}

---

### GoogleVertexAiPersistentResourceEncryptionSpec <a name="GoogleVertexAiPersistentResourceEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourceEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have
the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#kms_key_name GoogleVertexAiPersistentResource#kms_key_name}

---

### GoogleVertexAiPersistentResourceError <a name="GoogleVertexAiPersistentResourceError" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourceError {

}
```


### GoogleVertexAiPersistentResourcePscInterfaceConfig <a name="GoogleVertexAiPersistentResourcePscInterfaceConfig" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourcePscInterfaceConfig {
	DnsPeeringConfigs: interface{},
	NetworkAttachment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code>interface{}</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I. |

---

##### `DnsPeeringConfigs`<sup>Optional</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.property.dnsPeeringConfigs"></a>

```go
DnsPeeringConfigs interface{}
```

- *Type:* interface{}

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#dns_peering_configs GoogleVertexAiPersistentResource#dns_peering_configs}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig.property.networkAttachment"></a>

```go
NetworkAttachment *string
```

- *Type:* *string

The name of the Compute Engine [network attachment](https://cloud.google.com/vpc/docs/about-network-attachments) to attach to the resource within the region and user project. To specify this field, you must have already [created a network attachment] (https://cloud.google.com/vpc/docs/create-manage-network-attachments#create-network-attachments). This field is only used for resources using PSC-I.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#network_attachment GoogleVertexAiPersistentResource#network_attachment}

---

### GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs <a name="GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs {
	Domain: *string,
	TargetNetwork: *string,
	TargetProject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.domain">Domain</a></code> | <code>*string</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | The VPC network name in the target_project where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetProject">TargetProject</a></code> | <code>*string</code> | The project ID hosting the Cloud DNS managed zone that contains the 'domain'. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#domain GoogleVertexAiPersistentResource#domain}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```go
TargetNetwork *string
```

- *Type:* *string

The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#target_network GoogleVertexAiPersistentResource#target_network}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```go
TargetProject *string
```

- *Type:* *string

The project ID hosting the Cloud DNS managed zone that contains the 'domain'.

The Vertex AI Service Agent requires the
dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#target_project GoogleVertexAiPersistentResource#target_project}

---

### GoogleVertexAiPersistentResourceResourcePools <a name="GoogleVertexAiPersistentResourceResourcePools" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourceResourcePools {
	MachineSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec,
	AutoscalingSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec,
	DiskSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec,
	Id: *string,
	ReplicaCount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.autoscalingSpec">AutoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a></code> | autoscaling_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.id">Id</a></code> | <code>*string</code> | The unique ID in a PersistentResource for referring to this resource pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.replicaCount">ReplicaCount</a></code> | <code>*string</code> | The total number of machines to use for this resource pool. |

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.machineSpec"></a>

```go
MachineSpec GoogleVertexAiPersistentResourceResourcePoolsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#machine_spec GoogleVertexAiPersistentResource#machine_spec}

---

##### `AutoscalingSpec`<sup>Optional</sup> <a name="AutoscalingSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.autoscalingSpec"></a>

```go
AutoscalingSpec GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

autoscaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#autoscaling_spec GoogleVertexAiPersistentResource#autoscaling_spec}

---

##### `DiskSpec`<sup>Optional</sup> <a name="DiskSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.diskSpec"></a>

```go
DiskSpec GoogleVertexAiPersistentResourceResourcePoolsDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#disk_spec GoogleVertexAiPersistentResource#disk_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique ID in a PersistentResource for referring to this resource pool.

User can specify it if necessary. Otherwise, it's generated
automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#id GoogleVertexAiPersistentResource#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePools.property.replicaCount"></a>

```go
ReplicaCount *string
```

- *Type:* *string

The total number of machines to use for this resource pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#replica_count GoogleVertexAiPersistentResource#replica_count}

---

### GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec <a name="GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec {
	MaxReplicaCount: *string,
	MinReplicaCount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*string</code> | max replicas in the node pool, must be ≥ replica_count and > min_replica_count or will throw error. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.minReplicaCount">MinReplicaCount</a></code> | <code>*string</code> | min replicas in the node pool, must be ≤ replica_count and < max_replica_count or will throw error. |

---

##### `MaxReplicaCount`<sup>Optional</sup> <a name="MaxReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.maxReplicaCount"></a>

```go
MaxReplicaCount *string
```

- *Type:* *string

max replicas in the node pool, must be ≥ replica_count and > min_replica_count or will throw error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#max_replica_count GoogleVertexAiPersistentResource#max_replica_count}

---

##### `MinReplicaCount`<sup>Optional</sup> <a name="MinReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec.property.minReplicaCount"></a>

```go
MinReplicaCount *string
```

- *Type:* *string

min replicas in the node pool, must be ≤ replica_count and < max_replica_count or will throw error.

For autoscaling enabled Ray-on-Vertex, we allow min_replica_count of a
resource_pool to be 0 to match the OSS Ray
behavior(https://docs.ray.io/en/latest/cluster/vms/user-guides/configuring-autoscaling.html#cluster-config-parameters).
As for Persistent Resource, the min_replica_count must be > 0, we added
a corresponding validation inside
CreatePersistentResourceRequestValidator.java.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#min_replica_count GoogleVertexAiPersistentResource#min_replica_count}

---

### GoogleVertexAiPersistentResourceResourcePoolsDiskSpec <a name="GoogleVertexAiPersistentResourceResourcePoolsDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec {
	BootDiskSizeGb: *f64,
	BootDiskType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | Size in GB of the boot disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskType">BootDiskType</a></code> | <code>*string</code> | Type of the boot disk. |

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskSizeGb"></a>

```go
BootDiskSizeGb *f64
```

- *Type:* *f64

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#boot_disk_size_gb GoogleVertexAiPersistentResource#boot_disk_size_gb}

---

##### `BootDiskType`<sup>Optional</sup> <a name="BootDiskType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec.property.bootDiskType"></a>

```go
BootDiskType *string
```

- *Type:* *string

Type of the boot disk.

For non-A3U machines, the default value is
"pd-ssd", for A3U machines, the default value is "hyperdisk-balanced".
Valid values: "pd-ssd" (Persistent Disk Solid State Drive),
"pd-standard" (Persistent Disk Hard Disk Drive) or "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#boot_disk_type GoogleVertexAiPersistentResource#boot_disk_type}

---

### GoogleVertexAiPersistentResourceResourcePoolsMachineSpec <a name="GoogleVertexAiPersistentResourceResourcePoolsMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec {
	AcceleratorCount: *f64,
	AcceleratorType: *string,
	MachineType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | The type of accelerator(s) that may be attached to the machine. Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.machineType">MachineType</a></code> | <code>*string</code> | The type of the machine. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorCount"></a>

```go
AcceleratorCount *f64
```

- *Type:* *f64

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#accelerator_count GoogleVertexAiPersistentResource#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.acceleratorType"></a>

```go
AcceleratorType *string
```

- *Type:* *string

The type of accelerator(s) that may be attached to the machine. Possible values: NVIDIA_TESLA_K80 NVIDIA_TESLA_P100 NVIDIA_TESLA_V100 NVIDIA_TESLA_P4 NVIDIA_TESLA_T4 NVIDIA_TESLA_A100 NVIDIA_A100_80GB NVIDIA_L4 NVIDIA_H100_80GB NVIDIA_H100_MEGA_80GB NVIDIA_H200_141GB NVIDIA_B200 NVIDIA_GB200 NVIDIA_RTX_PRO_6000 TPU_V2 TPU_V3 TPU_V4_POD TPU_V5_LITEPOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#accelerator_type GoogleVertexAiPersistentResource#accelerator_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

The type of the machine.

See the [list of machine types supported for
prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom
training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#machine_type GoogleVertexAiPersistentResource#machine_type}

---

### GoogleVertexAiPersistentResourceResourceRuntime <a name="GoogleVertexAiPersistentResourceResourceRuntime" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourceResourceRuntime {

}
```


### GoogleVertexAiPersistentResourceResourceRuntimeSpec <a name="GoogleVertexAiPersistentResourceResourceRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourceResourceRuntimeSpec {
	ServiceAccountSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec.property.serviceAccountSpec">ServiceAccountSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a></code> | service_account_spec block. |

---

##### `ServiceAccountSpec`<sup>Optional</sup> <a name="ServiceAccountSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec.property.serviceAccountSpec"></a>

```go
ServiceAccountSpec GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

service_account_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#service_account_spec GoogleVertexAiPersistentResource#service_account_spec}

---

### GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec <a name="GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec {
	EnableCustomServiceAccount: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec.property.enableCustomServiceAccount">EnableCustomServiceAccount</a></code> | <code>interface{}</code> | If true, custom user-managed service account is enforced to run any workloads (for example, Vertex Jobs) on the resource. |

---

##### `EnableCustomServiceAccount`<sup>Required</sup> <a name="EnableCustomServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec.property.enableCustomServiceAccount"></a>

```go
EnableCustomServiceAccount interface{}
```

- *Type:* interface{}

If true, custom user-managed service account is enforced to run any workloads (for example, Vertex Jobs) on the resource.

Otherwise, uses the [Vertex AI Custom Code Service
Agent](https://cloud.google.com/vertex-ai/docs/general/access-control#service-agents).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#enable_custom_service_account GoogleVertexAiPersistentResource#enable_custom_service_account}

---

### GoogleVertexAiPersistentResourceTimeouts <a name="GoogleVertexAiPersistentResourceTimeouts" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

&googlevertexaipersistentresource.GoogleVertexAiPersistentResourceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#create GoogleVertexAiPersistentResource#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#delete GoogleVertexAiPersistentResource#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#update GoogleVertexAiPersistentResource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#create GoogleVertexAiPersistentResource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#delete GoogleVertexAiPersistentResource#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_persistent_resource#update GoogleVertexAiPersistentResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiPersistentResourceEncryptionSpecOutputReference <a name="GoogleVertexAiPersistentResourceEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPersistentResourceEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPersistentResourceEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceEncryptionSpec">GoogleVertexAiPersistentResourceEncryptionSpec</a>

---


### GoogleVertexAiPersistentResourceErrorList <a name="GoogleVertexAiPersistentResourceErrorList" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPersistentResourceErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPersistentResourceErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiPersistentResourceErrorOutputReference <a name="GoogleVertexAiPersistentResourceErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPersistentResourceErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError">GoogleVertexAiPersistentResourceError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPersistentResourceError
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceError">GoogleVertexAiPersistentResourceError</a>

---


### GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList <a name="GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference <a name="GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">TargetProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">TargetProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```go
func TargetNetworkInput() *string
```

- *Type:* *string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```go
func TargetProjectInput() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```go
func TargetNetwork() *string
```

- *Type:* *string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```go
func TargetProject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference <a name="GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.putDnsPeeringConfigs">PutDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resetDnsPeeringConfigs">ResetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfigs` <a name="PutDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```go
func PutDnsPeeringConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDnsPeeringConfigs` <a name="ResetDnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```go
func ResetDnsPeeringConfigs()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```go
func ResetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">DnsPeeringConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsPeeringConfigs`<sup>Required</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```go
func DnsPeeringConfigs() GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList">GoogleVertexAiPersistentResourcePscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `DnsPeeringConfigsInput`<sup>Optional</sup> <a name="DnsPeeringConfigsInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```go
func DnsPeeringConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```go
func NetworkAttachmentInput() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPersistentResourcePscInterfaceConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourcePscInterfaceConfig">GoogleVertexAiPersistentResourcePscInterfaceConfig</a>

---


### GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMaxReplicaCount">ResetMaxReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMinReplicaCount">ResetMinReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxReplicaCount` <a name="ResetMaxReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMaxReplicaCount"></a>

```go
func ResetMaxReplicaCount()
```

##### `ResetMinReplicaCount` <a name="ResetMinReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.resetMinReplicaCount"></a>

```go
func ResetMinReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCountInput">MaxReplicaCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCountInput">MinReplicaCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCount">MaxReplicaCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCount">MinReplicaCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxReplicaCountInput`<sup>Optional</sup> <a name="MaxReplicaCountInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCountInput"></a>

```go
func MaxReplicaCountInput() *string
```

- *Type:* *string

---

##### `MinReplicaCountInput`<sup>Optional</sup> <a name="MinReplicaCountInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCountInput"></a>

```go
func MinReplicaCountInput() *string
```

- *Type:* *string

---

##### `MaxReplicaCount`<sup>Required</sup> <a name="MaxReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.maxReplicaCount"></a>

```go
func MaxReplicaCount() *string
```

- *Type:* *string

---

##### `MinReplicaCount`<sup>Required</sup> <a name="MinReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.minReplicaCount"></a>

```go
func MinReplicaCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

---


### GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskType">ResetBootDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskSizeGb"></a>

```go
func ResetBootDiskSizeGb()
```

##### `ResetBootDiskType` <a name="ResetBootDiskType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.resetBootDiskType"></a>

```go
func ResetBootDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskTypeInput">BootDiskTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskType">BootDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGbInput"></a>

```go
func BootDiskSizeGbInput() *f64
```

- *Type:* *f64

---

##### `BootDiskTypeInput`<sup>Optional</sup> <a name="BootDiskTypeInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskTypeInput"></a>

```go
func BootDiskTypeInput() *string
```

- *Type:* *string

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskSizeGb"></a>

```go
func BootDiskSizeGb() *f64
```

- *Type:* *f64

---

##### `BootDiskType`<sup>Required</sup> <a name="BootDiskType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.bootDiskType"></a>

```go
func BootDiskType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPersistentResourceResourcePoolsDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a>

---


### GoogleVertexAiPersistentResourceResourcePoolsList <a name="GoogleVertexAiPersistentResourceResourcePoolsList" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceResourcePoolsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPersistentResourceResourcePoolsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPersistentResourceResourcePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorCount"></a>

```go
func ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetAcceleratorType"></a>

```go
func ResetAcceleratorType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.resetMachineType"></a>

```go
func ResetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCountInput"></a>

```go
func AcceleratorCountInput() *f64
```

- *Type:* *f64

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```go
func AcceleratorTypeInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorCount"></a>

```go
func AcceleratorCount() *f64
```

- *Type:* *f64

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.acceleratorType"></a>

```go
func AcceleratorType() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPersistentResourceResourcePoolsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a>

---


### GoogleVertexAiPersistentResourceResourcePoolsOutputReference <a name="GoogleVertexAiPersistentResourceResourcePoolsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceResourcePoolsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPersistentResourceResourcePoolsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec">PutAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec">PutDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetAutoscalingSpec">ResetAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetDiskSpec">ResetDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscalingSpec` <a name="PutAutoscalingSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec"></a>

```go
func PutAutoscalingSpec(value GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putAutoscalingSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

---

##### `PutDiskSpec` <a name="PutDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec"></a>

```go
func PutDiskSpec(value GoogleVertexAiPersistentResourceResourcePoolsDiskSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a>

---

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec"></a>

```go
func PutMachineSpec(value GoogleVertexAiPersistentResourceResourcePoolsMachineSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a>

---

##### `ResetAutoscalingSpec` <a name="ResetAutoscalingSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetAutoscalingSpec"></a>

```go
func ResetAutoscalingSpec()
```

##### `ResetDiskSpec` <a name="ResetDiskSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetDiskSpec"></a>

```go
func ResetDiskSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.resetReplicaCount"></a>

```go
func ResetReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpec">AutoscalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.usedReplicaCount">UsedReplicaCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpecInput">AutoscalingSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpecInput">DiskSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCountInput">ReplicaCountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCount">ReplicaCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoscalingSpec`<sup>Required</sup> <a name="AutoscalingSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpec"></a>

```go
func AutoscalingSpec() GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpecOutputReference</a>

---

##### `DiskSpec`<sup>Required</sup> <a name="DiskSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpec"></a>

```go
func DiskSpec() GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsDiskSpecOutputReference</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpec"></a>

```go
func MachineSpec() GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference">GoogleVertexAiPersistentResourceResourcePoolsMachineSpecOutputReference</a>

---

##### `UsedReplicaCount`<sup>Required</sup> <a name="UsedReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.usedReplicaCount"></a>

```go
func UsedReplicaCount() *string
```

- *Type:* *string

---

##### `AutoscalingSpecInput`<sup>Optional</sup> <a name="AutoscalingSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.autoscalingSpecInput"></a>

```go
func AutoscalingSpecInput() GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec">GoogleVertexAiPersistentResourceResourcePoolsAutoscalingSpec</a>

---

##### `DiskSpecInput`<sup>Optional</sup> <a name="DiskSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.diskSpecInput"></a>

```go
func DiskSpecInput() GoogleVertexAiPersistentResourceResourcePoolsDiskSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsDiskSpec">GoogleVertexAiPersistentResourceResourcePoolsDiskSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.machineSpecInput"></a>

```go
func MachineSpecInput() GoogleVertexAiPersistentResourceResourcePoolsMachineSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsMachineSpec">GoogleVertexAiPersistentResourceResourcePoolsMachineSpec</a>

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCountInput"></a>

```go
func ReplicaCountInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.replicaCount"></a>

```go
func ReplicaCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourcePoolsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiPersistentResourceResourceRuntimeList <a name="GoogleVertexAiPersistentResourceResourceRuntimeList" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceResourceRuntimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiPersistentResourceResourceRuntimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.get"></a>

```go
func Get(index *f64) GoogleVertexAiPersistentResourceResourceRuntimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleVertexAiPersistentResourceResourceRuntimeOutputReference <a name="GoogleVertexAiPersistentResourceResourceRuntimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceResourceRuntimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiPersistentResourceResourceRuntimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.accessUris">AccessUris</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime">GoogleVertexAiPersistentResourceResourceRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessUris`<sup>Required</sup> <a name="AccessUris" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.accessUris"></a>

```go
func AccessUris() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPersistentResourceResourceRuntime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntime">GoogleVertexAiPersistentResourceResourceRuntime</a>

---


### GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.putServiceAccountSpec">PutServiceAccountSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resetServiceAccountSpec">ResetServiceAccountSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServiceAccountSpec` <a name="PutServiceAccountSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.putServiceAccountSpec"></a>

```go
func PutServiceAccountSpec(value GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.putServiceAccountSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

---

##### `ResetServiceAccountSpec` <a name="ResetServiceAccountSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.resetServiceAccountSpec"></a>

```go
func ResetServiceAccountSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpec">ServiceAccountSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpecInput">ServiceAccountSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceAccountSpec`<sup>Required</sup> <a name="ServiceAccountSpec" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpec"></a>

```go
func ServiceAccountSpec() GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference</a>

---

##### `ServiceAccountSpecInput`<sup>Optional</sup> <a name="ServiceAccountSpecInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.serviceAccountSpecInput"></a>

```go
func ServiceAccountSpecInput() GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPersistentResourceResourceRuntimeSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpec</a>

---


### GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference <a name="GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccountInput">EnableCustomServiceAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccount">EnableCustomServiceAccount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableCustomServiceAccountInput`<sup>Optional</sup> <a name="EnableCustomServiceAccountInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccountInput"></a>

```go
func EnableCustomServiceAccountInput() interface{}
```

- *Type:* interface{}

---

##### `EnableCustomServiceAccount`<sup>Required</sup> <a name="EnableCustomServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.enableCustomServiceAccount"></a>

```go
func EnableCustomServiceAccount() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec">GoogleVertexAiPersistentResourceResourceRuntimeSpecServiceAccountSpec</a>

---


### GoogleVertexAiPersistentResourceTimeoutsOutputReference <a name="GoogleVertexAiPersistentResourceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v20/googlevertexaipersistentresource"

googlevertexaipersistentresource.NewGoogleVertexAiPersistentResourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiPersistentResourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiPersistentResource.GoogleVertexAiPersistentResourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



