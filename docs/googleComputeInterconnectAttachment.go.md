# `googleComputeInterconnectAttachment` Submodule <a name="`googleComputeInterconnectAttachment` Submodule" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInterconnectAttachment <a name="GoogleComputeInterconnectAttachment" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment google_compute_interconnect_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.NewGoogleComputeInterconnectAttachment(scope Construct, id *string, config GoogleComputeInterconnectAttachmentConfig) GoogleComputeInterconnectAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig">GoogleComputeInterconnectAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig">GoogleComputeInterconnectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putL2Forwarding">PutL2Forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetAdminEnabled">ResetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCloudRouterIpAddress">ResetCandidateCloudRouterIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCloudRouterIpv6Address">ResetCandidateCloudRouterIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCustomerRouterIpAddress">ResetCandidateCustomerRouterIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCustomerRouterIpv6Address">ResetCandidateCustomerRouterIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateSubnets">ResetCandidateSubnets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetEdgeAvailabilityDomain">ResetEdgeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetInterconnect">ResetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetIpsecInternalAddresses">ResetIpsecInternalAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetL2Forwarding">ResetL2Forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetRouter">ResetRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetStackType">ResetStackType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetSubnetLength">ResetSubnetLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetVlanTag8021Q">ResetVlanTag8021Q</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutL2Forwarding` <a name="PutL2Forwarding" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putL2Forwarding"></a>

```go
func PutL2Forwarding(value GoogleComputeInterconnectAttachmentL2Forwarding)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putL2Forwarding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a>

---

##### `PutParams` <a name="PutParams" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putParams"></a>

```go
func PutParams(value GoogleComputeInterconnectAttachmentParams)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeInterconnectAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>

---

##### `ResetAdminEnabled` <a name="ResetAdminEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetAdminEnabled"></a>

```go
func ResetAdminEnabled()
```

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetBandwidth"></a>

```go
func ResetBandwidth()
```

##### `ResetCandidateCloudRouterIpAddress` <a name="ResetCandidateCloudRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCloudRouterIpAddress"></a>

```go
func ResetCandidateCloudRouterIpAddress()
```

##### `ResetCandidateCloudRouterIpv6Address` <a name="ResetCandidateCloudRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCloudRouterIpv6Address"></a>

```go
func ResetCandidateCloudRouterIpv6Address()
```

##### `ResetCandidateCustomerRouterIpAddress` <a name="ResetCandidateCustomerRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCustomerRouterIpAddress"></a>

```go
func ResetCandidateCustomerRouterIpAddress()
```

##### `ResetCandidateCustomerRouterIpv6Address` <a name="ResetCandidateCustomerRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateCustomerRouterIpv6Address"></a>

```go
func ResetCandidateCustomerRouterIpv6Address()
```

##### `ResetCandidateSubnets` <a name="ResetCandidateSubnets" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetCandidateSubnets"></a>

```go
func ResetCandidateSubnets()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEdgeAvailabilityDomain` <a name="ResetEdgeAvailabilityDomain" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetEdgeAvailabilityDomain"></a>

```go
func ResetEdgeAvailabilityDomain()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetEncryption"></a>

```go
func ResetEncryption()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetInterconnect` <a name="ResetInterconnect" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetInterconnect"></a>

```go
func ResetInterconnect()
```

##### `ResetIpsecInternalAddresses` <a name="ResetIpsecInternalAddresses" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetIpsecInternalAddresses"></a>

```go
func ResetIpsecInternalAddresses()
```

##### `ResetL2Forwarding` <a name="ResetL2Forwarding" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetL2Forwarding"></a>

```go
func ResetL2Forwarding()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetParams"></a>

```go
func ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetRouter"></a>

```go
func ResetRouter()
```

##### `ResetStackType` <a name="ResetStackType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetStackType"></a>

```go
func ResetStackType()
```

##### `ResetSubnetLength` <a name="ResetSubnetLength" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetSubnetLength"></a>

```go
func ResetSubnetLength()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetType"></a>

```go
func ResetType()
```

##### `ResetVlanTag8021Q` <a name="ResetVlanTag8021Q" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.resetVlanTag8021Q"></a>

```go
func ResetVlanTag8021Q()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeInterconnectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.GoogleComputeInterconnectAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.GoogleComputeInterconnectAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.GoogleComputeInterconnectAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.GoogleComputeInterconnectAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleComputeInterconnectAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeInterconnectAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeInterconnectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeInterconnectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.attachmentGroup">AttachmentGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cloudRouterIpAddress">CloudRouterIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cloudRouterIpv6Address">CloudRouterIpv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.customerRouterIpAddress">CustomerRouterIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.customerRouterIpv6Address">CustomerRouterIpv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.googleReferenceId">GoogleReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.l2Forwarding">L2Forwarding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference">GoogleComputeInterconnectAttachmentL2ForwardingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.labelFingerprint">LabelFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.pairingKey">PairingKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference">GoogleComputeInterconnectAttachmentParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.partnerAsn">PartnerAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.privateInterconnectInfo">PrivateInterconnectInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList">GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference">GoogleComputeInterconnectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.adminEnabledInput">AdminEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.bandwidthInput">BandwidthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpAddressInput">CandidateCloudRouterIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpv6AddressInput">CandidateCloudRouterIpv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpAddressInput">CandidateCustomerRouterIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpv6AddressInput">CandidateCustomerRouterIpv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateSubnetsInput">CandidateSubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.edgeAvailabilityDomainInput">EdgeAvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.encryptionInput">EncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.interconnectInput">InterconnectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.ipsecInternalAddressesInput">IpsecInternalAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.l2ForwardingInput">L2ForwardingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.mtuInput">MtuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.stackTypeInput">StackTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.subnetLengthInput">SubnetLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.vlanTag8021QInput">VlanTag8021QInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.adminEnabled">AdminEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.bandwidth">Bandwidth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpAddress">CandidateCloudRouterIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpv6Address">CandidateCloudRouterIpv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpAddress">CandidateCustomerRouterIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpv6Address">CandidateCustomerRouterIpv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateSubnets">CandidateSubnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.edgeAvailabilityDomain">EdgeAvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.encryption">Encryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.interconnect">Interconnect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.ipsecInternalAddresses">IpsecInternalAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.mtu">Mtu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.router">Router</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.stackType">StackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.subnetLength">SubnetLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.vlanTag8021Q">VlanTag8021Q</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentGroup`<sup>Required</sup> <a name="AttachmentGroup" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.attachmentGroup"></a>

```go
func AttachmentGroup() *string
```

- *Type:* *string

---

##### `CloudRouterIpAddress`<sup>Required</sup> <a name="CloudRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cloudRouterIpAddress"></a>

```go
func CloudRouterIpAddress() *string
```

- *Type:* *string

---

##### `CloudRouterIpv6Address`<sup>Required</sup> <a name="CloudRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.cloudRouterIpv6Address"></a>

```go
func CloudRouterIpv6Address() *string
```

- *Type:* *string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `CustomerRouterIpAddress`<sup>Required</sup> <a name="CustomerRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.customerRouterIpAddress"></a>

```go
func CustomerRouterIpAddress() *string
```

- *Type:* *string

---

##### `CustomerRouterIpv6Address`<sup>Required</sup> <a name="CustomerRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.customerRouterIpv6Address"></a>

```go
func CustomerRouterIpv6Address() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `GoogleReferenceId`<sup>Required</sup> <a name="GoogleReferenceId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.googleReferenceId"></a>

```go
func GoogleReferenceId() *string
```

- *Type:* *string

---

##### `L2Forwarding`<sup>Required</sup> <a name="L2Forwarding" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.l2Forwarding"></a>

```go
func L2Forwarding() GoogleComputeInterconnectAttachmentL2ForwardingOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference">GoogleComputeInterconnectAttachmentL2ForwardingOutputReference</a>

---

##### `LabelFingerprint`<sup>Required</sup> <a name="LabelFingerprint" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.labelFingerprint"></a>

```go
func LabelFingerprint() *string
```

- *Type:* *string

---

##### `PairingKey`<sup>Required</sup> <a name="PairingKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.pairingKey"></a>

```go
func PairingKey() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.params"></a>

```go
func Params() GoogleComputeInterconnectAttachmentParamsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference">GoogleComputeInterconnectAttachmentParamsOutputReference</a>

---

##### `PartnerAsn`<sup>Required</sup> <a name="PartnerAsn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.partnerAsn"></a>

```go
func PartnerAsn() *string
```

- *Type:* *string

---

##### `PrivateInterconnectInfo`<sup>Required</sup> <a name="PrivateInterconnectInfo" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.privateInterconnectInfo"></a>

```go
func PrivateInterconnectInfo() GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList">GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.timeouts"></a>

```go
func Timeouts() GoogleComputeInterconnectAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference">GoogleComputeInterconnectAttachmentTimeoutsOutputReference</a>

---

##### `AdminEnabledInput`<sup>Optional</sup> <a name="AdminEnabledInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.adminEnabledInput"></a>

```go
func AdminEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.bandwidthInput"></a>

```go
func BandwidthInput() *string
```

- *Type:* *string

---

##### `CandidateCloudRouterIpAddressInput`<sup>Optional</sup> <a name="CandidateCloudRouterIpAddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpAddressInput"></a>

```go
func CandidateCloudRouterIpAddressInput() *string
```

- *Type:* *string

---

##### `CandidateCloudRouterIpv6AddressInput`<sup>Optional</sup> <a name="CandidateCloudRouterIpv6AddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpv6AddressInput"></a>

```go
func CandidateCloudRouterIpv6AddressInput() *string
```

- *Type:* *string

---

##### `CandidateCustomerRouterIpAddressInput`<sup>Optional</sup> <a name="CandidateCustomerRouterIpAddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpAddressInput"></a>

```go
func CandidateCustomerRouterIpAddressInput() *string
```

- *Type:* *string

---

##### `CandidateCustomerRouterIpv6AddressInput`<sup>Optional</sup> <a name="CandidateCustomerRouterIpv6AddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpv6AddressInput"></a>

```go
func CandidateCustomerRouterIpv6AddressInput() *string
```

- *Type:* *string

---

##### `CandidateSubnetsInput`<sup>Optional</sup> <a name="CandidateSubnetsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateSubnetsInput"></a>

```go
func CandidateSubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EdgeAvailabilityDomainInput`<sup>Optional</sup> <a name="EdgeAvailabilityDomainInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.edgeAvailabilityDomainInput"></a>

```go
func EdgeAvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.encryptionInput"></a>

```go
func EncryptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterconnectInput`<sup>Optional</sup> <a name="InterconnectInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.interconnectInput"></a>

```go
func InterconnectInput() *string
```

- *Type:* *string

---

##### `IpsecInternalAddressesInput`<sup>Optional</sup> <a name="IpsecInternalAddressesInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.ipsecInternalAddressesInput"></a>

```go
func IpsecInternalAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `L2ForwardingInput`<sup>Optional</sup> <a name="L2ForwardingInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.l2ForwardingInput"></a>

```go
func L2ForwardingInput() GoogleComputeInterconnectAttachmentL2Forwarding
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.mtuInput"></a>

```go
func MtuInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.paramsInput"></a>

```go
func ParamsInput() GoogleComputeInterconnectAttachmentParams
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `StackTypeInput`<sup>Optional</sup> <a name="StackTypeInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.stackTypeInput"></a>

```go
func StackTypeInput() *string
```

- *Type:* *string

---

##### `SubnetLengthInput`<sup>Optional</sup> <a name="SubnetLengthInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.subnetLengthInput"></a>

```go
func SubnetLengthInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VlanTag8021QInput`<sup>Optional</sup> <a name="VlanTag8021QInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.vlanTag8021QInput"></a>

```go
func VlanTag8021QInput() *f64
```

- *Type:* *f64

---

##### `AdminEnabled`<sup>Required</sup> <a name="AdminEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.adminEnabled"></a>

```go
func AdminEnabled() interface{}
```

- *Type:* interface{}

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.bandwidth"></a>

```go
func Bandwidth() *string
```

- *Type:* *string

---

##### `CandidateCloudRouterIpAddress`<sup>Required</sup> <a name="CandidateCloudRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpAddress"></a>

```go
func CandidateCloudRouterIpAddress() *string
```

- *Type:* *string

---

##### `CandidateCloudRouterIpv6Address`<sup>Required</sup> <a name="CandidateCloudRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCloudRouterIpv6Address"></a>

```go
func CandidateCloudRouterIpv6Address() *string
```

- *Type:* *string

---

##### `CandidateCustomerRouterIpAddress`<sup>Required</sup> <a name="CandidateCustomerRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpAddress"></a>

```go
func CandidateCustomerRouterIpAddress() *string
```

- *Type:* *string

---

##### `CandidateCustomerRouterIpv6Address`<sup>Required</sup> <a name="CandidateCustomerRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateCustomerRouterIpv6Address"></a>

```go
func CandidateCustomerRouterIpv6Address() *string
```

- *Type:* *string

---

##### `CandidateSubnets`<sup>Required</sup> <a name="CandidateSubnets" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.candidateSubnets"></a>

```go
func CandidateSubnets() *[]*string
```

- *Type:* *[]*string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EdgeAvailabilityDomain`<sup>Required</sup> <a name="EdgeAvailabilityDomain" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.edgeAvailabilityDomain"></a>

```go
func EdgeAvailabilityDomain() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.encryption"></a>

```go
func Encryption() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Interconnect`<sup>Required</sup> <a name="Interconnect" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.interconnect"></a>

```go
func Interconnect() *string
```

- *Type:* *string

---

##### `IpsecInternalAddresses`<sup>Required</sup> <a name="IpsecInternalAddresses" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.ipsecInternalAddresses"></a>

```go
func IpsecInternalAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.mtu"></a>

```go
func Mtu() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.stackType"></a>

```go
func StackType() *string
```

- *Type:* *string

---

##### `SubnetLength`<sup>Required</sup> <a name="SubnetLength" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.subnetLength"></a>

```go
func SubnetLength() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VlanTag8021Q`<sup>Required</sup> <a name="VlanTag8021Q" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.vlanTag8021Q"></a>

```go
func VlanTag8021Q() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInterconnectAttachmentConfig <a name="GoogleComputeInterconnectAttachmentConfig" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

&googlecomputeinterconnectattachment.GoogleComputeInterconnectAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AdminEnabled: interface{},
	Bandwidth: *string,
	CandidateCloudRouterIpAddress: *string,
	CandidateCloudRouterIpv6Address: *string,
	CandidateCustomerRouterIpAddress: *string,
	CandidateCustomerRouterIpv6Address: *string,
	CandidateSubnets: *[]*string,
	DeletionPolicy: *string,
	Description: *string,
	EdgeAvailabilityDomain: *string,
	Encryption: *string,
	Id: *string,
	Interconnect: *string,
	IpsecInternalAddresses: *[]*string,
	L2Forwarding: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding,
	Labels: *map[string]*string,
	Mtu: *string,
	Params: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams,
	Project: *string,
	Region: *string,
	Router: *string,
	StackType: *string,
	SubnetLength: *f64,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts,
	Type: *string,
	VlanTag8021Q: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.adminEnabled">AdminEnabled</a></code> | <code>interface{}</code> | Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.bandwidth">Bandwidth</a></code> | <code>*string</code> | Provisioned bandwidth capacity for the interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpAddress">CandidateCloudRouterIpAddress</a></code> | <code>*string</code> | Single IPv4 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 203.0.113.1/29. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpv6Address">CandidateCloudRouterIpv6Address</a></code> | <code>*string</code> | Single IPv6 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 2001:db8::1/125. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpAddress">CandidateCustomerRouterIpAddress</a></code> | <code>*string</code> | Single IPv4 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 203.0.113.2/29. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpv6Address">CandidateCustomerRouterIpv6Address</a></code> | <code>*string</code> | Single IPv6 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 2001:db8::2/125. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateSubnets">CandidateSubnets</a></code> | <code>*[]*string</code> | Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.edgeAvailabilityDomain">EdgeAvailabilityDomain</a></code> | <code>*string</code> | Desired availability domain for the attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.encryption">Encryption</a></code> | <code>*string</code> | Indicates the user-supplied encryption option of this interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#id GoogleComputeInterconnectAttachment#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.interconnect">Interconnect</a></code> | <code>*string</code> | URL of the underlying Interconnect object that this attachment's traffic will traverse through. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.ipsecInternalAddresses">IpsecInternalAddresses</a></code> | <code>*[]*string</code> | URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.l2Forwarding">L2Forwarding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a></code> | l2_forwarding block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels for this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.mtu">Mtu</a></code> | <code>*string</code> | Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.params">Params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#project GoogleComputeInterconnectAttachment#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.region">Region</a></code> | <code>*string</code> | Region where the regional interconnect attachment resides. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.router">Router</a></code> | <code>*string</code> | URL of the cloud router to be used for dynamic routing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.stackType">StackType</a></code> | <code>*string</code> | The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.subnetLength">SubnetLength</a></code> | <code>*f64</code> | Length of the IPv4 subnet mask. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.type">Type</a></code> | <code>*string</code> | The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER", "L2_DEDICATED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.vlanTag8021Q">VlanTag8021Q</a></code> | <code>*f64</code> | The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
'[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#name GoogleComputeInterconnectAttachment#name}

---

##### `AdminEnabled`<sup>Optional</sup> <a name="AdminEnabled" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.adminEnabled"></a>

```go
AdminEnabled interface{}
```

- *Type:* interface{}

Whether the VLAN attachment is enabled or disabled.  When using PARTNER type this will Pre-Activate the interconnect attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#admin_enabled GoogleComputeInterconnectAttachment#admin_enabled}

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.bandwidth"></a>

```go
Bandwidth *string
```

- *Type:* *string

Provisioned bandwidth capacity for the interconnect attachment.

For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G Possible values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G", "BPS_20G", "BPS_50G", "BPS_100G", "BPS_400G"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#bandwidth GoogleComputeInterconnectAttachment#bandwidth}

---

##### `CandidateCloudRouterIpAddress`<sup>Optional</sup> <a name="CandidateCloudRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpAddress"></a>

```go
CandidateCloudRouterIpAddress *string
```

- *Type:* *string

Single IPv4 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 203.0.113.1/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#candidate_cloud_router_ip_address GoogleComputeInterconnectAttachment#candidate_cloud_router_ip_address}

---

##### `CandidateCloudRouterIpv6Address`<sup>Optional</sup> <a name="CandidateCloudRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCloudRouterIpv6Address"></a>

```go
CandidateCloudRouterIpv6Address *string
```

- *Type:* *string

Single IPv6 address + prefix length to be configured on the cloud router interface for this interconnect attachment. Example: 2001:db8::1/125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#candidate_cloud_router_ipv6_address GoogleComputeInterconnectAttachment#candidate_cloud_router_ipv6_address}

---

##### `CandidateCustomerRouterIpAddress`<sup>Optional</sup> <a name="CandidateCustomerRouterIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpAddress"></a>

```go
CandidateCustomerRouterIpAddress *string
```

- *Type:* *string

Single IPv4 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 203.0.113.2/29.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#candidate_customer_router_ip_address GoogleComputeInterconnectAttachment#candidate_customer_router_ip_address}

---

##### `CandidateCustomerRouterIpv6Address`<sup>Optional</sup> <a name="CandidateCustomerRouterIpv6Address" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateCustomerRouterIpv6Address"></a>

```go
CandidateCustomerRouterIpv6Address *string
```

- *Type:* *string

Single IPv6 address + prefix length to be configured on the customer router interface for this interconnect attachment. Example: 2001:db8::2/125.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#candidate_customer_router_ipv6_address GoogleComputeInterconnectAttachment#candidate_customer_router_ipv6_address}

---

##### `CandidateSubnets`<sup>Optional</sup> <a name="CandidateSubnets" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.candidateSubnets"></a>

```go
CandidateSubnets *[]*string
```

- *Type:* *[]*string

Up to 16 candidate prefixes that can be used to restrict the allocation of cloudRouterIpAddress and customerRouterIpAddress for this attachment.

All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#candidate_subnets GoogleComputeInterconnectAttachment#candidate_subnets}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#deletion_policy GoogleComputeInterconnectAttachment#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#description GoogleComputeInterconnectAttachment#description}

---

##### `EdgeAvailabilityDomain`<sup>Optional</sup> <a name="EdgeAvailabilityDomain" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.edgeAvailabilityDomain"></a>

```go
EdgeAvailabilityDomain *string
```

- *Type:* *string

Desired availability domain for the attachment.

Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#edge_availability_domain GoogleComputeInterconnectAttachment#edge_availability_domain}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.encryption"></a>

```go
Encryption *string
```

- *Type:* *string

Indicates the user-supplied encryption option of this interconnect attachment.

Can only be specified at attachment creation for PARTNER or
DEDICATED attachments.

* NONE - This is the default value, which means that the VLAN attachment
  carries unencrypted traffic. VMs are able to send traffic to, or receive
  traffic from, such a VLAN attachment.
* IPSEC - The VLAN attachment carries only encrypted traffic that is
  encrypted by an IPsec device, such as an HA VPN gateway or third-party
  IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
  such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
  attachment must be created with this option. Default value: "NONE" Possible values: ["NONE", "IPSEC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#encryption GoogleComputeInterconnectAttachment#encryption}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#id GoogleComputeInterconnectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interconnect`<sup>Optional</sup> <a name="Interconnect" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.interconnect"></a>

```go
Interconnect *string
```

- *Type:* *string

URL of the underlying Interconnect object that this attachment's traffic will traverse through.

Required if type is DEDICATED, must not
be set if type is PARTNER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#interconnect GoogleComputeInterconnectAttachment#interconnect}

---

##### `IpsecInternalAddresses`<sup>Optional</sup> <a name="IpsecInternalAddresses" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.ipsecInternalAddresses"></a>

```go
IpsecInternalAddresses *[]*string
```

- *Type:* *[]*string

URL of addresses that have been reserved for the interconnect attachment, Used only for interconnect attachment that has the encryption option as IPSEC.

The addresses must be RFC 1918 IP address ranges. When creating HA VPN
gateway over the interconnect attachment, if the attachment is configured
to use an RFC 1918 IP address, then the VPN gateway's IP address will be
allocated from the IP address range specified here.
For example, if the HA VPN gateway's interface 0 is paired to this
interconnect attachment, then an RFC 1918 IP address for the VPN gateway
interface 0 will be allocated from the IP address specified for this
interconnect attachment.
If this field is not specified for interconnect attachment that has
encryption option as IPSEC, later on when creating HA VPN gateway on this
interconnect attachment, the HA VPN gateway's IP address will be
allocated from regional external IP address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#ipsec_internal_addresses GoogleComputeInterconnectAttachment#ipsec_internal_addresses}

---

##### `L2Forwarding`<sup>Optional</sup> <a name="L2Forwarding" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.l2Forwarding"></a>

```go
L2Forwarding GoogleComputeInterconnectAttachmentL2Forwarding
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a>

l2_forwarding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#l2_forwarding GoogleComputeInterconnectAttachment#l2_forwarding}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels for this resource.

These can only be added or modified by the setLabels
method. Each label key/value pair must comply with RFC1035. Label values may be empty.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#labels GoogleComputeInterconnectAttachment#labels}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.mtu"></a>

```go
Mtu *string
```

- *Type:* *string

Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment.

Valid values are 1440, 1460, 1500, and 8896. If not specified, the value will default to 1440.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#mtu GoogleComputeInterconnectAttachment#mtu}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.params"></a>

```go
Params GoogleComputeInterconnectAttachmentParams
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#params GoogleComputeInterconnectAttachment#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#project GoogleComputeInterconnectAttachment#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where the regional interconnect attachment resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#region GoogleComputeInterconnectAttachment#region}

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

URL of the cloud router to be used for dynamic routing.

This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#router GoogleComputeInterconnectAttachment#router}

---

##### `StackType`<sup>Optional</sup> <a name="StackType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.stackType"></a>

```go
StackType *string
```

- *Type:* *string

The stack type for this interconnect attachment to identify whether the IPv6 feature is enabled or not.

If not specified, IPV4_ONLY will be used.
This field can be both set at interconnect attachments creation and update
interconnect attachment operations. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#stack_type GoogleComputeInterconnectAttachment#stack_type}

---

##### `SubnetLength`<sup>Optional</sup> <a name="SubnetLength" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.subnetLength"></a>

```go
SubnetLength *f64
```

- *Type:* *f64

Length of the IPv4 subnet mask.

Allowed values: 29 (default), 30. The default value is 29,
except for Cross-Cloud Interconnect connections that use an InterconnectRemoteLocation with a
constraints.subnetLengthRange.min equal to 30. For example, connections that use an Azure
remote location fall into this category. In these cases, the default value is 30, and
requesting 29 returns an error. Where both 29 and 30 are allowed, 29 is preferred, because it
gives Google Cloud Support more debugging visibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#subnet_length GoogleComputeInterconnectAttachment#subnet_length}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeInterconnectAttachmentTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts">GoogleComputeInterconnectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#timeouts GoogleComputeInterconnectAttachment#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of InterconnectAttachment you wish to create. Defaults to DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER", "L2_DEDICATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#type GoogleComputeInterconnectAttachment#type}

---

##### `VlanTag8021Q`<sup>Optional</sup> <a name="VlanTag8021Q" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentConfig.property.vlanTag8021Q"></a>

```go
VlanTag8021Q *f64
```

- *Type:* *f64

The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When using PARTNER type this will be managed upstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#vlan_tag8021q GoogleComputeInterconnectAttachment#vlan_tag8021q}

---

### GoogleComputeInterconnectAttachmentL2Forwarding <a name="GoogleComputeInterconnectAttachmentL2Forwarding" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

&googlecomputeinterconnectattachment.GoogleComputeInterconnectAttachmentL2Forwarding {
	ApplianceMappings: interface{},
	DefaultApplianceIpAddress: *string,
	GeneveHeader: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader,
	Network: *string,
	TunnelEndpointIpAddress: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.applianceMappings">ApplianceMappings</a></code> | <code>interface{}</code> | appliance_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.defaultApplianceIpAddress">DefaultApplianceIpAddress</a></code> | <code>*string</code> | The default appliance IP address. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.geneveHeader">GeneveHeader</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a></code> | geneve_header block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.network">Network</a></code> | <code>*string</code> | URL of the network to which this attachment belongs. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.tunnelEndpointIpAddress">TunnelEndpointIpAddress</a></code> | <code>*string</code> | The tunnel endpoint IP address. |

---

##### `ApplianceMappings`<sup>Optional</sup> <a name="ApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.applianceMappings"></a>

```go
ApplianceMappings interface{}
```

- *Type:* interface{}

appliance_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#appliance_mappings GoogleComputeInterconnectAttachment#appliance_mappings}

---

##### `DefaultApplianceIpAddress`<sup>Optional</sup> <a name="DefaultApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.defaultApplianceIpAddress"></a>

```go
DefaultApplianceIpAddress *string
```

- *Type:* *string

The default appliance IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#default_appliance_ip_address GoogleComputeInterconnectAttachment#default_appliance_ip_address}

---

##### `GeneveHeader`<sup>Optional</sup> <a name="GeneveHeader" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.geneveHeader"></a>

```go
GeneveHeader GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

geneve_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#geneve_header GoogleComputeInterconnectAttachment#geneve_header}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.network"></a>

```go
Network *string
```

- *Type:* *string

URL of the network to which this attachment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#network GoogleComputeInterconnectAttachment#network}

---

##### `TunnelEndpointIpAddress`<sup>Optional</sup> <a name="TunnelEndpointIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding.property.tunnelEndpointIpAddress"></a>

```go
TunnelEndpointIpAddress *string
```

- *Type:* *string

The tunnel endpoint IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#tunnel_endpoint_ip_address GoogleComputeInterconnectAttachment#tunnel_endpoint_ip_address}

---

### GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings <a name="GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

&googlecomputeinterconnectattachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings {
	ApplianceIpAddress: *string,
	InnerVlanToApplianceMappings: interface{},
	Name: *string,
	VlanId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.applianceIpAddress">ApplianceIpAddress</a></code> | <code>*string</code> | The appliance IP address. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.innerVlanToApplianceMappings">InnerVlanToApplianceMappings</a></code> | <code>interface{}</code> | inner_vlan_to_appliance_mappings block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.name">Name</a></code> | <code>*string</code> | The name of this appliance mapping rule. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.vlanId">VlanId</a></code> | <code>*string</code> | The VLAN tag. |

---

##### `ApplianceIpAddress`<sup>Optional</sup> <a name="ApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.applianceIpAddress"></a>

```go
ApplianceIpAddress *string
```

- *Type:* *string

The appliance IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#appliance_ip_address GoogleComputeInterconnectAttachment#appliance_ip_address}

---

##### `InnerVlanToApplianceMappings`<sup>Optional</sup> <a name="InnerVlanToApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.innerVlanToApplianceMappings"></a>

```go
InnerVlanToApplianceMappings interface{}
```

- *Type:* interface{}

inner_vlan_to_appliance_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#inner_vlan_to_appliance_mappings GoogleComputeInterconnectAttachment#inner_vlan_to_appliance_mappings}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this appliance mapping rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#name GoogleComputeInterconnectAttachment#name}

---

##### `VlanId`<sup>Optional</sup> <a name="VlanId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappings.property.vlanId"></a>

```go
VlanId *string
```

- *Type:* *string

The VLAN tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#vlan_id GoogleComputeInterconnectAttachment#vlan_id}

---

### GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings <a name="GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

&googlecomputeinterconnectattachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings {
	InnerApplianceIpAddress: *string,
	InnerVlanTags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerApplianceIpAddress">InnerApplianceIpAddress</a></code> | <code>*string</code> | The inner appliance IP address. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerVlanTags">InnerVlanTags</a></code> | <code>*[]*string</code> | List of inner VLAN tags. |

---

##### `InnerApplianceIpAddress`<sup>Optional</sup> <a name="InnerApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerApplianceIpAddress"></a>

```go
InnerApplianceIpAddress *string
```

- *Type:* *string

The inner appliance IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#inner_appliance_ip_address GoogleComputeInterconnectAttachment#inner_appliance_ip_address}

---

##### `InnerVlanTags`<sup>Optional</sup> <a name="InnerVlanTags" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappings.property.innerVlanTags"></a>

```go
InnerVlanTags *[]*string
```

- *Type:* *[]*string

List of inner VLAN tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#inner_vlan_tags GoogleComputeInterconnectAttachment#inner_vlan_tags}

---

### GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader <a name="GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

&googlecomputeinterconnectattachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader {
	Vni: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader.property.vni">Vni</a></code> | <code>*f64</code> | VNI is a 24-bit unique virtual network identifier. |

---

##### `Vni`<sup>Optional</sup> <a name="Vni" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader.property.vni"></a>

```go
Vni *f64
```

- *Type:* *f64

VNI is a 24-bit unique virtual network identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#vni GoogleComputeInterconnectAttachment#vni}

---

### GoogleComputeInterconnectAttachmentParams <a name="GoogleComputeInterconnectAttachmentParams" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

&googlecomputeinterconnectattachment.GoogleComputeInterconnectAttachmentParams {
	ResourceManagerTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | Resource manager tags to be bound to the interconnect attachment. |

---

##### `ResourceManagerTags`<sup>Optional</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams.property.resourceManagerTags"></a>

```go
ResourceManagerTags *map[string]*string
```

- *Type:* *map[string]*string

Resource manager tags to be bound to the interconnect attachment.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#resource_manager_tags GoogleComputeInterconnectAttachment#resource_manager_tags}

---

### GoogleComputeInterconnectAttachmentPrivateInterconnectInfo <a name="GoogleComputeInterconnectAttachmentPrivateInterconnectInfo" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

&googlecomputeinterconnectattachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo {

}
```


### GoogleComputeInterconnectAttachmentTimeouts <a name="GoogleComputeInterconnectAttachmentTimeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

&googlecomputeinterconnectattachment.GoogleComputeInterconnectAttachmentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#create GoogleComputeInterconnectAttachment#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#delete GoogleComputeInterconnectAttachment#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#update GoogleComputeInterconnectAttachment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#create GoogleComputeInterconnectAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#delete GoogleComputeInterconnectAttachment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment#update GoogleComputeInterconnectAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList <a name="GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.NewGoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference <a name="GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.NewGoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerApplianceIpAddress">ResetInnerApplianceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerVlanTags">ResetInnerVlanTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInnerApplianceIpAddress` <a name="ResetInnerApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerApplianceIpAddress"></a>

```go
func ResetInnerApplianceIpAddress()
```

##### `ResetInnerVlanTags` <a name="ResetInnerVlanTags" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.resetInnerVlanTags"></a>

```go
func ResetInnerVlanTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddressInput">InnerApplianceIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTagsInput">InnerVlanTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddress">InnerApplianceIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTags">InnerVlanTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InnerApplianceIpAddressInput`<sup>Optional</sup> <a name="InnerApplianceIpAddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddressInput"></a>

```go
func InnerApplianceIpAddressInput() *string
```

- *Type:* *string

---

##### `InnerVlanTagsInput`<sup>Optional</sup> <a name="InnerVlanTagsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTagsInput"></a>

```go
func InnerVlanTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InnerApplianceIpAddress`<sup>Required</sup> <a name="InnerApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerApplianceIpAddress"></a>

```go
func InnerApplianceIpAddress() *string
```

- *Type:* *string

---

##### `InnerVlanTags`<sup>Required</sup> <a name="InnerVlanTags" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.innerVlanTags"></a>

```go
func InnerVlanTags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList <a name="GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.NewGoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference <a name="GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.NewGoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.putInnerVlanToApplianceMappings">PutInnerVlanToApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetApplianceIpAddress">ResetApplianceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetInnerVlanToApplianceMappings">ResetInnerVlanToApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetVlanId">ResetVlanId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInnerVlanToApplianceMappings` <a name="PutInnerVlanToApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.putInnerVlanToApplianceMappings"></a>

```go
func PutInnerVlanToApplianceMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.putInnerVlanToApplianceMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplianceIpAddress` <a name="ResetApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetApplianceIpAddress"></a>

```go
func ResetApplianceIpAddress()
```

##### `ResetInnerVlanToApplianceMappings` <a name="ResetInnerVlanToApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetInnerVlanToApplianceMappings"></a>

```go
func ResetInnerVlanToApplianceMappings()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetVlanId` <a name="ResetVlanId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.resetVlanId"></a>

```go
func ResetVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappings">InnerVlanToApplianceMappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddressInput">ApplianceIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappingsInput">InnerVlanToApplianceMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanIdInput">VlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddress">ApplianceIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanId">VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InnerVlanToApplianceMappings`<sup>Required</sup> <a name="InnerVlanToApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappings"></a>

```go
func InnerVlanToApplianceMappings() GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsInnerVlanToApplianceMappingsList</a>

---

##### `ApplianceIpAddressInput`<sup>Optional</sup> <a name="ApplianceIpAddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddressInput"></a>

```go
func ApplianceIpAddressInput() *string
```

- *Type:* *string

---

##### `InnerVlanToApplianceMappingsInput`<sup>Optional</sup> <a name="InnerVlanToApplianceMappingsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.innerVlanToApplianceMappingsInput"></a>

```go
func InnerVlanToApplianceMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VlanIdInput`<sup>Optional</sup> <a name="VlanIdInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanIdInput"></a>

```go
func VlanIdInput() *string
```

- *Type:* *string

---

##### `ApplianceIpAddress`<sup>Required</sup> <a name="ApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.applianceIpAddress"></a>

```go
func ApplianceIpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `VlanId`<sup>Required</sup> <a name="VlanId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.vlanId"></a>

```go
func VlanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference <a name="GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.NewGoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resetVni">ResetVni</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVni` <a name="ResetVni" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.resetVni"></a>

```go
func ResetVni()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vniInput">VniInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vni">Vni</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VniInput`<sup>Optional</sup> <a name="VniInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vniInput"></a>

```go
func VniInput() *f64
```

- *Type:* *f64

---

##### `Vni`<sup>Required</sup> <a name="Vni" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.vni"></a>

```go
func Vni() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

---


### GoogleComputeInterconnectAttachmentL2ForwardingOutputReference <a name="GoogleComputeInterconnectAttachmentL2ForwardingOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.NewGoogleComputeInterconnectAttachmentL2ForwardingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInterconnectAttachmentL2ForwardingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.putApplianceMappings">PutApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.putGeneveHeader">PutGeneveHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetApplianceMappings">ResetApplianceMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetDefaultApplianceIpAddress">ResetDefaultApplianceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetGeneveHeader">ResetGeneveHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetTunnelEndpointIpAddress">ResetTunnelEndpointIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplianceMappings` <a name="PutApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.putApplianceMappings"></a>

```go
func PutApplianceMappings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.putApplianceMappings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGeneveHeader` <a name="PutGeneveHeader" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.putGeneveHeader"></a>

```go
func PutGeneveHeader(value GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.putGeneveHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

---

##### `ResetApplianceMappings` <a name="ResetApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetApplianceMappings"></a>

```go
func ResetApplianceMappings()
```

##### `ResetDefaultApplianceIpAddress` <a name="ResetDefaultApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetDefaultApplianceIpAddress"></a>

```go
func ResetDefaultApplianceIpAddress()
```

##### `ResetGeneveHeader` <a name="ResetGeneveHeader" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetGeneveHeader"></a>

```go
func ResetGeneveHeader()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetTunnelEndpointIpAddress` <a name="ResetTunnelEndpointIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.resetTunnelEndpointIpAddress"></a>

```go
func ResetTunnelEndpointIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappings">ApplianceMappings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeader">GeneveHeader</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappingsInput">ApplianceMappingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddressInput">DefaultApplianceIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeaderInput">GeneveHeaderInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddressInput">TunnelEndpointIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddress">DefaultApplianceIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddress">TunnelEndpointIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplianceMappings`<sup>Required</sup> <a name="ApplianceMappings" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappings"></a>

```go
func ApplianceMappings() GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList">GoogleComputeInterconnectAttachmentL2ForwardingApplianceMappingsList</a>

---

##### `GeneveHeader`<sup>Required</sup> <a name="GeneveHeader" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeader"></a>

```go
func GeneveHeader() GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeaderOutputReference</a>

---

##### `ApplianceMappingsInput`<sup>Optional</sup> <a name="ApplianceMappingsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.applianceMappingsInput"></a>

```go
func ApplianceMappingsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultApplianceIpAddressInput`<sup>Optional</sup> <a name="DefaultApplianceIpAddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddressInput"></a>

```go
func DefaultApplianceIpAddressInput() *string
```

- *Type:* *string

---

##### `GeneveHeaderInput`<sup>Optional</sup> <a name="GeneveHeaderInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.geneveHeaderInput"></a>

```go
func GeneveHeaderInput() GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader">GoogleComputeInterconnectAttachmentL2ForwardingGeneveHeader</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `TunnelEndpointIpAddressInput`<sup>Optional</sup> <a name="TunnelEndpointIpAddressInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddressInput"></a>

```go
func TunnelEndpointIpAddressInput() *string
```

- *Type:* *string

---

##### `DefaultApplianceIpAddress`<sup>Required</sup> <a name="DefaultApplianceIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.defaultApplianceIpAddress"></a>

```go
func DefaultApplianceIpAddress() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `TunnelEndpointIpAddress`<sup>Required</sup> <a name="TunnelEndpointIpAddress" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.tunnelEndpointIpAddress"></a>

```go
func TunnelEndpointIpAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2ForwardingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentL2Forwarding
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentL2Forwarding">GoogleComputeInterconnectAttachmentL2Forwarding</a>

---


### GoogleComputeInterconnectAttachmentParamsOutputReference <a name="GoogleComputeInterconnectAttachmentParamsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.NewGoogleComputeInterconnectAttachmentParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInterconnectAttachmentParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.resetResourceManagerTags">ResetResourceManagerTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceManagerTags` <a name="ResetResourceManagerTags" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.resetResourceManagerTags"></a>

```go
func ResetResourceManagerTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTagsInput">ResourceManagerTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceManagerTagsInput`<sup>Optional</sup> <a name="ResourceManagerTagsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTagsInput"></a>

```go
func ResourceManagerTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentParams
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentParams">GoogleComputeInterconnectAttachmentParams</a>

---


### GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList <a name="GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.NewGoogleComputeInterconnectAttachmentPrivateInterconnectInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference <a name="GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.NewGoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.tag8021Q">Tag8021Q</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo">GoogleComputeInterconnectAttachmentPrivateInterconnectInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tag8021Q`<sup>Required</sup> <a name="Tag8021Q" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.tag8021Q"></a>

```go
func Tag8021Q() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentPrivateInterconnectInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentPrivateInterconnectInfo">GoogleComputeInterconnectAttachmentPrivateInterconnectInfo</a>

---


### GoogleComputeInterconnectAttachmentTimeoutsOutputReference <a name="GoogleComputeInterconnectAttachmentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachment"

googlecomputeinterconnectattachment.NewGoogleComputeInterconnectAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInterconnectAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachment.GoogleComputeInterconnectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



