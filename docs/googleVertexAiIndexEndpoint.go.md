# `googleVertexAiIndexEndpoint` Submodule <a name="`googleVertexAiIndexEndpoint` Submodule" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiIndexEndpoint <a name="GoogleVertexAiIndexEndpoint" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint google_vertex_ai_index_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

googlevertexaiindexendpoint.NewGoogleVertexAiIndexEndpoint(scope Construct, id *string, config GoogleVertexAiIndexEndpointConfig) GoogleVertexAiIndexEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig">GoogleVertexAiIndexEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig">GoogleVertexAiIndexEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putPrivateServiceConnectConfig">PutPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetPrivateServiceConnectConfig">ResetPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetPublicEndpointEnabled">ResetPublicEndpointEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putEncryptionSpec"></a>

```go
func PutEncryptionSpec(value GoogleVertexAiIndexEndpointEncryptionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a>

---

##### `PutPrivateServiceConnectConfig` <a name="PutPrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putPrivateServiceConnectConfig"></a>

```go
func PutPrivateServiceConnectConfig(value GoogleVertexAiIndexEndpointPrivateServiceConnectConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value GoogleVertexAiIndexEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetEncryptionSpec"></a>

```go
func ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetPrivateServiceConnectConfig` <a name="ResetPrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetPrivateServiceConnectConfig"></a>

```go
func ResetPrivateServiceConnectConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPublicEndpointEnabled` <a name="ResetPublicEndpointEnabled" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetPublicEndpointEnabled"></a>

```go
func ResetPublicEndpointEnabled()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiIndexEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

googlevertexaiindexendpoint.GoogleVertexAiIndexEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

googlevertexaiindexendpoint.GoogleVertexAiIndexEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

googlevertexaiindexendpoint.GoogleVertexAiIndexEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

googlevertexaiindexendpoint.GoogleVertexAiIndexEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleVertexAiIndexEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleVertexAiIndexEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleVertexAiIndexEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiIndexEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference">GoogleVertexAiIndexEndpointEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointDomainName">PublicEndpointDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference">GoogleVertexAiIndexEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.privateServiceConnectConfigInput">PrivateServiceConnectConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointEnabledInput">PublicEndpointEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointEnabled">PublicEndpointEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.encryptionSpec"></a>

```go
func EncryptionSpec() GoogleVertexAiIndexEndpointEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference">GoogleVertexAiIndexEndpointEncryptionSpecOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateServiceConnectConfig`<sup>Required</sup> <a name="PrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.privateServiceConnectConfig"></a>

```go
func PrivateServiceConnectConfig() GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference</a>

---

##### `PublicEndpointDomainName`<sup>Required</sup> <a name="PublicEndpointDomainName" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointDomainName"></a>

```go
func PublicEndpointDomainName() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.timeouts"></a>

```go
func Timeouts() GoogleVertexAiIndexEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference">GoogleVertexAiIndexEndpointTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.encryptionSpecInput"></a>

```go
func EncryptionSpecInput() GoogleVertexAiIndexEndpointEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PrivateServiceConnectConfigInput`<sup>Optional</sup> <a name="PrivateServiceConnectConfigInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.privateServiceConnectConfigInput"></a>

```go
func PrivateServiceConnectConfigInput() GoogleVertexAiIndexEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PublicEndpointEnabledInput`<sup>Optional</sup> <a name="PublicEndpointEnabledInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointEnabledInput"></a>

```go
func PublicEndpointEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `PublicEndpointEnabled`<sup>Required</sup> <a name="PublicEndpointEnabled" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.publicEndpointEnabled"></a>

```go
func PublicEndpointEnabled() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiIndexEndpointConfig <a name="GoogleVertexAiIndexEndpointConfig" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

&googlevertexaiindexendpoint.GoogleVertexAiIndexEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	DeletionPolicy: *string,
	Description: *string,
	EncryptionSpec: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec,
	Id: *string,
	Labels: *map[string]*string,
	Network: *string,
	PrivateServiceConnectConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig,
	Project: *string,
	PublicEndpointEnabled: interface{},
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Index. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.description">Description</a></code> | <code>*string</code> | The description of the Index. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#id GoogleVertexAiIndexEndpoint#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize your Indexes. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.network">Network</a></code> | <code>*string</code> | The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#project GoogleVertexAiIndexEndpoint#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.publicEndpointEnabled">PublicEndpointEnabled</a></code> | <code>interface{}</code> | If true, the deployed index will be accessible through public endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.region">Region</a></code> | <code>*string</code> | The region of the index endpoint. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Index.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#display_name GoogleVertexAiIndexEndpoint#display_name}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#deletion_policy GoogleVertexAiIndexEndpoint#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#description GoogleVertexAiIndexEndpoint#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.encryptionSpec"></a>

```go
EncryptionSpec GoogleVertexAiIndexEndpointEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#encryption_spec GoogleVertexAiIndexEndpoint#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#id GoogleVertexAiIndexEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize your Indexes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#labels GoogleVertexAiIndexEndpoint#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The full name of the Google Compute Engine [network](https://cloud.google.com//compute/docs/networks-and-firewalls#networks) to which the index endpoint should be peered. Private services access must already be configured for the network. If left unspecified, the index endpoint is not peered with any network. [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/insert): 'projects/{project}/global/networks/{network}'. Where '{project}' is a project number, as in '12345', and '{network}' is network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#network GoogleVertexAiIndexEndpoint#network}

---

##### `PrivateServiceConnectConfig`<sup>Optional</sup> <a name="PrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.privateServiceConnectConfig"></a>

```go
PrivateServiceConnectConfig GoogleVertexAiIndexEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#private_service_connect_config GoogleVertexAiIndexEndpoint#private_service_connect_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#project GoogleVertexAiIndexEndpoint#project}.

---

##### `PublicEndpointEnabled`<sup>Optional</sup> <a name="PublicEndpointEnabled" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.publicEndpointEnabled"></a>

```go
PublicEndpointEnabled interface{}
```

- *Type:* interface{}

If true, the deployed index will be accessible through public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#public_endpoint_enabled GoogleVertexAiIndexEndpoint#public_endpoint_enabled}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of the index endpoint. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#region GoogleVertexAiIndexEndpoint#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointConfig.property.timeouts"></a>

```go
Timeouts GoogleVertexAiIndexEndpointTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts">GoogleVertexAiIndexEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#timeouts GoogleVertexAiIndexEndpoint#timeouts}

---

### GoogleVertexAiIndexEndpointEncryptionSpec <a name="GoogleVertexAiIndexEndpointEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

&googlevertexaiindexendpoint.GoogleVertexAiIndexEndpointEncryptionSpec {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | Required. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

Required.

The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. Has the form: 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'. The key needs to be in the same region as where the compute resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#kms_key_name GoogleVertexAiIndexEndpoint#kms_key_name}

---

### GoogleVertexAiIndexEndpointPrivateServiceConnectConfig <a name="GoogleVertexAiIndexEndpointPrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

&googlevertexaiindexendpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig {
	EnablePrivateServiceConnect: interface{},
	ProjectAllowlist: *[]*string,
	PscAutomationConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect">EnablePrivateServiceConnect</a></code> | <code>interface{}</code> | If set to true, the IndexEndpoint is created without private service access. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.projectAllowlist">ProjectAllowlist</a></code> | <code>*[]*string</code> | A list of Projects from which the forwarding rule will target the service attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.pscAutomationConfigs">PscAutomationConfigs</a></code> | <code>interface{}</code> | psc_automation_configs block. |

---

##### `EnablePrivateServiceConnect`<sup>Required</sup> <a name="EnablePrivateServiceConnect" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect"></a>

```go
EnablePrivateServiceConnect interface{}
```

- *Type:* interface{}

If set to true, the IndexEndpoint is created without private service access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#enable_private_service_connect GoogleVertexAiIndexEndpoint#enable_private_service_connect}

---

##### `ProjectAllowlist`<sup>Optional</sup> <a name="ProjectAllowlist" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.projectAllowlist"></a>

```go
ProjectAllowlist *[]*string
```

- *Type:* *[]*string

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#project_allowlist GoogleVertexAiIndexEndpoint#project_allowlist}

---

##### `PscAutomationConfigs`<sup>Optional</sup> <a name="PscAutomationConfigs" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig.property.pscAutomationConfigs"></a>

```go
PscAutomationConfigs interface{}
```

- *Type:* interface{}

psc_automation_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#psc_automation_configs GoogleVertexAiIndexEndpoint#psc_automation_configs}

---

### GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs <a name="GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

&googlevertexaiindexendpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs {
	Network: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.network">Network</a></code> | <code>*string</code> | The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/get): projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.projectId">ProjectId</a></code> | <code>*string</code> | Project id used to create forwarding rule. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.network"></a>

```go
Network *string
```

- *Type:* *string

The full name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). [Format](https://cloud.google.com/compute/docs/reference/rest/v1/networks/get): projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#network GoogleVertexAiIndexEndpoint#network}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigs.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Project id used to create forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#project_id GoogleVertexAiIndexEndpoint#project_id}

---

### GoogleVertexAiIndexEndpointTimeouts <a name="GoogleVertexAiIndexEndpointTimeouts" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

&googlevertexaiindexendpoint.GoogleVertexAiIndexEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#create GoogleVertexAiIndexEndpoint#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#delete GoogleVertexAiIndexEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#update GoogleVertexAiIndexEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#create GoogleVertexAiIndexEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#delete GoogleVertexAiIndexEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_vertex_ai_index_endpoint#update GoogleVertexAiIndexEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiIndexEndpointEncryptionSpecOutputReference <a name="GoogleVertexAiIndexEndpointEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

googlevertexaiindexendpoint.NewGoogleVertexAiIndexEndpointEncryptionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexEndpointEncryptionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexEndpointEncryptionSpec
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointEncryptionSpec">GoogleVertexAiIndexEndpointEncryptionSpec</a>

---


### GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference <a name="GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

googlevertexaiindexendpoint.NewGoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.putPscAutomationConfigs">PutPscAutomationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist">ResetProjectAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetPscAutomationConfigs">ResetPscAutomationConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPscAutomationConfigs` <a name="PutPscAutomationConfigs" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.putPscAutomationConfigs"></a>

```go
func PutPscAutomationConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.putPscAutomationConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProjectAllowlist` <a name="ResetProjectAllowlist" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist"></a>

```go
func ResetProjectAllowlist()
```

##### `ResetPscAutomationConfigs` <a name="ResetPscAutomationConfigs" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.resetPscAutomationConfigs"></a>

```go
func ResetPscAutomationConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigs">PscAutomationConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput">EnablePrivateServiceConnectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput">ProjectAllowlistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigsInput">PscAutomationConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect">EnablePrivateServiceConnect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist">ProjectAllowlist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PscAutomationConfigs`<sup>Required</sup> <a name="PscAutomationConfigs" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigs"></a>

```go
func PscAutomationConfigs() GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList">GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList</a>

---

##### `EnablePrivateServiceConnectInput`<sup>Optional</sup> <a name="EnablePrivateServiceConnectInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput"></a>

```go
func EnablePrivateServiceConnectInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectAllowlistInput`<sup>Optional</sup> <a name="ProjectAllowlistInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput"></a>

```go
func ProjectAllowlistInput() *[]*string
```

- *Type:* *[]*string

---

##### `PscAutomationConfigsInput`<sup>Optional</sup> <a name="PscAutomationConfigsInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.pscAutomationConfigsInput"></a>

```go
func PscAutomationConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `EnablePrivateServiceConnect`<sup>Required</sup> <a name="EnablePrivateServiceConnect" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect"></a>

```go
func EnablePrivateServiceConnect() interface{}
```

- *Type:* interface{}

---

##### `ProjectAllowlist`<sup>Required</sup> <a name="ProjectAllowlist" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist"></a>

```go
func ProjectAllowlist() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleVertexAiIndexEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfig">GoogleVertexAiIndexEndpointPrivateServiceConnectConfig</a>

---


### GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList <a name="GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

googlevertexaiindexendpoint.NewGoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.get"></a>

```go
func Get(index *f64) GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference <a name="GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

googlevertexaiindexendpoint.NewGoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointPrivateServiceConnectConfigPscAutomationConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleVertexAiIndexEndpointTimeoutsOutputReference <a name="GoogleVertexAiIndexEndpointTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlevertexaiindexendpoint"

googlevertexaiindexendpoint.NewGoogleVertexAiIndexEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleVertexAiIndexEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiIndexEndpoint.GoogleVertexAiIndexEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



