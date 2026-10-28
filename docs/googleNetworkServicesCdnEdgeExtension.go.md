# `googleNetworkServicesCdnEdgeExtension` Submodule <a name="`googleNetworkServicesCdnEdgeExtension` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesCdnEdgeExtension <a name="GoogleNetworkServicesCdnEdgeExtension" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension google_network_services_cdn_edge_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

googlenetworkservicescdnedgeextension.NewGoogleNetworkServicesCdnEdgeExtension(scope Construct, id *string, config GoogleNetworkServicesCdnEdgeExtensionConfig) GoogleNetworkServicesCdnEdgeExtension
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig">GoogleNetworkServicesCdnEdgeExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig">GoogleNetworkServicesCdnEdgeExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putExtensionChains">PutExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtensionChains` <a name="PutExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putExtensionChains"></a>

```go
func PutExtensionChains(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putExtensionChains.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTarget` <a name="PutTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTarget"></a>

```go
func PutTarget(value GoogleNetworkServicesCdnEdgeExtensionTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkServicesCdnEdgeExtensionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesCdnEdgeExtension resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

googlenetworkservicescdnedgeextension.GoogleNetworkServicesCdnEdgeExtension_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

googlenetworkservicescdnedgeextension.GoogleNetworkServicesCdnEdgeExtension_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

googlenetworkservicescdnedgeextension.GoogleNetworkServicesCdnEdgeExtension_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

googlenetworkservicescdnedgeextension.GoogleNetworkServicesCdnEdgeExtension_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleNetworkServicesCdnEdgeExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkServicesCdnEdgeExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkServicesCdnEdgeExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesCdnEdgeExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChains">ExtensionChains</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.target">Target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference">GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference">GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChainsInput">ExtensionChainsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.targetInput">TargetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChains"></a>

```go
func ExtensionChains() GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.target"></a>

```go
func Target() GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference">GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference">GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExtensionChainsInput`<sup>Optional</sup> <a name="ExtensionChainsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.extensionChainsInput"></a>

```go
func ExtensionChainsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.targetInput"></a>

```go
func TargetInput() GoogleNetworkServicesCdnEdgeExtensionTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtension.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesCdnEdgeExtensionConfig <a name="GoogleNetworkServicesCdnEdgeExtensionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

&googlenetworkservicescdnedgeextension.GoogleNetworkServicesCdnEdgeExtensionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ExtensionChains: interface{},
	Location: *string,
	Name: *string,
	Target: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.extensionChains">ExtensionChains</a></code> | <code>interface{}</code> | extension_chains block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.location">Location</a></code> | <code>*string</code> | The location of the CDN edge extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.name">Name</a></code> | <code>*string</code> | Name of the CdnEdgeExtension resource in the following format: projects/{project}/locations/{location}/cdnEdgeExtensions/{cdn_edge_extension}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.target">Target</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | target block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#id GoogleNetworkServicesCdnEdgeExtension#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels associated with the CdnEdgeExtension resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#project GoogleNetworkServicesCdnEdgeExtension#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExtensionChains`<sup>Required</sup> <a name="ExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.extensionChains"></a>

```go
ExtensionChains interface{}
```

- *Type:* interface{}

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#extension_chains GoogleNetworkServicesCdnEdgeExtension#extension_chains}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the CDN edge extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#location GoogleNetworkServicesCdnEdgeExtension#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the CdnEdgeExtension resource in the following format: projects/{project}/locations/{location}/cdnEdgeExtensions/{cdn_edge_extension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.target"></a>

```go
Target GoogleNetworkServicesCdnEdgeExtensionTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#target GoogleNetworkServicesCdnEdgeExtension#target}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#deletion_policy GoogleNetworkServicesCdnEdgeExtension#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#description GoogleNetworkServicesCdnEdgeExtension#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#id GoogleNetworkServicesCdnEdgeExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels associated with the CdnEdgeExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#labels GoogleNetworkServicesCdnEdgeExtension#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#project GoogleNetworkServicesCdnEdgeExtension#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkServicesCdnEdgeExtensionTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts">GoogleNetworkServicesCdnEdgeExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#timeouts GoogleNetworkServicesCdnEdgeExtension#timeouts}

---

### GoogleNetworkServicesCdnEdgeExtensionExtensionChains <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

&googlenetworkservicescdnedgeextension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains {
	Extensions: interface{},
	MatchCondition: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.extensions">Extensions</a></code> | <code>interface{}</code> | extensions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.name">Name</a></code> | <code>*string</code> | The name for this extension chain. |

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.extensions"></a>

```go
Extensions interface{}
```

- *Type:* interface{}

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#extensions GoogleNetworkServicesCdnEdgeExtension#extensions}

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.matchCondition"></a>

```go
MatchCondition GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#match_condition GoogleNetworkServicesCdnEdgeExtension#match_condition}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChains.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

&googlenetworkservicescdnedgeextension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions {
	Name: *string,
	Service: *string,
	FailOpen: interface{},
	ForwardAttributes: *[]*string,
	ForwardHeaders: *[]*string,
	SupportedEvents: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.name">Name</a></code> | <code>*string</code> | The name for this extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.service">Service</a></code> | <code>*string</code> | The reference to the service that runs the extension. Must be a reference to a WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardAttributes">ForwardAttributes</a></code> | <code>*[]*string</code> | List of the Envoy attributes to forward to the extension server. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardHeaders">ForwardHeaders</a></code> | <code>*[]*string</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.supportedEvents">SupportedEvents</a></code> | <code>*[]*string</code> | A set of events during request or response processing for which this extension is called. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#name GoogleNetworkServicesCdnEdgeExtension#name}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.service"></a>

```go
Service *string
```

- *Type:* *string

The reference to the service that runs the extension. Must be a reference to a WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#service GoogleNetworkServicesCdnEdgeExtension#service}

---

##### `FailOpen`<sup>Optional</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.failOpen"></a>

```go
FailOpen interface{}
```

- *Type:* interface{}

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#fail_open GoogleNetworkServicesCdnEdgeExtension#fail_open}

---

##### `ForwardAttributes`<sup>Optional</sup> <a name="ForwardAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardAttributes"></a>

```go
ForwardAttributes *[]*string
```

- *Type:* *[]*string

List of the Envoy attributes to forward to the extension server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#forward_attributes GoogleNetworkServicesCdnEdgeExtension#forward_attributes}

---

##### `ForwardHeaders`<sup>Optional</sup> <a name="ForwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```go
ForwardHeaders *[]*string
```

- *Type:* *[]*string

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#forward_headers GoogleNetworkServicesCdnEdgeExtension#forward_headers}

---

##### `SupportedEvents`<sup>Optional</sup> <a name="SupportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```go
SupportedEvents *[]*string
```

- *Type:* *[]*string

A set of events during request or response processing for which this extension is called.

Eligible values are 'REQUEST_HEADERS' and 'RESPONSE_HEADERS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#supported_events GoogleNetworkServicesCdnEdgeExtension#supported_events}

---

### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

&googlenetworkservicescdnedgeextension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition {
	CelExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.property.celExpression">CelExpression</a></code> | <code>*string</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```go
CelExpression *string
```

- *Type:* *string

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#cel_expression GoogleNetworkServicesCdnEdgeExtension#cel_expression}

---

### GoogleNetworkServicesCdnEdgeExtensionTarget <a name="GoogleNetworkServicesCdnEdgeExtensionTarget" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

&googlenetworkservicescdnedgeextension.GoogleNetworkServicesCdnEdgeExtensionTarget {
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of references to the resources that are targeted by CdnEdgeExtension. |

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of references to the resources that are targeted by CdnEdgeExtension.

Types of resources supported: EdgeCacheService.
The format can be 'projects/{project}/locations/{location}/edgeCacheServices/{edgeCacheService}' or
'//networkservices.googleapis.com/projects/{project}/locations/{location}/edgeCacheServices/{edgeCacheService}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#resources GoogleNetworkServicesCdnEdgeExtension#resources}

---

### GoogleNetworkServicesCdnEdgeExtensionTimeouts <a name="GoogleNetworkServicesCdnEdgeExtensionTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

&googlenetworkservicescdnedgeextension.GoogleNetworkServicesCdnEdgeExtensionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#create GoogleNetworkServicesCdnEdgeExtension#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#delete GoogleNetworkServicesCdnEdgeExtension#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#update GoogleNetworkServicesCdnEdgeExtension#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#create GoogleNetworkServicesCdnEdgeExtension#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#delete GoogleNetworkServicesCdnEdgeExtension#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_network_services_cdn_edge_extension#update GoogleNetworkServicesCdnEdgeExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

googlenetworkservicescdnedgeextension.NewGoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

googlenetworkservicescdnedgeextension.NewGoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">ResetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardAttributes">ResetForwardAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">ResetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">ResetSupportedEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFailOpen` <a name="ResetFailOpen" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```go
func ResetFailOpen()
```

##### `ResetForwardAttributes` <a name="ResetForwardAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardAttributes"></a>

```go
func ResetForwardAttributes()
```

##### `ResetForwardHeaders` <a name="ResetForwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```go
func ResetForwardHeaders()
```

##### `ResetSupportedEvents` <a name="ResetSupportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```go
func ResetSupportedEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">FailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributesInput">ForwardAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">ForwardHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">SupportedEventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen">FailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributes">ForwardAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">ForwardHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">SupportedEvents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FailOpenInput`<sup>Optional</sup> <a name="FailOpenInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```go
func FailOpenInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardAttributesInput`<sup>Optional</sup> <a name="ForwardAttributesInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributesInput"></a>

```go
func ForwardAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ForwardHeadersInput`<sup>Optional</sup> <a name="ForwardHeadersInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```go
func ForwardHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `SupportedEventsInput`<sup>Optional</sup> <a name="SupportedEventsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```go
func SupportedEventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `FailOpen`<sup>Required</sup> <a name="FailOpen" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```go
func FailOpen() interface{}
```

- *Type:* interface{}

---

##### `ForwardAttributes`<sup>Required</sup> <a name="ForwardAttributes" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardAttributes"></a>

```go
func ForwardAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ForwardHeaders`<sup>Required</sup> <a name="ForwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```go
func ForwardHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `SupportedEvents`<sup>Required</sup> <a name="SupportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```go
func SupportedEvents() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

googlenetworkservicescdnedgeextension.NewGoogleNetworkServicesCdnEdgeExtensionExtensionChainsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.get"></a>

```go
func Get(index *f64) GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

googlenetworkservicescdnedgeextension.NewGoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">CelExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">CelExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CelExpressionInput`<sup>Optional</sup> <a name="CelExpressionInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```go
func CelExpressionInput() *string
```

- *Type:* *string

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```go
func CelExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

---


### GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

googlenetworkservicescdnedgeextension.NewGoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putExtensions">PutExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putMatchCondition">PutMatchCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtensions` <a name="PutExtensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putExtensions"></a>

```go
func PutExtensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatchCondition` <a name="PutMatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```go
func PutMatchCondition(value GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensions">Extensions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchCondition">MatchCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensionsInput">ExtensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput">MatchConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Extensions`<sup>Required</sup> <a name="Extensions" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensions"></a>

```go
func Extensions() GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsExtensionsList</a>

---

##### `MatchCondition`<sup>Required</sup> <a name="MatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```go
func MatchCondition() GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `ExtensionsInput`<sup>Optional</sup> <a name="ExtensionsInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```go
func ExtensionsInput() interface{}
```

- *Type:* interface{}

---

##### `MatchConditionInput`<sup>Optional</sup> <a name="MatchConditionInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```go
func MatchConditionInput() GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesCdnEdgeExtensionExtensionChainsMatchCondition</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionExtensionChainsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

googlenetworkservicescdnedgeextension.NewGoogleNetworkServicesCdnEdgeExtensionTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkServicesCdnEdgeExtensionTarget
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTarget">GoogleNetworkServicesCdnEdgeExtensionTarget</a>

---


### GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlenetworkservicescdnedgeextension"

googlenetworkservicescdnedgeextension.NewGoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkServicesCdnEdgeExtension.GoogleNetworkServicesCdnEdgeExtensionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



