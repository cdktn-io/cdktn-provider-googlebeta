# `googleComputeInterconnectAttachmentGroup` Submodule <a name="`googleComputeInterconnectAttachmentGroup` Submodule" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeInterconnectAttachmentGroup <a name="GoogleComputeInterconnectAttachmentGroup" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group google_compute_interconnect_attachment_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroup(scope Construct, id *string, config GoogleComputeInterconnectAttachmentGroupConfig) GoogleComputeInterconnectAttachmentGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig">GoogleComputeInterconnectAttachmentGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig">GoogleComputeInterconnectAttachmentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putAttachments">PutAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putIntent">PutIntent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetAttachments">ResetAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetInterconnectGroup">ResetInterconnectGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttachments` <a name="PutAttachments" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putAttachments"></a>

```go
func PutAttachments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putAttachments.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIntent` <a name="PutIntent" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putIntent"></a>

```go
func PutIntent(value GoogleComputeInterconnectAttachmentGroupIntent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putIntent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeInterconnectAttachmentGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts">GoogleComputeInterconnectAttachmentGroupTimeouts</a>

---

##### `ResetAttachments` <a name="ResetAttachments" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetAttachments"></a>

```go
func ResetAttachments()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetInterconnectGroup` <a name="ResetInterconnectGroup" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetInterconnectGroup"></a>

```go
func ResetInterconnectGroup()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeInterconnectAttachmentGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleComputeInterconnectAttachmentGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeInterconnectAttachmentGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeInterconnectAttachmentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeInterconnectAttachmentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.attachments">Attachments</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList">GoogleComputeInterconnectAttachmentGroupAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.configured">Configured</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList">GoogleComputeInterconnectAttachmentGroupConfiguredList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.intent">Intent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference">GoogleComputeInterconnectAttachmentGroupIntentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.logicalStructure">LogicalStructure</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList">GoogleComputeInterconnectAttachmentGroupLogicalStructureList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference">GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.attachmentsInput">AttachmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.intentInput">IntentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.interconnectGroupInput">InterconnectGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.interconnectGroup">InterconnectGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.attachments"></a>

```go
func Attachments() GoogleComputeInterconnectAttachmentGroupAttachmentsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList">GoogleComputeInterconnectAttachmentGroupAttachmentsList</a>

---

##### `Configured`<sup>Required</sup> <a name="Configured" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.configured"></a>

```go
func Configured() GoogleComputeInterconnectAttachmentGroupConfiguredList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList">GoogleComputeInterconnectAttachmentGroupConfiguredList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.intent"></a>

```go
func Intent() GoogleComputeInterconnectAttachmentGroupIntentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference">GoogleComputeInterconnectAttachmentGroupIntentOutputReference</a>

---

##### `LogicalStructure`<sup>Required</sup> <a name="LogicalStructure" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.logicalStructure"></a>

```go
func LogicalStructure() GoogleComputeInterconnectAttachmentGroupLogicalStructureList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList">GoogleComputeInterconnectAttachmentGroupLogicalStructureList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.timeouts"></a>

```go
func Timeouts() GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference">GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference</a>

---

##### `AttachmentsInput`<sup>Optional</sup> <a name="AttachmentsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.attachmentsInput"></a>

```go
func AttachmentsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntentInput`<sup>Optional</sup> <a name="IntentInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.intentInput"></a>

```go
func IntentInput() GoogleComputeInterconnectAttachmentGroupIntent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a>

---

##### `InterconnectGroupInput`<sup>Optional</sup> <a name="InterconnectGroupInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.interconnectGroupInput"></a>

```go
func InterconnectGroupInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterconnectGroup`<sup>Required</sup> <a name="InterconnectGroup" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.interconnectGroup"></a>

```go
func InterconnectGroup() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeInterconnectAttachmentGroupAttachments <a name="GoogleComputeInterconnectAttachmentGroupAttachments" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

&googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroupAttachments {
	Name: *string,
	Attachment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#name GoogleComputeInterconnectAttachmentGroup#name}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments.property.attachment">Attachment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#attachment GoogleComputeInterconnectAttachmentGroup#attachment}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#name GoogleComputeInterconnectAttachmentGroup#name}.

---

##### `Attachment`<sup>Optional</sup> <a name="Attachment" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachments.property.attachment"></a>

```go
Attachment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#attachment GoogleComputeInterconnectAttachmentGroup#attachment}.

---

### GoogleComputeInterconnectAttachmentGroupConfig <a name="GoogleComputeInterconnectAttachmentGroupConfig" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

&googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Intent: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent,
	Name: *string,
	Attachments: interface{},
	DeletionPolicy: *string,
	Description: *string,
	Id: *string,
	InterconnectGroup: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.intent">Intent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a></code> | intent block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.attachments">Attachments</a></code> | <code>interface{}</code> | attachments block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#id GoogleComputeInterconnectAttachmentGroup#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.interconnectGroup">InterconnectGroup</a></code> | <code>*string</code> | The URL of an InterconnectGroup that groups these Attachments' Interconnects. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#project GoogleComputeInterconnectAttachmentGroup#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts">GoogleComputeInterconnectAttachmentGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Intent`<sup>Required</sup> <a name="Intent" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.intent"></a>

```go
Intent GoogleComputeInterconnectAttachmentGroupIntent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a>

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#intent GoogleComputeInterconnectAttachmentGroup#intent}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#name GoogleComputeInterconnectAttachmentGroup#name}

---

##### `Attachments`<sup>Optional</sup> <a name="Attachments" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.attachments"></a>

```go
Attachments interface{}
```

- *Type:* interface{}

attachments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#attachments GoogleComputeInterconnectAttachmentGroup#attachments}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#deletion_policy GoogleComputeInterconnectAttachmentGroup#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#description GoogleComputeInterconnectAttachmentGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#id GoogleComputeInterconnectAttachmentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterconnectGroup`<sup>Optional</sup> <a name="InterconnectGroup" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.interconnectGroup"></a>

```go
InterconnectGroup *string
```

- *Type:* *string

The URL of an InterconnectGroup that groups these Attachments' Interconnects.

Customers do not need to set this unless directed by
Google Support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#interconnect_group GoogleComputeInterconnectAttachmentGroup#interconnect_group}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#project GoogleComputeInterconnectAttachmentGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeInterconnectAttachmentGroupTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts">GoogleComputeInterconnectAttachmentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#timeouts GoogleComputeInterconnectAttachmentGroup#timeouts}

---

### GoogleComputeInterconnectAttachmentGroupConfigured <a name="GoogleComputeInterconnectAttachmentGroupConfigured" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfigured"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfigured.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

&googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroupConfigured {

}
```


### GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla <a name="GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

&googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla {

}
```


### GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers <a name="GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

&googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers {

}
```


### GoogleComputeInterconnectAttachmentGroupIntent <a name="GoogleComputeInterconnectAttachmentGroupIntent" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

&googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroupIntent {
	AvailabilitySla: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent.property.availabilitySla">AvailabilitySla</a></code> | <code>*string</code> | Which SLA the user intends this group to support. Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"]. |

---

##### `AvailabilitySla`<sup>Optional</sup> <a name="AvailabilitySla" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent.property.availabilitySla"></a>

```go
AvailabilitySla *string
```

- *Type:* *string

Which SLA the user intends this group to support. Possible values: ["PRODUCTION_NON_CRITICAL", "PRODUCTION_CRITICAL", "NO_SLA", "AVAILABILITY_SLA_UNSPECIFIED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#availability_sla GoogleComputeInterconnectAttachmentGroup#availability_sla}

---

### GoogleComputeInterconnectAttachmentGroupLogicalStructure <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructure" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

&googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroupLogicalStructure {

}
```


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

&googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions {

}
```


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

&googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros {

}
```


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

&googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities {

}
```


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

&googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones {

}
```


### GoogleComputeInterconnectAttachmentGroupTimeouts <a name="GoogleComputeInterconnectAttachmentGroupTimeouts" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

&googlecomputeinterconnectattachmentgroup.GoogleComputeInterconnectAttachmentGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#create GoogleComputeInterconnectAttachmentGroup#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#delete GoogleComputeInterconnectAttachmentGroup#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#update GoogleComputeInterconnectAttachmentGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#create GoogleComputeInterconnectAttachmentGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#delete GoogleComputeInterconnectAttachmentGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_compute_interconnect_attachment_group#update GoogleComputeInterconnectAttachmentGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeInterconnectAttachmentGroupAttachmentsList <a name="GoogleComputeInterconnectAttachmentGroupAttachmentsList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupAttachmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectAttachmentGroupAttachmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference <a name="GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.resetAttachment">ResetAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttachment` <a name="ResetAttachment" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.resetAttachment"></a>

```go
func ResetAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachmentInput">AttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachment">Attachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentInput`<sup>Optional</sup> <a name="AttachmentInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachmentInput"></a>

```go
func AttachmentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Attachment`<sup>Required</sup> <a name="Attachment" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.attachment"></a>

```go
func Attachment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList <a name="GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference <a name="GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.attachments">Attachments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.blockerType">BlockerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.documentationLink">DocumentationLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.explanation">Explanation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.metros">Metros</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.attachments"></a>

```go
func Attachments() *[]*string
```

- *Type:* *[]*string

---

##### `BlockerType`<sup>Required</sup> <a name="BlockerType" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.blockerType"></a>

```go
func BlockerType() *string
```

- *Type:* *string

---

##### `DocumentationLink`<sup>Required</sup> <a name="DocumentationLink" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.documentationLink"></a>

```go
func DocumentationLink() *string
```

- *Type:* *string

---

##### `Explanation`<sup>Required</sup> <a name="Explanation" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.explanation"></a>

```go
func Explanation() *string
```

- *Type:* *string

---

##### `Metros`<sup>Required</sup> <a name="Metros" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.metros"></a>

```go
func Metros() *[]*string
```

- *Type:* *[]*string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockers</a>

---


### GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList <a name="GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference <a name="GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.effectiveSla">EffectiveSla</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.intendedSlaBlockers">IntendedSlaBlockers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveSla`<sup>Required</sup> <a name="EffectiveSla" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.effectiveSla"></a>

```go
func EffectiveSla() *string
```

- *Type:* *string

---

##### `IntendedSlaBlockers`<sup>Required</sup> <a name="IntendedSlaBlockers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.intendedSlaBlockers"></a>

```go
func IntendedSlaBlockers() GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaIntendedSlaBlockersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySla</a>

---


### GoogleComputeInterconnectAttachmentGroupConfiguredList <a name="GoogleComputeInterconnectAttachmentGroupConfiguredList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupConfiguredList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectAttachmentGroupConfiguredList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference <a name="GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupConfiguredOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.availabilitySla">AvailabilitySla</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfigured">GoogleComputeInterconnectAttachmentGroupConfigured</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilitySla`<sup>Required</sup> <a name="AvailabilitySla" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.availabilitySla"></a>

```go
func AvailabilitySla() GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList">GoogleComputeInterconnectAttachmentGroupConfiguredAvailabilitySlaList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfiguredOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentGroupConfigured
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupConfigured">GoogleComputeInterconnectAttachmentGroupConfigured</a>

---


### GoogleComputeInterconnectAttachmentGroupIntentOutputReference <a name="GoogleComputeInterconnectAttachmentGroupIntentOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupIntentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInterconnectAttachmentGroupIntentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.resetAvailabilitySla">ResetAvailabilitySla</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilitySla` <a name="ResetAvailabilitySla" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.resetAvailabilitySla"></a>

```go
func ResetAvailabilitySla()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySlaInput">AvailabilitySlaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySla">AvailabilitySla</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilitySlaInput`<sup>Optional</sup> <a name="AvailabilitySlaInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySlaInput"></a>

```go
func AvailabilitySlaInput() *string
```

- *Type:* *string

---

##### `AvailabilitySla`<sup>Required</sup> <a name="AvailabilitySla" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.availabilitySla"></a>

```go
func AvailabilitySla() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentGroupIntent
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupIntent">GoogleComputeInterconnectAttachmentGroupIntent</a>

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureList <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupLogicalStructureList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectAttachmentGroupLogicalStructureList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.regions">Regions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructure">GoogleComputeInterconnectAttachmentGroupLogicalStructure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.regions"></a>

```go
func Regions() GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentGroupLogicalStructure
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructure">GoogleComputeInterconnectAttachmentGroupLogicalStructure</a>

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.facility">Facility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.zones">Zones</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Facility`<sup>Required</sup> <a name="Facility" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.facility"></a>

```go
func Facility() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.zones"></a>

```go
func Zones() GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilities</a>

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.attachment">Attachment</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.attachments">Attachments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attachment`<sup>Required</sup> <a name="Attachment" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.attachment"></a>

```go
func Attachment() *[]*string
```

- *Type:* *[]*string

---

##### `Attachments`<sup>Required</sup> <a name="Attachments" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.attachments"></a>

```go
func Attachments() *[]*string
```

- *Type:* *[]*string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZonesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesZones</a>

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.get"></a>

```go
func Get(index *f64) GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.facilities">Facilities</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.metro">Metro</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Facilities`<sup>Required</sup> <a name="Facilities" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.facilities"></a>

```go
func Facilities() GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosFacilitiesList</a>

---

##### `Metro`<sup>Required</sup> <a name="Metro" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.metro"></a>

```go
func Metro() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetros</a>

---


### GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference <a name="GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.metros">Metros</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metros`<sup>Required</sup> <a name="Metros" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.metros"></a>

```go
func Metros() GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsMetrosList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions">GoogleComputeInterconnectAttachmentGroupLogicalStructureRegions</a>

---


### GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference <a name="GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlecomputeinterconnectattachmentgroup"

googlecomputeinterconnectattachmentgroup.NewGoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleComputeInterconnectAttachmentGroup.GoogleComputeInterconnectAttachmentGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



