# `googleNetworkSecuritySacAttachment` Submodule <a name="`googleNetworkSecuritySacAttachment` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecuritySacAttachment <a name="GoogleNetworkSecuritySacAttachment" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment google_network_security_sac_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritysacattachment"

googlenetworksecuritysacattachment.NewGoogleNetworkSecuritySacAttachment(scope Construct, id *string, config GoogleNetworkSecuritySacAttachmentConfig) GoogleNetworkSecuritySacAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig">GoogleNetworkSecuritySacAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig">GoogleNetworkSecuritySacAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions">PutSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetSymantecOptions">ResetSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSymantecOptions` <a name="PutSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions"></a>

```go
func PutSymantecOptions(value GoogleNetworkSecuritySacAttachmentSymantecOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putSymantecOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetworkSecuritySacAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

---

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSymantecOptions` <a name="ResetSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetSymantecOptions"></a>

```go
func ResetSymantecOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.resetTimeZone"></a>

```go
func ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecuritySacAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritysacattachment"

googlenetworksecuritysacattachment.GoogleNetworkSecuritySacAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritysacattachment"

googlenetworksecuritysacattachment.GoogleNetworkSecuritySacAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritysacattachment"

googlenetworksecuritysacattachment.GoogleNetworkSecuritySacAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritysacattachment"

googlenetworksecuritysacattachment.GoogleNetworkSecuritySacAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleNetworkSecuritySacAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetworkSecuritySacAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetworkSecuritySacAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecuritySacAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptions">SymantecOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference">GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference">GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGatewayInput">NccGatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealmInput">SacRealmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptionsInput">SymantecOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGateway">NccGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealm">SacRealm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SymantecOptions`<sup>Required</sup> <a name="SymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptions"></a>

```go
func SymantecOptions() GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference">GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeouts"></a>

```go
func Timeouts() GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference">GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NccGatewayInput`<sup>Optional</sup> <a name="NccGatewayInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGatewayInput"></a>

```go
func NccGatewayInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SacRealmInput`<sup>Optional</sup> <a name="SacRealmInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealmInput"></a>

```go
func SacRealmInput() *string
```

- *Type:* *string

---

##### `SymantecOptionsInput`<sup>Optional</sup> <a name="SymantecOptionsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.symantecOptionsInput"></a>

```go
func SymantecOptionsInput() GoogleNetworkSecuritySacAttachmentSymantecOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NccGateway`<sup>Required</sup> <a name="NccGateway" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.nccGateway"></a>

```go
func NccGateway() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SacRealm`<sup>Required</sup> <a name="SacRealm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.sacRealm"></a>

```go
func SacRealm() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecuritySacAttachmentConfig <a name="GoogleNetworkSecuritySacAttachmentConfig" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritysacattachment"

&googlenetworksecuritysacattachment.GoogleNetworkSecuritySacAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	NccGateway: *string,
	SacRealm: *string,
	Country: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	SymantecOptions: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts,
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.location">Location</a></code> | <code>*string</code> | The location of the SACAttachment resource. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.name">Name</a></code> | <code>*string</code> | Identifier. Resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.nccGateway">NccGateway</a></code> | <code>*string</code> | NCC Gateway associated with the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.sacRealm">SacRealm</a></code> | <code>*string</code> | SAC Realm which owns the attachment. This can be input as an ID or a full resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.country">Country</a></code> | <code>*string</code> | Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.symantecOptions">SymantecOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | symantec_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeZone">TimeZone</a></code> | <code>*string</code> | Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the SACAttachment resource. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#location GoogleNetworkSecuritySacAttachment#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Identifier. Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#name GoogleNetworkSecuritySacAttachment#name}

---

##### `NccGateway`<sup>Required</sup> <a name="NccGateway" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.nccGateway"></a>

```go
NccGateway *string
```

- *Type:* *string

NCC Gateway associated with the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#ncc_gateway GoogleNetworkSecuritySacAttachment#ncc_gateway}

---

##### `SacRealm`<sup>Required</sup> <a name="SacRealm" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.sacRealm"></a>

```go
SacRealm *string
```

- *Type:* *string

SAC Realm which owns the attachment. This can be input as an ID or a full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#sac_realm GoogleNetworkSecuritySacAttachment#sac_realm}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.country"></a>

```go
Country *string
```

- *Type:* *string

Case-insensitive ISO-3166 alpha-2 country code used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#country GoogleNetworkSecuritySacAttachment#country}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#id GoogleNetworkSecuritySacAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional labels in key:value format. For more information about labels, see [Requirements for labels](https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels#requirements).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#labels GoogleNetworkSecuritySacAttachment#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#project GoogleNetworkSecuritySacAttachment#project}.

---

##### `SymantecOptions`<sup>Optional</sup> <a name="SymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.symantecOptions"></a>

```go
SymantecOptions GoogleNetworkSecuritySacAttachmentSymantecOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

symantec_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#symantec_options GoogleNetworkSecuritySacAttachment#symantec_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeouts"></a>

```go
Timeouts GoogleNetworkSecuritySacAttachmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts">GoogleNetworkSecuritySacAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#timeouts GoogleNetworkSecuritySacAttachment#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentConfig.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Case-sensitive tzinfo identifier used for localization. Only valid for Symantec attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#time_zone GoogleNetworkSecuritySacAttachment#time_zone}

---

### GoogleNetworkSecuritySacAttachmentSymantecOptions <a name="GoogleNetworkSecuritySacAttachmentSymantecOptions" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritysacattachment"

&googlenetworksecuritysacattachment.GoogleNetworkSecuritySacAttachmentSymantecOptions {
	SymantecLocationName: *string,
	SymantecSite: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecLocationName">SymantecLocationName</a></code> | <code>*string</code> | Name to be used when creating a location on the customer's behalf in Symantec's Location API. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecSite">SymantecSite</a></code> | <code>*string</code> | Symantec data center identifier that this attachment will connect to. |

---

##### `SymantecLocationName`<sup>Optional</sup> <a name="SymantecLocationName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecLocationName"></a>

```go
SymantecLocationName *string
```

- *Type:* *string

Name to be used when creating a location on the customer's behalf in Symantec's Location API.

Not to be confused with Google Cloud locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#symantec_location_name GoogleNetworkSecuritySacAttachment#symantec_location_name}

---

##### `SymantecSite`<sup>Optional</sup> <a name="SymantecSite" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions.property.symantecSite"></a>

```go
SymantecSite *string
```

- *Type:* *string

Symantec data center identifier that this attachment will connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#symantec_site GoogleNetworkSecuritySacAttachment#symantec_site}

---

### GoogleNetworkSecuritySacAttachmentTimeouts <a name="GoogleNetworkSecuritySacAttachmentTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritysacattachment"

&googlenetworksecuritysacattachment.GoogleNetworkSecuritySacAttachmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#create GoogleNetworkSecuritySacAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#delete GoogleNetworkSecuritySacAttachment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#update GoogleNetworkSecuritySacAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#create GoogleNetworkSecuritySacAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#delete GoogleNetworkSecuritySacAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_security_sac_attachment#update GoogleNetworkSecuritySacAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference <a name="GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritysacattachment"

googlenetworksecuritysacattachment.NewGoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecLocationName">ResetSymantecLocationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecSite">ResetSymantecSite</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSymantecLocationName` <a name="ResetSymantecLocationName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecLocationName"></a>

```go
func ResetSymantecLocationName()
```

##### `ResetSymantecSite` <a name="ResetSymantecSite" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.resetSymantecSite"></a>

```go
func ResetSymantecSite()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationNameInput">SymantecLocationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSiteInput">SymantecSiteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationName">SymantecLocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSite">SymantecSite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SymantecLocationNameInput`<sup>Optional</sup> <a name="SymantecLocationNameInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationNameInput"></a>

```go
func SymantecLocationNameInput() *string
```

- *Type:* *string

---

##### `SymantecSiteInput`<sup>Optional</sup> <a name="SymantecSiteInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSiteInput"></a>

```go
func SymantecSiteInput() *string
```

- *Type:* *string

---

##### `SymantecLocationName`<sup>Required</sup> <a name="SymantecLocationName" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecLocationName"></a>

```go
func SymantecLocationName() *string
```

- *Type:* *string

---

##### `SymantecSite`<sup>Required</sup> <a name="SymantecSite" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.symantecSite"></a>

```go
func SymantecSite() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetworkSecuritySacAttachmentSymantecOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentSymantecOptions">GoogleNetworkSecuritySacAttachmentSymantecOptions</a>

---


### GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference <a name="GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetworksecuritysacattachment"

googlenetworksecuritysacattachment.NewGoogleNetworkSecuritySacAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetworkSecuritySacAttachment.GoogleNetworkSecuritySacAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



