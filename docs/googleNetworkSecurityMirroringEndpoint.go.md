# `googleNetworkSecurityMirroringEndpoint` Submodule <a name="`googleNetworkSecurityMirroringEndpoint` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityMirroringEndpoint <a name="GoogleNetworkSecurityMirroringEndpoint" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint google_network_security_mirroring_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritymirroringendpoint"

googlenetworksecuritymirroringendpoint.NewGoogleNetworkSecurityMirroringEndpoint(scope Construct, id *string, config GoogleNetworkSecurityMirroringEndpointConfig) GoogleNetworkSecurityMirroringEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig">GoogleNetworkSecurityMirroringEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig">GoogleNetworkSecurityMirroringEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecurityMirroringEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts">GoogleNetworkSecurityMirroringEndpointTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityMirroringEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritymirroringendpoint"

googlenetworksecuritymirroringendpoint.GoogleNetworkSecurityMirroringEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritymirroringendpoint"

googlenetworksecuritymirroringendpoint.GoogleNetworkSecurityMirroringEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritymirroringendpoint"

googlenetworksecuritymirroringendpoint.GoogleNetworkSecurityMirroringEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritymirroringendpoint"

googlenetworksecuritymirroringendpoint.GoogleNetworkSecurityMirroringEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleNetworkSecurityMirroringEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecurityMirroringEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecurityMirroringEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityMirroringEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.reconciling">Reconciling</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointGroupInput">MirroringEndpointGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointIdInput">MirroringEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointGroup">MirroringEndpointGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointId">MirroringEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference">GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MirroringEndpointGroupInput`<sup>Optional</sup> <a name="MirroringEndpointGroupInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointGroupInput"></a>

```go
func MirroringEndpointGroupInput() *string
```

- *Type:* *string

---

##### `MirroringEndpointIdInput`<sup>Optional</sup> <a name="MirroringEndpointIdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointIdInput"></a>

```go
func MirroringEndpointIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MirroringEndpointGroup`<sup>Required</sup> <a name="MirroringEndpointGroup" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointGroup"></a>

```go
func MirroringEndpointGroup() *string
```

- *Type:* *string

---

##### `MirroringEndpointId`<sup>Required</sup> <a name="MirroringEndpointId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.mirroringEndpointId"></a>

```go
func MirroringEndpointId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityMirroringEndpointConfig <a name="GoogleNetworkSecurityMirroringEndpointConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritymirroringendpoint"

&googlenetworksecuritymirroringendpoint.GoogleNetworkSecurityMirroringEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MirroringEndpointGroup: *string,
	MirroringEndpointId: *string,
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.location">Location</a></code> | <code>*string</code> | The cloud location of the endpoint, e.g. 'us-central1-a' or 'asia-south1-b'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.mirroringEndpointGroup">MirroringEndpointGroup</a></code> | <code>*string</code> | The endpoint group that this endpoint belongs to. Format is: 'projects/{project}/locations/{location}/mirroringEndpointGroups/{mirroringEndpointGroup}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.mirroringEndpointId">MirroringEndpointId</a></code> | <code>*string</code> | The ID to use for the new endpoint, which will become the final component of the endpoint's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description of the endpoint. Used as additional context for the endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#id GoogleNetworkSecurityMirroringEndpoint#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#project GoogleNetworkSecurityMirroringEndpoint#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts">GoogleNetworkSecurityMirroringEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The cloud location of the endpoint, e.g. 'us-central1-a' or 'asia-south1-b'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#location GoogleNetworkSecurityMirroringEndpoint#location}

---

##### `MirroringEndpointGroup`<sup>Required</sup> <a name="MirroringEndpointGroup" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.mirroringEndpointGroup"></a>

```go
MirroringEndpointGroup *string
```

- *Type:* *string

The endpoint group that this endpoint belongs to. Format is: 'projects/{project}/locations/{location}/mirroringEndpointGroups/{mirroringEndpointGroup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#mirroring_endpoint_group GoogleNetworkSecurityMirroringEndpoint#mirroring_endpoint_group}

---

##### `MirroringEndpointId`<sup>Required</sup> <a name="MirroringEndpointId" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.mirroringEndpointId"></a>

```go
MirroringEndpointId *string
```

- *Type:* *string

The ID to use for the new endpoint, which will become the final component of the endpoint's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#mirroring_endpoint_id GoogleNetworkSecurityMirroringEndpoint#mirroring_endpoint_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#deletion_policy GoogleNetworkSecurityMirroringEndpoint#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description of the endpoint. Used as additional context for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#description GoogleNetworkSecurityMirroringEndpoint#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#id GoogleNetworkSecurityMirroringEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#labels GoogleNetworkSecurityMirroringEndpoint#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#project GoogleNetworkSecurityMirroringEndpoint#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecurityMirroringEndpointTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts">GoogleNetworkSecurityMirroringEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#timeouts GoogleNetworkSecurityMirroringEndpoint#timeouts}

---

### GoogleNetworkSecurityMirroringEndpointTimeouts <a name="GoogleNetworkSecurityMirroringEndpointTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritymirroringendpoint"

&googlenetworksecuritymirroringendpoint.GoogleNetworkSecurityMirroringEndpointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#create GoogleNetworkSecurityMirroringEndpoint#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#delete GoogleNetworkSecurityMirroringEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#update GoogleNetworkSecurityMirroringEndpoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#create GoogleNetworkSecurityMirroringEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#delete GoogleNetworkSecurityMirroringEndpoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_mirroring_endpoint#update GoogleNetworkSecurityMirroringEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference <a name="GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritymirroringendpoint"

googlenetworksecuritymirroringendpoint.NewGoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityMirroringEndpoint.GoogleNetworkSecurityMirroringEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



