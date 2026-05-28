# `googleBlockchainNodeEngineBlockchainNodes` Submodule <a name="`googleBlockchainNodeEngineBlockchainNodes` Submodule" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBlockchainNodeEngineBlockchainNodes <a name="GoogleBlockchainNodeEngineBlockchainNodes" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes google_blockchain_node_engine_blockchain_nodes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.NewGoogleBlockchainNodeEngineBlockchainNodes(scope Construct, id *string, config GoogleBlockchainNodeEngineBlockchainNodesConfig) GoogleBlockchainNodeEngineBlockchainNodes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig">GoogleBlockchainNodeEngineBlockchainNodesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig">GoogleBlockchainNodeEngineBlockchainNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails">PutEthereumDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetBlockchainType">ResetBlockchainType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetEthereumDetails">ResetEthereumDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEthereumDetails` <a name="PutEthereumDetails" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails"></a>

```go
func PutEthereumDetails(value GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putEthereumDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBlockchainNodeEngineBlockchainNodesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts">GoogleBlockchainNodeEngineBlockchainNodesTimeouts</a>

---

##### `ResetBlockchainType` <a name="ResetBlockchainType" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetBlockchainType"></a>

```go
func ResetBlockchainType()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEthereumDetails` <a name="ResetEthereumDetails" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetEthereumDetails"></a>

```go
func ResetEthereumDetails()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBlockchainNodeEngineBlockchainNodes resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.GoogleBlockchainNodeEngineBlockchainNodes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.GoogleBlockchainNodeEngineBlockchainNodes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.GoogleBlockchainNodeEngineBlockchainNodes_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.GoogleBlockchainNodeEngineBlockchainNodes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleBlockchainNodeEngineBlockchainNodes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBlockchainNodeEngineBlockchainNodes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBlockchainNodeEngineBlockchainNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBlockchainNodeEngineBlockchainNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.connectionInfo">ConnectionInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.ethereumDetails">EthereumDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference">GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainNodeIdInput">BlockchainNodeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainTypeInput">BlockchainTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.ethereumDetailsInput">EthereumDetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainNodeId">BlockchainNodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainType">BlockchainType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionInfo`<sup>Required</sup> <a name="ConnectionInfo" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.connectionInfo"></a>

```go
func ConnectionInfo() GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EthereumDetails`<sup>Required</sup> <a name="EthereumDetails" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.ethereumDetails"></a>

```go
func EthereumDetails() GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.timeouts"></a>

```go
func Timeouts() GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference">GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BlockchainNodeIdInput`<sup>Optional</sup> <a name="BlockchainNodeIdInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainNodeIdInput"></a>

```go
func BlockchainNodeIdInput() *string
```

- *Type:* *string

---

##### `BlockchainTypeInput`<sup>Optional</sup> <a name="BlockchainTypeInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainTypeInput"></a>

```go
func BlockchainTypeInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EthereumDetailsInput`<sup>Optional</sup> <a name="EthereumDetailsInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.ethereumDetailsInput"></a>

```go
func EthereumDetailsInput() GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BlockchainNodeId`<sup>Required</sup> <a name="BlockchainNodeId" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainNodeId"></a>

```go
func BlockchainNodeId() *string
```

- *Type:* *string

---

##### `BlockchainType`<sup>Required</sup> <a name="BlockchainType" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.blockchainType"></a>

```go
func BlockchainType() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBlockchainNodeEngineBlockchainNodesConfig <a name="GoogleBlockchainNodeEngineBlockchainNodesConfig" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

&googleblockchainnodeengineblockchainnodes.GoogleBlockchainNodeEngineBlockchainNodesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BlockchainNodeId: *string,
	Location: *string,
	BlockchainType: *string,
	DeletionPolicy: *string,
	EthereumDetails: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.blockchainNodeId">BlockchainNodeId</a></code> | <code>*string</code> | ID of the requesting object. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.location">Location</a></code> | <code>*string</code> | Location of Blockchain Node being created. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.blockchainType">BlockchainType</a></code> | <code>*string</code> | User-provided key-value pairs Possible values: ["ETHEREUM"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.ethereumDetails">EthereumDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | ethereum_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#id GoogleBlockchainNodeEngineBlockchainNodes#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-provided key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#project GoogleBlockchainNodeEngineBlockchainNodes#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts">GoogleBlockchainNodeEngineBlockchainNodesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlockchainNodeId`<sup>Required</sup> <a name="BlockchainNodeId" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.blockchainNodeId"></a>

```go
BlockchainNodeId *string
```

- *Type:* *string

ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#blockchain_node_id GoogleBlockchainNodeEngineBlockchainNodes#blockchain_node_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of Blockchain Node being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#location GoogleBlockchainNodeEngineBlockchainNodes#location}

---

##### `BlockchainType`<sup>Optional</sup> <a name="BlockchainType" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.blockchainType"></a>

```go
BlockchainType *string
```

- *Type:* *string

User-provided key-value pairs Possible values: ["ETHEREUM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#blockchain_type GoogleBlockchainNodeEngineBlockchainNodes#blockchain_type}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#deletion_policy GoogleBlockchainNodeEngineBlockchainNodes#deletion_policy}

---

##### `EthereumDetails`<sup>Optional</sup> <a name="EthereumDetails" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.ethereumDetails"></a>

```go
EthereumDetails GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a>

ethereum_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#ethereum_details GoogleBlockchainNodeEngineBlockchainNodes#ethereum_details}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#id GoogleBlockchainNodeEngineBlockchainNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-provided key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#labels GoogleBlockchainNodeEngineBlockchainNodes#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#project GoogleBlockchainNodeEngineBlockchainNodes#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConfig.property.timeouts"></a>

```go
Timeouts GoogleBlockchainNodeEngineBlockchainNodesTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts">GoogleBlockchainNodeEngineBlockchainNodesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#timeouts GoogleBlockchainNodeEngineBlockchainNodes#timeouts}

---

### GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo <a name="GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

&googleblockchainnodeengineblockchainnodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo {

}
```


### GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo <a name="GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

&googleblockchainnodeengineblockchainnodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo {

}
```


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

&googleblockchainnodeengineblockchainnodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails {
	ApiEnableAdmin: interface{},
	ApiEnableDebug: interface{},
	ConsensusClient: *string,
	ExecutionClient: *string,
	FetchhDetails: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails,
	Network: *string,
	NodeType: *string,
	ValidatorConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableAdmin">ApiEnableAdmin</a></code> | <code>interface{}</code> | Enables JSON-RPC access to functions in the admin namespace. Defaults to false. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableDebug">ApiEnableDebug</a></code> | <code>interface{}</code> | Enables JSON-RPC access to functions in the debug namespace. Defaults to false. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.consensusClient">ConsensusClient</a></code> | <code>*string</code> | The consensus client Possible values: ["CONSENSUS_CLIENT_UNSPECIFIED", "LIGHTHOUSE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.executionClient">ExecutionClient</a></code> | <code>*string</code> | The execution client Possible values: ["EXECUTION_CLIENT_UNSPECIFIED", "GETH", "ERIGON"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.fetchhDetails">FetchhDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a></code> | geth_details block. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.network">Network</a></code> | <code>*string</code> | The Ethereum environment being accessed. Possible values: ["MAINNET", "TESTNET_GOERLI_PRATER", "TESTNET_SEPOLIA"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.nodeType">NodeType</a></code> | <code>*string</code> | The type of Ethereum node. Possible values: ["LIGHT", "FULL", "ARCHIVE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.validatorConfig">ValidatorConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a></code> | validator_config block. |

---

##### `ApiEnableAdmin`<sup>Optional</sup> <a name="ApiEnableAdmin" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableAdmin"></a>

```go
ApiEnableAdmin interface{}
```

- *Type:* interface{}

Enables JSON-RPC access to functions in the admin namespace. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#api_enable_admin GoogleBlockchainNodeEngineBlockchainNodes#api_enable_admin}

---

##### `ApiEnableDebug`<sup>Optional</sup> <a name="ApiEnableDebug" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.apiEnableDebug"></a>

```go
ApiEnableDebug interface{}
```

- *Type:* interface{}

Enables JSON-RPC access to functions in the debug namespace. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#api_enable_debug GoogleBlockchainNodeEngineBlockchainNodes#api_enable_debug}

---

##### `ConsensusClient`<sup>Optional</sup> <a name="ConsensusClient" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.consensusClient"></a>

```go
ConsensusClient *string
```

- *Type:* *string

The consensus client Possible values: ["CONSENSUS_CLIENT_UNSPECIFIED", "LIGHTHOUSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#consensus_client GoogleBlockchainNodeEngineBlockchainNodes#consensus_client}

---

##### `ExecutionClient`<sup>Optional</sup> <a name="ExecutionClient" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.executionClient"></a>

```go
ExecutionClient *string
```

- *Type:* *string

The execution client Possible values: ["EXECUTION_CLIENT_UNSPECIFIED", "GETH", "ERIGON"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#execution_client GoogleBlockchainNodeEngineBlockchainNodes#execution_client}

---

##### `FetchhDetails`<sup>Optional</sup> <a name="FetchhDetails" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.fetchhDetails"></a>

```go
FetchhDetails GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

geth_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#geth_details GoogleBlockchainNodeEngineBlockchainNodes#geth_details}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.network"></a>

```go
Network *string
```

- *Type:* *string

The Ethereum environment being accessed. Possible values: ["MAINNET", "TESTNET_GOERLI_PRATER", "TESTNET_SEPOLIA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#network GoogleBlockchainNodeEngineBlockchainNodes#network}

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

The type of Ethereum node. Possible values: ["LIGHT", "FULL", "ARCHIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#node_type GoogleBlockchainNodeEngineBlockchainNodes#node_type}

---

##### `ValidatorConfig`<sup>Optional</sup> <a name="ValidatorConfig" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails.property.validatorConfig"></a>

```go
ValidatorConfig GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

validator_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#validator_config GoogleBlockchainNodeEngineBlockchainNodes#validator_config}

---

### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

&googleblockchainnodeengineblockchainnodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints {

}
```


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

&googleblockchainnodeengineblockchainnodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails {
	GarbageCollectionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails.property.garbageCollectionMode">GarbageCollectionMode</a></code> | <code>*string</code> | Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE. Possible values: ["FULL", "ARCHIVE"]. |

---

##### `GarbageCollectionMode`<sup>Optional</sup> <a name="GarbageCollectionMode" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails.property.garbageCollectionMode"></a>

```go
GarbageCollectionMode *string
```

- *Type:* *string

Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE. Possible values: ["FULL", "ARCHIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#garbage_collection_mode GoogleBlockchainNodeEngineBlockchainNodes#garbage_collection_mode}

---

### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

&googleblockchainnodeengineblockchainnodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig {
	BeaconFeeRecipient: *string,
	MevRelayUrls: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.property.beaconFeeRecipient">BeaconFeeRecipient</a></code> | <code>*string</code> | An Ethereum address which the beacon client will send fee rewards to if no recipient is configured in the validator client. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.property.mevRelayUrls">MevRelayUrls</a></code> | <code>*[]*string</code> | URLs for MEV-relay services to use for block building. |

---

##### `BeaconFeeRecipient`<sup>Optional</sup> <a name="BeaconFeeRecipient" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.property.beaconFeeRecipient"></a>

```go
BeaconFeeRecipient *string
```

- *Type:* *string

An Ethereum address which the beacon client will send fee rewards to if no recipient is configured in the validator client.

See https://lighthouse-book.sigmaprime.io/suggested-fee-recipient.html or https://docs.prylabs.network/docs/execution-node/fee-recipient for examples of how this is used. Note that while this is often described as "suggested", as we run the execution node we can trust the execution node, and therefore this is considered enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#beacon_fee_recipient GoogleBlockchainNodeEngineBlockchainNodes#beacon_fee_recipient}

---

##### `MevRelayUrls`<sup>Optional</sup> <a name="MevRelayUrls" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig.property.mevRelayUrls"></a>

```go
MevRelayUrls *[]*string
```

- *Type:* *[]*string

URLs for MEV-relay services to use for block building.

When set, a managed MEV-boost service is configured on the beacon client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#mev_relay_urls GoogleBlockchainNodeEngineBlockchainNodes#mev_relay_urls}

---

### GoogleBlockchainNodeEngineBlockchainNodesTimeouts <a name="GoogleBlockchainNodeEngineBlockchainNodesTimeouts" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

&googleblockchainnodeengineblockchainnodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#create GoogleBlockchainNodeEngineBlockchainNodes#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#delete GoogleBlockchainNodeEngineBlockchainNodes#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#update GoogleBlockchainNodeEngineBlockchainNodes#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#create GoogleBlockchainNodeEngineBlockchainNodes#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#delete GoogleBlockchainNodeEngineBlockchainNodes#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_blockchain_node_engine_blockchain_nodes#update GoogleBlockchainNodeEngineBlockchainNodes#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList <a name="GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.NewGoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.get"></a>

```go
func Get(index *f64) GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.NewGoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.jsonRpcApiEndpoint">JsonRpcApiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.websocketsApiEndpoint">WebsocketsApiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JsonRpcApiEndpoint`<sup>Required</sup> <a name="JsonRpcApiEndpoint" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.jsonRpcApiEndpoint"></a>

```go
func JsonRpcApiEndpoint() *string
```

- *Type:* *string

---

##### `WebsocketsApiEndpoint`<sup>Required</sup> <a name="WebsocketsApiEndpoint" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.websocketsApiEndpoint"></a>

```go
func WebsocketsApiEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo</a>

---


### GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList <a name="GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.NewGoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.get"></a>

```go
func Get(index *f64) GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.NewGoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.endpointInfo">EndpointInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointInfo`<sup>Required</sup> <a name="EndpointInfo" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.endpointInfo"></a>

```go
func EndpointInfo() GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList</a>

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo">GoogleBlockchainNodeEngineBlockchainNodesConnectionInfo</a>

---


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.NewGoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.get"></a>

```go
func Get(index *f64) GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.NewGoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconApiEndpoint">BeaconApiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconPrometheusMetricsApiEndpoint">BeaconPrometheusMetricsApiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.executionClientPrometheusMetricsApiEndpoint">ExecutionClientPrometheusMetricsApiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BeaconApiEndpoint`<sup>Required</sup> <a name="BeaconApiEndpoint" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconApiEndpoint"></a>

```go
func BeaconApiEndpoint() *string
```

- *Type:* *string

---

##### `BeaconPrometheusMetricsApiEndpoint`<sup>Required</sup> <a name="BeaconPrometheusMetricsApiEndpoint" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.beaconPrometheusMetricsApiEndpoint"></a>

```go
func BeaconPrometheusMetricsApiEndpoint() *string
```

- *Type:* *string

---

##### `ExecutionClientPrometheusMetricsApiEndpoint`<sup>Required</sup> <a name="ExecutionClientPrometheusMetricsApiEndpoint" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.executionClientPrometheusMetricsApiEndpoint"></a>

```go
func ExecutionClientPrometheusMetricsApiEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints</a>

---


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.NewGoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resetGarbageCollectionMode">ResetGarbageCollectionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGarbageCollectionMode` <a name="ResetGarbageCollectionMode" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.resetGarbageCollectionMode"></a>

```go
func ResetGarbageCollectionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionModeInput">GarbageCollectionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionMode">GarbageCollectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GarbageCollectionModeInput`<sup>Optional</sup> <a name="GarbageCollectionModeInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionModeInput"></a>

```go
func GarbageCollectionModeInput() *string
```

- *Type:* *string

---

##### `GarbageCollectionMode`<sup>Required</sup> <a name="GarbageCollectionMode" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.garbageCollectionMode"></a>

```go
func GarbageCollectionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

---


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.NewGoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putFetchhDetails">PutFetchhDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putValidatorConfig">PutValidatorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableAdmin">ResetApiEnableAdmin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableDebug">ResetApiEnableDebug</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetConsensusClient">ResetConsensusClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetExecutionClient">ResetExecutionClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetFetchhDetails">ResetFetchhDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetValidatorConfig">ResetValidatorConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFetchhDetails` <a name="PutFetchhDetails" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putFetchhDetails"></a>

```go
func PutFetchhDetails(value GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putFetchhDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

---

##### `PutValidatorConfig` <a name="PutValidatorConfig" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putValidatorConfig"></a>

```go
func PutValidatorConfig(value GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.putValidatorConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

---

##### `ResetApiEnableAdmin` <a name="ResetApiEnableAdmin" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableAdmin"></a>

```go
func ResetApiEnableAdmin()
```

##### `ResetApiEnableDebug` <a name="ResetApiEnableDebug" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetApiEnableDebug"></a>

```go
func ResetApiEnableDebug()
```

##### `ResetConsensusClient` <a name="ResetConsensusClient" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetConsensusClient"></a>

```go
func ResetConsensusClient()
```

##### `ResetExecutionClient` <a name="ResetExecutionClient" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetExecutionClient"></a>

```go
func ResetExecutionClient()
```

##### `ResetFetchhDetails` <a name="ResetFetchhDetails" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetFetchhDetails"></a>

```go
func ResetFetchhDetails()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetNodeType"></a>

```go
func ResetNodeType()
```

##### `ResetValidatorConfig` <a name="ResetValidatorConfig" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.resetValidatorConfig"></a>

```go
func ResetValidatorConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.additionalEndpoints">AdditionalEndpoints</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetails">FetchhDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfig">ValidatorConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdminInput">ApiEnableAdminInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebugInput">ApiEnableDebugInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClientInput">ConsensusClientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClientInput">ExecutionClientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetailsInput">FetchhDetailsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfigInput">ValidatorConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdmin">ApiEnableAdmin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebug">ApiEnableDebug</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClient">ConsensusClient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClient">ExecutionClient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalEndpoints`<sup>Required</sup> <a name="AdditionalEndpoints" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.additionalEndpoints"></a>

```go
func AdditionalEndpoints() GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList</a>

---

##### `FetchhDetails`<sup>Required</sup> <a name="FetchhDetails" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetails"></a>

```go
func FetchhDetails() GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference</a>

---

##### `ValidatorConfig`<sup>Required</sup> <a name="ValidatorConfig" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfig"></a>

```go
func ValidatorConfig() GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference</a>

---

##### `ApiEnableAdminInput`<sup>Optional</sup> <a name="ApiEnableAdminInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdminInput"></a>

```go
func ApiEnableAdminInput() interface{}
```

- *Type:* interface{}

---

##### `ApiEnableDebugInput`<sup>Optional</sup> <a name="ApiEnableDebugInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebugInput"></a>

```go
func ApiEnableDebugInput() interface{}
```

- *Type:* interface{}

---

##### `ConsensusClientInput`<sup>Optional</sup> <a name="ConsensusClientInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClientInput"></a>

```go
func ConsensusClientInput() *string
```

- *Type:* *string

---

##### `ExecutionClientInput`<sup>Optional</sup> <a name="ExecutionClientInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClientInput"></a>

```go
func ExecutionClientInput() *string
```

- *Type:* *string

---

##### `FetchhDetailsInput`<sup>Optional</sup> <a name="FetchhDetailsInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.fetchhDetailsInput"></a>

```go
func FetchhDetailsInput() GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `ValidatorConfigInput`<sup>Optional</sup> <a name="ValidatorConfigInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.validatorConfigInput"></a>

```go
func ValidatorConfigInput() GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

---

##### `ApiEnableAdmin`<sup>Required</sup> <a name="ApiEnableAdmin" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableAdmin"></a>

```go
func ApiEnableAdmin() interface{}
```

- *Type:* interface{}

---

##### `ApiEnableDebug`<sup>Required</sup> <a name="ApiEnableDebug" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.apiEnableDebug"></a>

```go
func ApiEnableDebug() interface{}
```

- *Type:* interface{}

---

##### `ConsensusClient`<sup>Required</sup> <a name="ConsensusClient" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.consensusClient"></a>

```go
func ConsensusClient() *string
```

- *Type:* *string

---

##### `ExecutionClient`<sup>Required</sup> <a name="ExecutionClient" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.executionClient"></a>

```go
func ExecutionClient() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetails</a>

---


### GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.NewGoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resetBeaconFeeRecipient">ResetBeaconFeeRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resetMevRelayUrls">ResetMevRelayUrls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBeaconFeeRecipient` <a name="ResetBeaconFeeRecipient" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resetBeaconFeeRecipient"></a>

```go
func ResetBeaconFeeRecipient()
```

##### `ResetMevRelayUrls` <a name="ResetMevRelayUrls" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.resetMevRelayUrls"></a>

```go
func ResetMevRelayUrls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.beaconFeeRecipientInput">BeaconFeeRecipientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrlsInput">MevRelayUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.beaconFeeRecipient">BeaconFeeRecipient</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrls">MevRelayUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BeaconFeeRecipientInput`<sup>Optional</sup> <a name="BeaconFeeRecipientInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.beaconFeeRecipientInput"></a>

```go
func BeaconFeeRecipientInput() *string
```

- *Type:* *string

---

##### `MevRelayUrlsInput`<sup>Optional</sup> <a name="MevRelayUrlsInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrlsInput"></a>

```go
func MevRelayUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BeaconFeeRecipient`<sup>Required</sup> <a name="BeaconFeeRecipient" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.beaconFeeRecipient"></a>

```go
func BeaconFeeRecipient() *string
```

- *Type:* *string

---

##### `MevRelayUrls`<sup>Required</sup> <a name="MevRelayUrls" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.mevRelayUrls"></a>

```go
func MevRelayUrls() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig">GoogleBlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig</a>

---


### GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference <a name="GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googleblockchainnodeengineblockchainnodes"

googleblockchainnodeengineblockchainnodes.NewGoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBlockchainNodeEngineBlockchainNodes.GoogleBlockchainNodeEngineBlockchainNodesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



