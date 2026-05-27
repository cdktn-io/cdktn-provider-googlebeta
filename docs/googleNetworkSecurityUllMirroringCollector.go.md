# `googleNetworkSecurityUllMirroringCollector` Submodule <a name="`googleNetworkSecurityUllMirroringCollector` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityUllMirroringCollector <a name="GoogleNetworkSecurityUllMirroringCollector" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector google_network_security_ull_mirroring_collector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollector"

googlenetworksecurityullmirroringcollector.NewGoogleNetworkSecurityUllMirroringCollector(scope Construct, id *string, config GoogleNetworkSecurityUllMirroringCollectorConfig) GoogleNetworkSecurityUllMirroringCollector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig">GoogleNetworkSecurityUllMirroringCollectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig">GoogleNetworkSecurityUllMirroringCollectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecurityUllMirroringCollectorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollector"

googlenetworksecurityullmirroringcollector.GoogleNetworkSecurityUllMirroringCollector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollector"

googlenetworksecurityullmirroringcollector.GoogleNetworkSecurityUllMirroringCollector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollector"

googlenetworksecurityullmirroringcollector.GoogleNetworkSecurityUllMirroringCollector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollector"

googlenetworksecurityullmirroringcollector.GoogleNetworkSecurityUllMirroringCollector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleNetworkSecurityUllMirroringCollector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecurityUllMirroringCollector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecurityUllMirroringCollector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityUllMirroringCollector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.reconciling">Reconciling</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forwardingRuleInput">ForwardingRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.ullMirroringCollectorIdInput">UllMirroringCollectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.ullMirroringCollectorId">UllMirroringCollectorId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference">GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `ForwardingRuleInput`<sup>Optional</sup> <a name="ForwardingRuleInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forwardingRuleInput"></a>

```go
func ForwardingRuleInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UllMirroringCollectorIdInput`<sup>Optional</sup> <a name="UllMirroringCollectorIdInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.ullMirroringCollectorIdInput"></a>

```go
func UllMirroringCollectorIdInput() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.forwardingRule"></a>

```go
func ForwardingRule() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `UllMirroringCollectorId`<sup>Required</sup> <a name="UllMirroringCollectorId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.ullMirroringCollectorId"></a>

```go
func UllMirroringCollectorId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityUllMirroringCollectorConfig <a name="GoogleNetworkSecurityUllMirroringCollectorConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollector"

&googlenetworksecurityullmirroringcollector.GoogleNetworkSecurityUllMirroringCollectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Engine: *string,
	ForwardingRule: *string,
	Location: *string,
	UllMirroringCollectorId: *string,
	DeletionPolicy: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.engine">Engine</a></code> | <code>*string</code> | The engine resource to which this collector points to, for example: 'projects/123456789/locations/us-south1-d/ullMirroringEngines/my-engine'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.forwardingRule">ForwardingRule</a></code> | <code>*string</code> | The regional load balancer which the mirrored traffic should be forwarded to, for example: 'projects/123456789/regions/us-south1/forwardingRules/my-fr'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.location">Location</a></code> | <code>*string</code> | The cloud location of the collector, e.g. 'us-south1-d' or 'us-south1-e'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.ullMirroringCollectorId">UllMirroringCollectorId</a></code> | <code>*string</code> | The ID to use for the new collector, which will become the final component of the collector's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#id GoogleNetworkSecurityUllMirroringCollector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#project GoogleNetworkSecurityUllMirroringCollector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

The engine resource to which this collector points to, for example: 'projects/123456789/locations/us-south1-d/ullMirroringEngines/my-engine'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#engine GoogleNetworkSecurityUllMirroringCollector#engine}

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.forwardingRule"></a>

```go
ForwardingRule *string
```

- *Type:* *string

The regional load balancer which the mirrored traffic should be forwarded to, for example: 'projects/123456789/regions/us-south1/forwardingRules/my-fr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#forwarding_rule GoogleNetworkSecurityUllMirroringCollector#forwarding_rule}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The cloud location of the collector, e.g. 'us-south1-d' or 'us-south1-e'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#location GoogleNetworkSecurityUllMirroringCollector#location}

---

##### `UllMirroringCollectorId`<sup>Required</sup> <a name="UllMirroringCollectorId" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.ullMirroringCollectorId"></a>

```go
UllMirroringCollectorId *string
```

- *Type:* *string

The ID to use for the new collector, which will become the final component of the collector's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#ull_mirroring_collector_id GoogleNetworkSecurityUllMirroringCollector#ull_mirroring_collector_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#deletion_policy GoogleNetworkSecurityUllMirroringCollector#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#id GoogleNetworkSecurityUllMirroringCollector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#labels GoogleNetworkSecurityUllMirroringCollector#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#project GoogleNetworkSecurityUllMirroringCollector#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecurityUllMirroringCollectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts">GoogleNetworkSecurityUllMirroringCollectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#timeouts GoogleNetworkSecurityUllMirroringCollector#timeouts}

---

### GoogleNetworkSecurityUllMirroringCollectorTimeouts <a name="GoogleNetworkSecurityUllMirroringCollectorTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollector"

&googlenetworksecurityullmirroringcollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#create GoogleNetworkSecurityUllMirroringCollector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#delete GoogleNetworkSecurityUllMirroringCollector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#update GoogleNetworkSecurityUllMirroringCollector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#create GoogleNetworkSecurityUllMirroringCollector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#delete GoogleNetworkSecurityUllMirroringCollector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_network_security_ull_mirroring_collector#update GoogleNetworkSecurityUllMirroringCollector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference <a name="GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecurityullmirroringcollector"

googlenetworksecurityullmirroringcollector.NewGoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityUllMirroringCollector.GoogleNetworkSecurityUllMirroringCollectorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



