# `googleCloudRunV2Instance` Submodule <a name="`googleCloudRunV2Instance` Submodule" id="@cdktn/provider-google-beta.googleCloudRunV2Instance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudRunV2Instance <a name="GoogleCloudRunV2Instance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance google_cloud_run_v2_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2Instance(scope Construct, id *string, config GoogleCloudRunV2InstanceConfig) GoogleCloudRunV2Instance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig">GoogleCloudRunV2InstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig">GoogleCloudRunV2InstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClient">ResetClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClientVersion">ResetClientVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDefaultUriDisabled">ResetDefaultUriDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyRevocationAction">ResetEncryptionKeyRevocationAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyShutdownDuration">ResetEncryptionKeyShutdownDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetIngress">ResetIngress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetInvokerIamDisabled">ResetInvokerIamDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLaunchStage">ResetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetRestartPolicy">ResetRestartPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetVolumes">ResetVolumes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainers` <a name="PutContainers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers"></a>

```go
func PutContainers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putContainers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCloudRunV2InstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes"></a>

```go
func PutVolumes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.putVolumes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetClient` <a name="ResetClient" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClient"></a>

```go
func ResetClient()
```

##### `ResetClientVersion` <a name="ResetClientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetClientVersion"></a>

```go
func ResetClientVersion()
```

##### `ResetDefaultUriDisabled` <a name="ResetDefaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDefaultUriDisabled"></a>

```go
func ResetDefaultUriDisabled()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKey"></a>

```go
func ResetEncryptionKey()
```

##### `ResetEncryptionKeyRevocationAction` <a name="ResetEncryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyRevocationAction"></a>

```go
func ResetEncryptionKeyRevocationAction()
```

##### `ResetEncryptionKeyShutdownDuration` <a name="ResetEncryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetEncryptionKeyShutdownDuration"></a>

```go
func ResetEncryptionKeyShutdownDuration()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetId"></a>

```go
func ResetId()
```

##### `ResetIngress` <a name="ResetIngress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetIngress"></a>

```go
func ResetIngress()
```

##### `ResetInvokerIamDisabled` <a name="ResetInvokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetInvokerIamDisabled"></a>

```go
func ResetInvokerIamDisabled()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLaunchStage` <a name="ResetLaunchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetLaunchStage"></a>

```go
func ResetLaunchStage()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRestartPolicy` <a name="ResetRestartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetRestartPolicy"></a>

```go
func ResetRestartPolicy()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.resetVolumes"></a>

```go
func ResetVolumes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudRunV2Instance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.GoogleCloudRunV2Instance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.GoogleCloudRunV2Instance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.GoogleCloudRunV2Instance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.GoogleCloudRunV2Instance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleCloudRunV2Instance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleCloudRunV2Instance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleCloudRunV2Instance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudRunV2Instance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList">GoogleCloudRunV2InstanceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containers">Containers</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList">GoogleCloudRunV2InstanceContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containerStatuses">ContainerStatuses</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList">GoogleCloudRunV2InstanceContainerStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.generation">Generation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lastModifier">LastModifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.logUri">LogUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.observedGeneration">ObservedGeneration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.reconciling">Reconciling</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.satisfiesPzs">SatisfiesPzs</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terminalCondition">TerminalCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList">GoogleCloudRunV2InstanceTerminalConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference">GoogleCloudRunV2InstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.urls">Urls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumes">Volumes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList">GoogleCloudRunV2InstanceVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientInput">ClientInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersionInput">ClientVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containersInput">ContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabledInput">DefaultUriDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationActionInput">EncryptionKeyRevocationActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDurationInput">EncryptionKeyShutdownDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingressInput">IngressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabledInput">InvokerIamDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStageInput">LaunchStageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicyInput">RestartPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumesInput">VolumesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.client">Client</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersion">ClientVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabled">DefaultUriDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationAction">EncryptionKeyRevocationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDuration">EncryptionKeyShutdownDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingress">Ingress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabled">InvokerIamDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStage">LaunchStage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicy">RestartPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.conditions"></a>

```go
func Conditions() GoogleCloudRunV2InstanceConditionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList">GoogleCloudRunV2InstanceConditionsList</a>

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containers"></a>

```go
func Containers() GoogleCloudRunV2InstanceContainersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList">GoogleCloudRunV2InstanceContainersList</a>

---

##### `ContainerStatuses`<sup>Required</sup> <a name="ContainerStatuses" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containerStatuses"></a>

```go
func ContainerStatuses() GoogleCloudRunV2InstanceContainerStatusesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList">GoogleCloudRunV2InstanceContainerStatusesList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.generation"></a>

```go
func Generation() *string
```

- *Type:* *string

---

##### `LastModifier`<sup>Required</sup> <a name="LastModifier" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.lastModifier"></a>

```go
func LastModifier() *string
```

- *Type:* *string

---

##### `LogUri`<sup>Required</sup> <a name="LogUri" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.logUri"></a>

```go
func LogUri() *string
```

- *Type:* *string

---

##### `ObservedGeneration`<sup>Required</sup> <a name="ObservedGeneration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.observedGeneration"></a>

```go
func ObservedGeneration() *string
```

- *Type:* *string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SatisfiesPzs`<sup>Required</sup> <a name="SatisfiesPzs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.satisfiesPzs"></a>

```go
func SatisfiesPzs() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `TerminalCondition`<sup>Required</sup> <a name="TerminalCondition" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terminalCondition"></a>

```go
func TerminalCondition() GoogleCloudRunV2InstanceTerminalConditionList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList">GoogleCloudRunV2InstanceTerminalConditionList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeouts"></a>

```go
func Timeouts() GoogleCloudRunV2InstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference">GoogleCloudRunV2InstanceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Urls`<sup>Required</sup> <a name="Urls" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.urls"></a>

```go
func Urls() *[]*string
```

- *Type:* *[]*string

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumes"></a>

```go
func Volumes() GoogleCloudRunV2InstanceVolumesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList">GoogleCloudRunV2InstanceVolumesList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ClientInput`<sup>Optional</sup> <a name="ClientInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientInput"></a>

```go
func ClientInput() *string
```

- *Type:* *string

---

##### `ClientVersionInput`<sup>Optional</sup> <a name="ClientVersionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersionInput"></a>

```go
func ClientVersionInput() *string
```

- *Type:* *string

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.containersInput"></a>

```go
func ContainersInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultUriDisabledInput`<sup>Optional</sup> <a name="DefaultUriDisabledInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabledInput"></a>

```go
func DefaultUriDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() *string
```

- *Type:* *string

---

##### `EncryptionKeyRevocationActionInput`<sup>Optional</sup> <a name="EncryptionKeyRevocationActionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationActionInput"></a>

```go
func EncryptionKeyRevocationActionInput() *string
```

- *Type:* *string

---

##### `EncryptionKeyShutdownDurationInput`<sup>Optional</sup> <a name="EncryptionKeyShutdownDurationInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDurationInput"></a>

```go
func EncryptionKeyShutdownDurationInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressInput`<sup>Optional</sup> <a name="IngressInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingressInput"></a>

```go
func IngressInput() *string
```

- *Type:* *string

---

##### `InvokerIamDisabledInput`<sup>Optional</sup> <a name="InvokerIamDisabledInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabledInput"></a>

```go
func InvokerIamDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LaunchStageInput`<sup>Optional</sup> <a name="LaunchStageInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStageInput"></a>

```go
func LaunchStageInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RestartPolicyInput`<sup>Optional</sup> <a name="RestartPolicyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicyInput"></a>

```go
func RestartPolicyInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.volumesInput"></a>

```go
func VolumesInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Client`<sup>Required</sup> <a name="Client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.client"></a>

```go
func Client() *string
```

- *Type:* *string

---

##### `ClientVersion`<sup>Required</sup> <a name="ClientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.clientVersion"></a>

```go
func ClientVersion() *string
```

- *Type:* *string

---

##### `DefaultUriDisabled`<sup>Required</sup> <a name="DefaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.defaultUriDisabled"></a>

```go
func DefaultUriDisabled() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKey"></a>

```go
func EncryptionKey() *string
```

- *Type:* *string

---

##### `EncryptionKeyRevocationAction`<sup>Required</sup> <a name="EncryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyRevocationAction"></a>

```go
func EncryptionKeyRevocationAction() *string
```

- *Type:* *string

---

##### `EncryptionKeyShutdownDuration`<sup>Required</sup> <a name="EncryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.encryptionKeyShutdownDuration"></a>

```go
func EncryptionKeyShutdownDuration() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ingress`<sup>Required</sup> <a name="Ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.ingress"></a>

```go
func Ingress() *string
```

- *Type:* *string

---

##### `InvokerIamDisabled`<sup>Required</sup> <a name="InvokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.invokerIamDisabled"></a>

```go
func InvokerIamDisabled() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LaunchStage`<sup>Required</sup> <a name="LaunchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.launchStage"></a>

```go
func LaunchStage() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RestartPolicy`<sup>Required</sup> <a name="RestartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.restartPolicy"></a>

```go
func RestartPolicy() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2Instance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudRunV2InstanceConditions <a name="GoogleCloudRunV2InstanceConditions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceConditions {

}
```


### GoogleCloudRunV2InstanceConfig <a name="GoogleCloudRunV2InstanceConfig" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Containers: interface{},
	Location: *string,
	Name: *string,
	Annotations: *map[string]*string,
	Client: *string,
	ClientVersion: *string,
	DefaultUriDisabled: interface{},
	DeletionPolicy: *string,
	EncryptionKey: *string,
	EncryptionKeyRevocationAction: *string,
	EncryptionKeyShutdownDuration: *string,
	Id: *string,
	Ingress: *string,
	InvokerIamDisabled: interface{},
	Labels: *map[string]*string,
	LaunchStage: *string,
	Project: *string,
	RestartPolicy: *string,
	ServiceAccount: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts,
	Volumes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.containers">Containers</a></code> | <code>interface{}</code> | containers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.location">Location</a></code> | <code>*string</code> | The location of the cloud run instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.name">Name</a></code> | <code>*string</code> | Name of the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.client">Client</a></code> | <code>*string</code> | Arbitrary identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.clientVersion">ClientVersion</a></code> | <code>*string</code> | Arbitrary version identifier for the API client. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.defaultUriDisabled">DefaultUriDisabled</a></code> | <code>interface{}</code> | Disables public resolution of the default URI of this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKey">EncryptionKey</a></code> | <code>*string</code> | A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyRevocationAction">EncryptionKeyRevocationAction</a></code> | <code>*string</code> | The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyShutdownDuration">EncryptionKeyShutdownDuration</a></code> | <code>*string</code> | If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.ingress">Ingress</a></code> | <code>*string</code> | Provides the ingress settings for this Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.invokerIamDisabled">InvokerIamDisabled</a></code> | <code>interface{}</code> | Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.launchStage">LaunchStage</a></code> | <code>*string</code> | The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.restartPolicy">RestartPolicy</a></code> | <code>*string</code> | Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Email address of the IAM service account associated with the Instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.volumes">Volumes</a></code> | <code>interface{}</code> | volumes block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.containers"></a>

```go
Containers interface{}
```

- *Type:* interface{}

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#containers GoogleCloudRunV2Instance#containers}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the cloud run instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#location GoogleCloudRunV2Instance#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
This field follows Kubernetes annotations' namespacing, limits, and rules.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#annotations GoogleCloudRunV2Instance#annotations}

---

##### `Client`<sup>Optional</sup> <a name="Client" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.client"></a>

```go
Client *string
```

- *Type:* *string

Arbitrary identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client GoogleCloudRunV2Instance#client}

---

##### `ClientVersion`<sup>Optional</sup> <a name="ClientVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.clientVersion"></a>

```go
ClientVersion *string
```

- *Type:* *string

Arbitrary version identifier for the API client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#client_version GoogleCloudRunV2Instance#client_version}

---

##### `DefaultUriDisabled`<sup>Optional</sup> <a name="DefaultUriDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.defaultUriDisabled"></a>

```go
DefaultUriDisabled interface{}
```

- *Type:* interface{}

Disables public resolution of the default URI of this Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_uri_disabled GoogleCloudRunV2Instance#default_uri_disabled}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#deletion_policy GoogleCloudRunV2Instance#deletion_policy}

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKey"></a>

```go
EncryptionKey *string
```

- *Type:* *string

A reference to a customer managed encryption key (CMEK) to use to encrypt this container image.

For more information, go to https://cloud.google.com/run/docs/securing/using-cmek

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key GoogleCloudRunV2Instance#encryption_key}

---

##### `EncryptionKeyRevocationAction`<sup>Optional</sup> <a name="EncryptionKeyRevocationAction" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyRevocationAction"></a>

```go
EncryptionKeyRevocationAction *string
```

- *Type:* *string

The action to take if the encryption key is revoked. Possible values: ["PREVENT_NEW", "SHUTDOWN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_revocation_action GoogleCloudRunV2Instance#encryption_key_revocation_action}

---

##### `EncryptionKeyShutdownDuration`<sup>Optional</sup> <a name="EncryptionKeyShutdownDuration" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.encryptionKeyShutdownDuration"></a>

```go
EncryptionKeyShutdownDuration *string
```

- *Type:* *string

If encryptionKeyRevocationAction is SHUTDOWN, the duration before shutting down all instances.

The minimum increment is 1 hour.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#encryption_key_shutdown_duration GoogleCloudRunV2Instance#encryption_key_shutdown_duration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#id GoogleCloudRunV2Instance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ingress`<sup>Optional</sup> <a name="Ingress" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.ingress"></a>

```go
Ingress *string
```

- *Type:* *string

Provides the ingress settings for this Instance.

On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#ingress GoogleCloudRunV2Instance#ingress}

---

##### `InvokerIamDisabled`<sup>Optional</sup> <a name="InvokerIamDisabled" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.invokerIamDisabled"></a>

```go
InvokerIamDisabled interface{}
```

- *Type:* interface{}

Disables IAM permission check for run.routes.invoke for callers of this Instance. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#invoker_iam_disabled GoogleCloudRunV2Instance#invoker_iam_disabled}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Unstructured key value map that can be used to organize and categorize objects.

User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://docs.cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#labels GoogleCloudRunV2Instance#labels}

---

##### `LaunchStage`<sup>Optional</sup> <a name="LaunchStage" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.launchStage"></a>

```go
LaunchStage *string
```

- *Type:* *string

The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features. For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#launch_stage GoogleCloudRunV2Instance#launch_stage}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#project GoogleCloudRunV2Instance#project}.

---

##### `RestartPolicy`<sup>Optional</sup> <a name="RestartPolicy" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.restartPolicy"></a>

```go
RestartPolicy *string
```

- *Type:* *string

Restart policy for the Instance. If not provided, the default is ON_FAILURE. Possible values: ["ALWAYS", "ON_FAILURE", "NEVER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#restart_policy GoogleCloudRunV2Instance#restart_policy}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Email address of the IAM service account associated with the Instance.

The service account represents the identity of the running Instance, and determines what permissions the instance has.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service_account GoogleCloudRunV2Instance#service_account}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.timeouts"></a>

```go
Timeouts GoogleCloudRunV2InstanceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts">GoogleCloudRunV2InstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeouts GoogleCloudRunV2Instance#timeouts}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConfig.property.volumes"></a>

```go
Volumes interface{}
```

- *Type:* interface{}

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#volumes GoogleCloudRunV2Instance#volumes}

---

### GoogleCloudRunV2InstanceContainers <a name="GoogleCloudRunV2InstanceContainers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainers {
	Image: *string,
	Args: *[]*string,
	Command: *[]*string,
	Env: interface{},
	LivenessProbe: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe,
	Name: *string,
	Ports: interface{},
	Resources: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources,
	StartupProbe: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe,
	VolumeMounts: interface{},
	WorkingDir: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.image">Image</a></code> | <code>*string</code> | URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.args">Args</a></code> | <code>*[]*string</code> | Arguments to the entrypoint. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.command">Command</a></code> | <code>*[]*string</code> | Entrypoint array. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.env">Env</a></code> | <code>interface{}</code> | env block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | liveness_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.name">Name</a></code> | <code>*string</code> | Name of the container specified as a DNS_LABEL. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.ports">Ports</a></code> | <code>interface{}</code> | ports block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | resources block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | startup_probe block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.volumeMounts">VolumeMounts</a></code> | <code>interface{}</code> | volume_mounts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.workingDir">WorkingDir</a></code> | <code>*string</code> | Container's working directory. |

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.image"></a>

```go
Image *string
```

- *Type:* *string

URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#image GoogleCloudRunV2Instance#image}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Arguments to the entrypoint.

The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#args GoogleCloudRunV2Instance#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Entrypoint array.

Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#command GoogleCloudRunV2Instance#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.env"></a>

```go
Env interface{}
```

- *Type:* interface{}

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#env GoogleCloudRunV2Instance#env}

---

##### `LivenessProbe`<sup>Optional</sup> <a name="LivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.livenessProbe"></a>

```go
LivenessProbe GoogleCloudRunV2InstanceContainersLivenessProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

liveness_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#liveness_probe GoogleCloudRunV2Instance#liveness_probe}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the container specified as a DNS_LABEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.ports"></a>

```go
Ports interface{}
```

- *Type:* interface{}

ports block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#ports GoogleCloudRunV2Instance#ports}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.resources"></a>

```go
Resources GoogleCloudRunV2InstanceContainersResources
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#resources GoogleCloudRunV2Instance#resources}

---

##### `StartupProbe`<sup>Optional</sup> <a name="StartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.startupProbe"></a>

```go
StartupProbe GoogleCloudRunV2InstanceContainersStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

startup_probe block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#startup_probe GoogleCloudRunV2Instance#startup_probe}

---

##### `VolumeMounts`<sup>Optional</sup> <a name="VolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.volumeMounts"></a>

```go
VolumeMounts interface{}
```

- *Type:* interface{}

volume_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#volume_mounts GoogleCloudRunV2Instance#volume_mounts}

---

##### `WorkingDir`<sup>Optional</sup> <a name="WorkingDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainers.property.workingDir"></a>

```go
WorkingDir *string
```

- *Type:* *string

Container's working directory.

If not specified, the container runtime's default will be used, which might be configured in the container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#working_dir GoogleCloudRunV2Instance#working_dir}

---

### GoogleCloudRunV2InstanceContainersEnv <a name="GoogleCloudRunV2InstanceContainersEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersEnv {
	Name: *string,
	Value: *string,
	ValueSource: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.name">Name</a></code> | <code>*string</code> | Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.value">Value</a></code> | <code>*string</code> | Literal value of the environment variable. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | value_source block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.value"></a>

```go
Value *string
```

- *Type:* *string

Literal value of the environment variable.

Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

##### `ValueSource`<sup>Optional</sup> <a name="ValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnv.property.valueSource"></a>

```go
ValueSource GoogleCloudRunV2InstanceContainersEnvValueSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

value_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value_source GoogleCloudRunV2Instance#value_source}

---

### GoogleCloudRunV2InstanceContainersEnvValueSource <a name="GoogleCloudRunV2InstanceContainersEnvValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersEnvValueSource {
	SecretKeyRef: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `SecretKeyRef`<sup>Optional</sup> <a name="SecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource.property.secretKeyRef"></a>

```go
SecretKeyRef GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret_key_ref GoogleCloudRunV2Instance#secret_key_ref}

---

### GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef {
	Secret: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.secret">Secret</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.version">Version</a></code> | <code>*string</code> | The Cloud Secret Manager secret version. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager.

Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#version GoogleCloudRunV2Instance#version}

---

### GoogleCloudRunV2InstanceContainersLivenessProbe <a name="GoogleCloudRunV2InstanceContainersLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersLivenessProbe {
	FailureThreshold: *f64,
	Grpc: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc,
	HttpGet: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet,
	InitialDelaySeconds: *f64,
	PeriodSeconds: *f64,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.grpc">Grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Optional. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#failure_threshold GoogleCloudRunV2Instance#failure_threshold}

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.grpc"></a>

```go
Grpc GoogleCloudRunV2InstanceContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#grpc GoogleCloudRunV2Instance#grpc}

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.httpGet"></a>

```go
HttpGet GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_get GoogleCloudRunV2Instance#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.initialDelaySeconds"></a>

```go
InitialDelaySeconds *f64
```

- *Type:* *f64

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#initial_delay_seconds GoogleCloudRunV2Instance#initial_delay_seconds}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.periodSeconds"></a>

```go
PeriodSeconds *f64
```

- *Type:* *f64

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#period_seconds GoogleCloudRunV2Instance#period_seconds}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeout_seconds GoogleCloudRunV2Instance#timeout_seconds}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeGrpc <a name="GoogleCloudRunV2InstanceContainersLivenessProbeGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc {
	Port: *f64,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.port">Port</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.service">Service</a></code> | <code>*string</code> | Optional. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc.property.service"></a>

```go
Service *string
```

- *Type:* *string

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service GoogleCloudRunV2Instance#service}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet {
	HttpHeaders: interface{},
	Path: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>interface{}</code> | http_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.path">Path</a></code> | <code>*string</code> | Optional. Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.port">Port</a></code> | <code>*f64</code> | Optional. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.httpHeaders"></a>

```go
HttpHeaders interface{}
```

- *Type:* interface{}

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_headers GoogleCloudRunV2Instance#http_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.path"></a>

```go
Path *string
```

- *Type:* *string

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.name">Name</a></code> | <code>*string</code> | Required. The header field name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.value">Value</a></code> | <code>*string</code> | Optional. The header field value. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Required. The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

Optional. The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

### GoogleCloudRunV2InstanceContainersPorts <a name="GoogleCloudRunV2InstanceContainersPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersPorts {
	ContainerPort: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.name">Name</a></code> | <code>*string</code> | If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c". |

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.containerPort"></a>

```go
ContainerPort *f64
```

- *Type:* *f64

Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#container_port GoogleCloudRunV2Instance#container_port}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPorts.property.name"></a>

```go
Name *string
```

- *Type:* *string

If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

### GoogleCloudRunV2InstanceContainersResources <a name="GoogleCloudRunV2InstanceContainersResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersResources {
	Limits: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.property.limits">Limits</a></code> | <code>*map[string]*string</code> | Only memory and CPU are supported. |

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources.property.limits"></a>

```go
Limits *map[string]*string
```

- *Type:* *map[string]*string

Only memory and CPU are supported.

Use key 'cpu' for CPU limit, 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', '6', and '8'. Setting 4 CPU requires at least 2Gi of memory, setting 6 or more CPU requires at least 4Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#limits GoogleCloudRunV2Instance#limits}

---

### GoogleCloudRunV2InstanceContainersStartupProbe <a name="GoogleCloudRunV2InstanceContainersStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersStartupProbe {
	FailureThreshold: *f64,
	Grpc: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc,
	HttpGet: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet,
	InitialDelaySeconds: *f64,
	PeriodSeconds: *f64,
	TcpSocket: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket,
	TimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.grpc">Grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | grpc block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | http_get block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | tcp_socket block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Optional. |

---

##### `FailureThreshold`<sup>Optional</sup> <a name="FailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.failureThreshold"></a>

```go
FailureThreshold *f64
```

- *Type:* *f64

Optional.

Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#failure_threshold GoogleCloudRunV2Instance#failure_threshold}

---

##### `Grpc`<sup>Optional</sup> <a name="Grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.grpc"></a>

```go
Grpc GoogleCloudRunV2InstanceContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

grpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#grpc GoogleCloudRunV2Instance#grpc}

---

##### `HttpGet`<sup>Optional</sup> <a name="HttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.httpGet"></a>

```go
HttpGet GoogleCloudRunV2InstanceContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

http_get block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_get GoogleCloudRunV2Instance#http_get}

---

##### `InitialDelaySeconds`<sup>Optional</sup> <a name="InitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.initialDelaySeconds"></a>

```go
InitialDelaySeconds *f64
```

- *Type:* *f64

Optional.

Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#initial_delay_seconds GoogleCloudRunV2Instance#initial_delay_seconds}

---

##### `PeriodSeconds`<sup>Optional</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.periodSeconds"></a>

```go
PeriodSeconds *f64
```

- *Type:* *f64

Optional.

How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeout_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#period_seconds GoogleCloudRunV2Instance#period_seconds}

---

##### `TcpSocket`<sup>Optional</sup> <a name="TcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.tcpSocket"></a>

```go
TcpSocket GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

tcp_socket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#tcp_socket GoogleCloudRunV2Instance#tcp_socket}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Optional.

Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than period_seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#timeout_seconds GoogleCloudRunV2Instance#timeout_seconds}

---

### GoogleCloudRunV2InstanceContainersStartupProbeGrpc <a name="GoogleCloudRunV2InstanceContainersStartupProbeGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc {
	Port: *f64,
	Service: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.port">Port</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.service">Service</a></code> | <code>*string</code> | Optional. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Optional.

Port number of the gRPC service. Number must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc.property.service"></a>

```go
Service *string
```

- *Type:* *string

Optional.

Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md ). If this is not specified, the default behavior is defined by gRPC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#service GoogleCloudRunV2Instance#service}

---

### GoogleCloudRunV2InstanceContainersStartupProbeHttpGet <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet {
	HttpHeaders: interface{},
	Path: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.httpHeaders">HttpHeaders</a></code> | <code>interface{}</code> | http_headers block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.path">Path</a></code> | <code>*string</code> | Optional. Path to access on the HTTP server. Defaults to '/'. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.port">Port</a></code> | <code>*f64</code> | Optional. |

---

##### `HttpHeaders`<sup>Optional</sup> <a name="HttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.httpHeaders"></a>

```go
HttpHeaders interface{}
```

- *Type:* interface{}

http_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#http_headers GoogleCloudRunV2Instance#http_headers}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.path"></a>

```go
Path *string
```

- *Type:* *string

Optional. Path to access on the HTTP server. Defaults to '/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.name">Name</a></code> | <code>*string</code> | Required. The header field name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.value">Value</a></code> | <code>*string</code> | Optional. The header field value. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

Required. The header field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

Optional. The header field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#value GoogleCloudRunV2Instance#value}

---

### GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket <a name="GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket {
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.property.port">Port</a></code> | <code>*f64</code> | Optional. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Optional.

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports[0].containerPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#port GoogleCloudRunV2Instance#port}

---

### GoogleCloudRunV2InstanceContainerStatuses <a name="GoogleCloudRunV2InstanceContainerStatuses" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainerStatuses {

}
```


### GoogleCloudRunV2InstanceContainersVolumeMounts <a name="GoogleCloudRunV2InstanceContainersVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceContainersVolumeMounts {
	MountPath: *string,
	Name: *string,
	SubPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.mountPath">MountPath</a></code> | <code>*string</code> | Path within the container at which the volume should be mounted. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.name">Name</a></code> | <code>*string</code> | This must match the Name of a Volume. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.subPath">SubPath</a></code> | <code>*string</code> | Path within the volume from which the container's volume should be mounted. |

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Path within the container at which the volume should be mounted.

Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mount_path GoogleCloudRunV2Instance#mount_path}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.name"></a>

```go
Name *string
```

- *Type:* *string

This must match the Name of a Volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `SubPath`<sup>Optional</sup> <a name="SubPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMounts.property.subPath"></a>

```go
SubPath *string
```

- *Type:* *string

Path within the volume from which the container's volume should be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#sub_path GoogleCloudRunV2Instance#sub_path}

---

### GoogleCloudRunV2InstanceTerminalCondition <a name="GoogleCloudRunV2InstanceTerminalCondition" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceTerminalCondition {

}
```


### GoogleCloudRunV2InstanceTimeouts <a name="GoogleCloudRunV2InstanceTimeouts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#create GoogleCloudRunV2Instance#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#delete GoogleCloudRunV2Instance#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#update GoogleCloudRunV2Instance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#create GoogleCloudRunV2Instance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#delete GoogleCloudRunV2Instance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#update GoogleCloudRunV2Instance#update}.

---

### GoogleCloudRunV2InstanceVolumes <a name="GoogleCloudRunV2InstanceVolumes" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceVolumes {
	Name: *string,
	CloudSqlInstance: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance,
	EmptyDir: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir,
	Gcs: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs,
	Nfs: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs,
	Secret: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.name">Name</a></code> | <code>*string</code> | Volume's name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | cloud_sql_instance block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | empty_dir block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.gcs">Gcs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | gcs block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.nfs">Nfs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | nfs block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | secret block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Volume's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#name GoogleCloudRunV2Instance#name}

---

##### `CloudSqlInstance`<sup>Optional</sup> <a name="CloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.cloudSqlInstance"></a>

```go
CloudSqlInstance GoogleCloudRunV2InstanceVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

cloud_sql_instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#cloud_sql_instance GoogleCloudRunV2Instance#cloud_sql_instance}

---

##### `EmptyDir`<sup>Optional</sup> <a name="EmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.emptyDir"></a>

```go
EmptyDir GoogleCloudRunV2InstanceVolumesEmptyDir
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

empty_dir block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#empty_dir GoogleCloudRunV2Instance#empty_dir}

---

##### `Gcs`<sup>Optional</sup> <a name="Gcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.gcs"></a>

```go
Gcs GoogleCloudRunV2InstanceVolumesGcs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#gcs GoogleCloudRunV2Instance#gcs}

---

##### `Nfs`<sup>Optional</sup> <a name="Nfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.nfs"></a>

```go
Nfs GoogleCloudRunV2InstanceVolumesNfs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#nfs GoogleCloudRunV2Instance#nfs}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumes.property.secret"></a>

```go
Secret GoogleCloudRunV2InstanceVolumesSecret
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

### GoogleCloudRunV2InstanceVolumesCloudSqlInstance <a name="GoogleCloudRunV2InstanceVolumesCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance {
	Instances: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.property.instances">Instances</a></code> | <code>*[]*string</code> | The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}. |

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance.property.instances"></a>

```go
Instances *[]*string
```

- *Type:* *[]*string

The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#instances GoogleCloudRunV2Instance#instances}

---

### GoogleCloudRunV2InstanceVolumesEmptyDir <a name="GoogleCloudRunV2InstanceVolumesEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceVolumesEmptyDir {
	Medium: *string,
	SizeLimit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.medium">Medium</a></code> | <code>*string</code> | The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.sizeLimit">SizeLimit</a></code> | <code>*string</code> | Limit on the storage usable by this EmptyDir volume. |

---

##### `Medium`<sup>Optional</sup> <a name="Medium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.medium"></a>

```go
Medium *string
```

- *Type:* *string

The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY", "DISK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#medium GoogleCloudRunV2Instance#medium}

---

##### `SizeLimit`<sup>Optional</sup> <a name="SizeLimit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir.property.sizeLimit"></a>

```go
SizeLimit *string
```

- *Type:* *string

Limit on the storage usable by this EmptyDir volume.

The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#size_limit GoogleCloudRunV2Instance#size_limit}

---

### GoogleCloudRunV2InstanceVolumesGcs <a name="GoogleCloudRunV2InstanceVolumesGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceVolumesGcs {
	Bucket: *string,
	MountOptions: *[]*string,
	ReadOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.bucket">Bucket</a></code> | <code>*string</code> | GCS Bucket name. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | A list of flags to pass to the gcsfuse command for configuring this volume. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | If true, mount the GCS bucket as read-only. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

GCS Bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#bucket GoogleCloudRunV2Instance#bucket}

---

##### `MountOptions`<sup>Optional</sup> <a name="MountOptions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.mountOptions"></a>

```go
MountOptions *[]*string
```

- *Type:* *[]*string

A list of flags to pass to the gcsfuse command for configuring this volume.

Flags should be passed without leading dashes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mount_options GoogleCloudRunV2Instance#mount_options}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

If true, mount the GCS bucket as read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#read_only GoogleCloudRunV2Instance#read_only}

---

### GoogleCloudRunV2InstanceVolumesNfs <a name="GoogleCloudRunV2InstanceVolumesNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceVolumesNfs {
	Path: *string,
	Server: *string,
	ReadOnly: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.path">Path</a></code> | <code>*string</code> | Path that is exported by the NFS server. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.server">Server</a></code> | <code>*string</code> | Hostname or IP address of the NFS server. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | If true, mount the NFS volume as read only. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.path"></a>

```go
Path *string
```

- *Type:* *string

Path that is exported by the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.server"></a>

```go
Server *string
```

- *Type:* *string

Hostname or IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#server GoogleCloudRunV2Instance#server}

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs.property.readOnly"></a>

```go
ReadOnly interface{}
```

- *Type:* interface{}

If true, mount the NFS volume as read only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#read_only GoogleCloudRunV2Instance#read_only}

---

### GoogleCloudRunV2InstanceVolumesSecret <a name="GoogleCloudRunV2InstanceVolumesSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceVolumesSecret {
	Secret: *string,
	DefaultMode: *f64,
	Items: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.secret">Secret</a></code> | <code>*string</code> | The name of the secret in Cloud Secret Manager. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | Integer representation of mode bits to use on created files by default. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.items">Items</a></code> | <code>interface{}</code> | items block. |

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

The name of the secret in Cloud Secret Manager.

Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#secret GoogleCloudRunV2Instance#secret}

---

##### `DefaultMode`<sup>Optional</sup> <a name="DefaultMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.defaultMode"></a>

```go
DefaultMode *f64
```

- *Type:* *f64

Integer representation of mode bits to use on created files by default.

Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#default_mode GoogleCloudRunV2Instance#default_mode}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret.property.items"></a>

```go
Items interface{}
```

- *Type:* interface{}

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#items GoogleCloudRunV2Instance#items}

---

### GoogleCloudRunV2InstanceVolumesSecretItems <a name="GoogleCloudRunV2InstanceVolumesSecretItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

&googlecloudrunv2instance.GoogleCloudRunV2InstanceVolumesSecretItems {
	Path: *string,
	Mode: *f64,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.path">Path</a></code> | <code>*string</code> | The relative path of the secret in the container. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.mode">Mode</a></code> | <code>*f64</code> | Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.version">Version</a></code> | <code>*string</code> | The Cloud Secret Manager secret version. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.path"></a>

```go
Path *string
```

- *Type:* *string

The relative path of the secret in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#path GoogleCloudRunV2Instance#path}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.mode"></a>

```go
Mode *f64
```

- *Type:* *f64

Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal).

If 0 or not set, the Volume's default mode will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#mode GoogleCloudRunV2Instance#mode}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItems.property.version"></a>

```go
Version *string
```

- *Type:* *string

The Cloud Secret Manager secret version.

Can be 'latest' for the latest value or an integer for a specific version

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_cloud_run_v2_instance#version GoogleCloudRunV2Instance#version}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudRunV2InstanceConditionsList <a name="GoogleCloudRunV2InstanceConditionsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2InstanceConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2InstanceConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudRunV2InstanceConditionsOutputReference <a name="GoogleCloudRunV2InstanceConditionsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2InstanceConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.instanceReason">InstanceReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions">GoogleCloudRunV2InstanceConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceReason`<sup>Required</sup> <a name="InstanceReason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.instanceReason"></a>

```go
func InstanceReason() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceConditions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceConditions">GoogleCloudRunV2InstanceConditions</a>

---


### GoogleCloudRunV2InstanceContainersEnvList <a name="GoogleCloudRunV2InstanceContainersEnvList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersEnvList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2InstanceContainersEnvList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2InstanceContainersEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceContainersEnvOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersEnvOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2InstanceContainersEnvOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource">PutValueSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValueSource">ResetValueSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueSource` <a name="PutValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource"></a>

```go
func PutValueSource(value GoogleCloudRunV2InstanceContainersEnvValueSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.putValueSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValueSource` <a name="ResetValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.resetValueSource"></a>

```go
func ResetValueSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSource">ValueSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSourceInput">ValueSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueSource`<sup>Required</sup> <a name="ValueSource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSource"></a>

```go
func ValueSource() GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValueSourceInput`<sup>Optional</sup> <a name="ValueSourceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.valueSourceInput"></a>

```go
func ValueSourceInput() GoogleCloudRunV2InstanceContainersEnvValueSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef">PutSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resetSecretKeyRef">ResetSecretKeyRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretKeyRef` <a name="PutSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef"></a>

```go
func PutSecretKeyRef(value GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---

##### `ResetSecretKeyRef` <a name="ResetSecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.resetSecretKeyRef"></a>

```go
func ResetSecretKeyRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRefInput">SecretKeyRefInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRef"></a>

```go
func SecretKeyRef() GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference</a>

---

##### `SecretKeyRefInput`<sup>Optional</sup> <a name="SecretKeyRefInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.secretKeyRefInput"></a>

```go
func SecretKeyRefInput() GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceContainersEnvValueSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSource">GoogleCloudRunV2InstanceContainersEnvValueSource</a>

---


### GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference <a name="GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRefOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef">GoogleCloudRunV2InstanceContainersEnvValueSourceSecretKeyRef</a>

---


### GoogleCloudRunV2InstanceContainersList <a name="GoogleCloudRunV2InstanceContainersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2InstanceContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2InstanceContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders">PutHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaders` <a name="PutHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders"></a>

```go
func PutHttpHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetHttpHeaders"></a>

```go
func ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```go
func HttpHeaders() GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```go
func HttpHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---


### GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference <a name="GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersLivenessProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc"></a>

```go
func PutGrpc(value GoogleCloudRunV2InstanceContainersLivenessProbeGrpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet"></a>

```go
func PutHttpGet(value GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetGrpc"></a>

```go
func ResetGrpc()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetHttpGet"></a>

```go
func ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetInitialDelaySeconds"></a>

```go
func ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetPeriodSeconds"></a>

```go
func ResetPeriodSeconds()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpc"></a>

```go
func Grpc() GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeGrpcOutputReference</a>

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGet"></a>

```go
func HttpGet() GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGetOutputReference</a>

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.grpcInput"></a>

```go
func GrpcInput() GoogleCloudRunV2InstanceContainersLivenessProbeGrpc
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeGrpc">GoogleCloudRunV2InstanceContainersLivenessProbeGrpc</a>

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.httpGetInput"></a>

```go
func HttpGetInput() GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet">GoogleCloudRunV2InstanceContainersLivenessProbeHttpGet</a>

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySecondsInput"></a>

```go
func InitialDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSecondsInput"></a>

```go
func PeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```go
func InitialDelaySeconds() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceContainersLivenessProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---


### GoogleCloudRunV2InstanceContainersOutputReference <a name="GoogleCloudRunV2InstanceContainersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2InstanceContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe">PutLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe">PutStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts">PutVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetLivenessProbe">ResetLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetStartupProbe">ResetStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetVolumeMounts">ResetVolumeMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetWorkingDir">ResetWorkingDir</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv"></a>

```go
func PutEnv(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putEnv.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLivenessProbe` <a name="PutLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe"></a>

```go
func PutLivenessProbe(value GoogleCloudRunV2InstanceContainersLivenessProbe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putLivenessProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---

##### `PutPorts` <a name="PutPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts"></a>

```go
func PutPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResources` <a name="PutResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources"></a>

```go
func PutResources(value GoogleCloudRunV2InstanceContainersResources)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---

##### `PutStartupProbe` <a name="PutStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe"></a>

```go
func PutStartupProbe(value GoogleCloudRunV2InstanceContainersStartupProbe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putStartupProbe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---

##### `PutVolumeMounts` <a name="PutVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts"></a>

```go
func PutVolumeMounts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.putVolumeMounts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetEnv"></a>

```go
func ResetEnv()
```

##### `ResetLivenessProbe` <a name="ResetLivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetLivenessProbe"></a>

```go
func ResetLivenessProbe()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetPorts"></a>

```go
func ResetPorts()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetStartupProbe` <a name="ResetStartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetStartupProbe"></a>

```go
func ResetStartupProbe()
```

##### `ResetVolumeMounts` <a name="ResetVolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetVolumeMounts"></a>

```go
func ResetVolumeMounts()
```

##### `ResetWorkingDir` <a name="ResetWorkingDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.resetWorkingDir"></a>

```go
func ResetWorkingDir()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.env">Env</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList">GoogleCloudRunV2InstanceContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbe">LivenessProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList">GoogleCloudRunV2InstanceContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference">GoogleCloudRunV2InstanceContainersResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbe">StartupProbe</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMounts">VolumeMounts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList">GoogleCloudRunV2InstanceContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.argsInput">ArgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.envInput">EnvInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbeInput">LivenessProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.portsInput">PortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbeInput">StartupProbeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMountsInput">VolumeMountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDirInput">WorkingDirInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.args">Args</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDir">WorkingDir</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.env"></a>

```go
func Env() GoogleCloudRunV2InstanceContainersEnvList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersEnvList">GoogleCloudRunV2InstanceContainersEnvList</a>

---

##### `LivenessProbe`<sup>Required</sup> <a name="LivenessProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbe"></a>

```go
func LivenessProbe() GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference">GoogleCloudRunV2InstanceContainersLivenessProbeOutputReference</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.ports"></a>

```go
func Ports() GoogleCloudRunV2InstanceContainersPortsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList">GoogleCloudRunV2InstanceContainersPortsList</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resources"></a>

```go
func Resources() GoogleCloudRunV2InstanceContainersResourcesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference">GoogleCloudRunV2InstanceContainersResourcesOutputReference</a>

---

##### `StartupProbe`<sup>Required</sup> <a name="StartupProbe" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbe"></a>

```go
func StartupProbe() GoogleCloudRunV2InstanceContainersStartupProbeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeOutputReference</a>

---

##### `VolumeMounts`<sup>Required</sup> <a name="VolumeMounts" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMounts"></a>

```go
func VolumeMounts() GoogleCloudRunV2InstanceContainersVolumeMountsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList">GoogleCloudRunV2InstanceContainersVolumeMountsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.argsInput"></a>

```go
func ArgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.envInput"></a>

```go
func EnvInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `LivenessProbeInput`<sup>Optional</sup> <a name="LivenessProbeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.livenessProbeInput"></a>

```go
func LivenessProbeInput() GoogleCloudRunV2InstanceContainersLivenessProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersLivenessProbe">GoogleCloudRunV2InstanceContainersLivenessProbe</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.portsInput"></a>

```go
func PortsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() GoogleCloudRunV2InstanceContainersResources
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---

##### `StartupProbeInput`<sup>Optional</sup> <a name="StartupProbeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.startupProbeInput"></a>

```go
func StartupProbeInput() GoogleCloudRunV2InstanceContainersStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---

##### `VolumeMountsInput`<sup>Optional</sup> <a name="VolumeMountsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.volumeMountsInput"></a>

```go
func VolumeMountsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkingDirInput`<sup>Optional</sup> <a name="WorkingDirInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDirInput"></a>

```go
func WorkingDirInput() *string
```

- *Type:* *string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.args"></a>

```go
func Args() *[]*string
```

- *Type:* *[]*string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `WorkingDir`<sup>Required</sup> <a name="WorkingDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.workingDir"></a>

```go
func WorkingDir() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceContainersPortsList <a name="GoogleCloudRunV2InstanceContainersPortsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2InstanceContainersPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2InstanceContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceContainersPortsOutputReference <a name="GoogleCloudRunV2InstanceContainersPortsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2InstanceContainersPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetContainerPort"></a>

```go
func ResetContainerPort()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPortInput"></a>

```go
func ContainerPortInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceContainersResourcesOutputReference <a name="GoogleCloudRunV2InstanceContainersResourcesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceContainersResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimits` <a name="ResetLimits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.resetLimits"></a>

```go
func ResetLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limitsInput">LimitsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limits">Limits</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limitsInput"></a>

```go
func LimitsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.limits"></a>

```go
func Limits() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceContainersResources
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersResources">GoogleCloudRunV2InstanceContainersResources</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.resetService"></a>

```go
func ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders">PutHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetHttpHeaders">ResetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpHeaders` <a name="PutHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders"></a>

```go
func PutHttpHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.putHttpHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHttpHeaders` <a name="ResetHttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetHttpHeaders"></a>

```go
func ResetHttpHeaders()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeaders">HttpHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput">HttpHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpHeaders`<sup>Required</sup> <a name="HttpHeaders" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```go
func HttpHeaders() GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `HttpHeadersInput`<sup>Optional</sup> <a name="HttpHeadersInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.httpHeadersInput"></a>

```go
func HttpHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersStartupProbeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceContainersStartupProbeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc">PutGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet">PutHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket">PutTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetFailureThreshold">ResetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetGrpc">ResetGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetHttpGet">ResetHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetInitialDelaySeconds">ResetInitialDelaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetPeriodSeconds">ResetPeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTcpSocket">ResetTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrpc` <a name="PutGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc"></a>

```go
func PutGrpc(value GoogleCloudRunV2InstanceContainersStartupProbeGrpc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putGrpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---

##### `PutHttpGet` <a name="PutHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet"></a>

```go
func PutHttpGet(value GoogleCloudRunV2InstanceContainersStartupProbeHttpGet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putHttpGet.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---

##### `PutTcpSocket` <a name="PutTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket"></a>

```go
func PutTcpSocket(value GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.putTcpSocket.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---

##### `ResetFailureThreshold` <a name="ResetFailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetFailureThreshold"></a>

```go
func ResetFailureThreshold()
```

##### `ResetGrpc` <a name="ResetGrpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetGrpc"></a>

```go
func ResetGrpc()
```

##### `ResetHttpGet` <a name="ResetHttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetHttpGet"></a>

```go
func ResetHttpGet()
```

##### `ResetInitialDelaySeconds` <a name="ResetInitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetInitialDelaySeconds"></a>

```go
func ResetInitialDelaySeconds()
```

##### `ResetPeriodSeconds` <a name="ResetPeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetPeriodSeconds"></a>

```go
func ResetPeriodSeconds()
```

##### `ResetTcpSocket` <a name="ResetTcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTcpSocket"></a>

```go
func ResetTcpSocket()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpc">Grpc</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGet">HttpGet</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocket">TcpSocket</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThresholdInput">FailureThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpcInput">GrpcInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGetInput">HttpGetInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySecondsInput">InitialDelaySecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSecondsInput">PeriodSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocketInput">TcpSocketInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThreshold">FailureThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySeconds">InitialDelaySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSeconds">PeriodSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Grpc`<sup>Required</sup> <a name="Grpc" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpc"></a>

```go
func Grpc() GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeGrpcOutputReference</a>

---

##### `HttpGet`<sup>Required</sup> <a name="HttpGet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGet"></a>

```go
func HttpGet() GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeHttpGetOutputReference</a>

---

##### `TcpSocket`<sup>Required</sup> <a name="TcpSocket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocket"></a>

```go
func TcpSocket() GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference</a>

---

##### `FailureThresholdInput`<sup>Optional</sup> <a name="FailureThresholdInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThresholdInput"></a>

```go
func FailureThresholdInput() *f64
```

- *Type:* *f64

---

##### `GrpcInput`<sup>Optional</sup> <a name="GrpcInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.grpcInput"></a>

```go
func GrpcInput() GoogleCloudRunV2InstanceContainersStartupProbeGrpc
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeGrpc">GoogleCloudRunV2InstanceContainersStartupProbeGrpc</a>

---

##### `HttpGetInput`<sup>Optional</sup> <a name="HttpGetInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.httpGetInput"></a>

```go
func HttpGetInput() GoogleCloudRunV2InstanceContainersStartupProbeHttpGet
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeHttpGet">GoogleCloudRunV2InstanceContainersStartupProbeHttpGet</a>

---

##### `InitialDelaySecondsInput`<sup>Optional</sup> <a name="InitialDelaySecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySecondsInput"></a>

```go
func InitialDelaySecondsInput() *f64
```

- *Type:* *f64

---

##### `PeriodSecondsInput`<sup>Optional</sup> <a name="PeriodSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSecondsInput"></a>

```go
func PeriodSecondsInput() *f64
```

- *Type:* *f64

---

##### `TcpSocketInput`<sup>Optional</sup> <a name="TcpSocketInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.tcpSocketInput"></a>

```go
func TcpSocketInput() GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `FailureThreshold`<sup>Required</sup> <a name="FailureThreshold" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.failureThreshold"></a>

```go
func FailureThreshold() *f64
```

- *Type:* *f64

---

##### `InitialDelaySeconds`<sup>Required</sup> <a name="InitialDelaySeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```go
func InitialDelaySeconds() *f64
```

- *Type:* *f64

---

##### `PeriodSeconds`<sup>Required</sup> <a name="PeriodSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.periodSeconds"></a>

```go
func PeriodSeconds() *f64
```

- *Type:* *f64

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceContainersStartupProbe
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbe">GoogleCloudRunV2InstanceContainersStartupProbe</a>

---


### GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference <a name="GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket">GoogleCloudRunV2InstanceContainersStartupProbeTcpSocket</a>

---


### GoogleCloudRunV2InstanceContainerStatusesList <a name="GoogleCloudRunV2InstanceContainerStatusesList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainerStatusesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2InstanceContainerStatusesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2InstanceContainerStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudRunV2InstanceContainerStatusesOutputReference <a name="GoogleCloudRunV2InstanceContainerStatusesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainerStatusesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2InstanceContainerStatusesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.imageDigest">ImageDigest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses">GoogleCloudRunV2InstanceContainerStatuses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageDigest`<sup>Required</sup> <a name="ImageDigest" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.imageDigest"></a>

```go
func ImageDigest() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatusesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceContainerStatuses
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainerStatuses">GoogleCloudRunV2InstanceContainerStatuses</a>

---


### GoogleCloudRunV2InstanceContainersVolumeMountsList <a name="GoogleCloudRunV2InstanceContainersVolumeMountsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersVolumeMountsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2InstanceContainersVolumeMountsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference <a name="GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceContainersVolumeMountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resetSubPath">ResetSubPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubPath` <a name="ResetSubPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.resetSubPath"></a>

```go
func ResetSubPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPathInput">SubPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPath">SubPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SubPathInput`<sup>Optional</sup> <a name="SubPathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPathInput"></a>

```go
func SubPathInput() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SubPath`<sup>Required</sup> <a name="SubPath" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.subPath"></a>

```go
func SubPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceContainersVolumeMountsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceTerminalConditionList <a name="GoogleCloudRunV2InstanceTerminalConditionList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceTerminalConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2InstanceTerminalConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2InstanceTerminalConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCloudRunV2InstanceTerminalConditionOutputReference <a name="GoogleCloudRunV2InstanceTerminalConditionOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceTerminalConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2InstanceTerminalConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.instanceReason">InstanceReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition">GoogleCloudRunV2InstanceTerminalCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceReason`<sup>Required</sup> <a name="InstanceReason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.instanceReason"></a>

```go
func InstanceReason() *string
```

- *Type:* *string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.lastTransitionTime"></a>

```go
func LastTransitionTime() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceTerminalCondition
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTerminalCondition">GoogleCloudRunV2InstanceTerminalCondition</a>

---


### GoogleCloudRunV2InstanceTimeoutsOutputReference <a name="GoogleCloudRunV2InstanceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference <a name="GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resetInstances">ResetInstances</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstances` <a name="ResetInstances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.resetInstances"></a>

```go
func ResetInstances()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instancesInput">InstancesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instances">Instances</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instancesInput"></a>

```go
func InstancesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.instances"></a>

```go
func Instances() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---


### GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference <a name="GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceVolumesEmptyDirOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetMedium">ResetMedium</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetSizeLimit">ResetSizeLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMedium` <a name="ResetMedium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetMedium"></a>

```go
func ResetMedium()
```

##### `ResetSizeLimit` <a name="ResetSizeLimit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.resetSizeLimit"></a>

```go
func ResetSizeLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.mediumInput">MediumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimitInput">SizeLimitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.medium">Medium</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimit">SizeLimit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MediumInput`<sup>Optional</sup> <a name="MediumInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.mediumInput"></a>

```go
func MediumInput() *string
```

- *Type:* *string

---

##### `SizeLimitInput`<sup>Optional</sup> <a name="SizeLimitInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimitInput"></a>

```go
func SizeLimitInput() *string
```

- *Type:* *string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.medium"></a>

```go
func Medium() *string
```

- *Type:* *string

---

##### `SizeLimit`<sup>Required</sup> <a name="SizeLimit" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```go
func SizeLimit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceVolumesEmptyDir
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---


### GoogleCloudRunV2InstanceVolumesGcsOutputReference <a name="GoogleCloudRunV2InstanceVolumesGcsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceVolumesGcsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceVolumesGcsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetMountOptions">ResetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountOptions` <a name="ResetMountOptions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetMountOptions"></a>

```go
func ResetMountOptions()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptionsInput">MountOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptions">MountOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `MountOptionsInput`<sup>Optional</sup> <a name="MountOptionsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptionsInput"></a>

```go
func MountOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.mountOptions"></a>

```go
func MountOptions() *[]*string
```

- *Type:* *[]*string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceVolumesGcs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---


### GoogleCloudRunV2InstanceVolumesList <a name="GoogleCloudRunV2InstanceVolumesList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceVolumesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2InstanceVolumesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2InstanceVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceVolumesNfsOutputReference <a name="GoogleCloudRunV2InstanceVolumesNfsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceVolumesNfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceVolumesNfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.resetReadOnly"></a>

```go
func ResetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.serverInput">ServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnly">ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnlyInput"></a>

```go
func ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.serverInput"></a>

```go
func ServerInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.readOnly"></a>

```go
func ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceVolumesNfs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---


### GoogleCloudRunV2InstanceVolumesOutputReference <a name="GoogleCloudRunV2InstanceVolumesOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceVolumesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2InstanceVolumesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance">PutCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir">PutEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs">PutGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs">PutNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret">PutSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetCloudSqlInstance">ResetCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetEmptyDir">ResetEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetGcs">ResetGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetNfs">ResetNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudSqlInstance` <a name="PutCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance"></a>

```go
func PutCloudSqlInstance(value GoogleCloudRunV2InstanceVolumesCloudSqlInstance)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putCloudSqlInstance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---

##### `PutEmptyDir` <a name="PutEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir"></a>

```go
func PutEmptyDir(value GoogleCloudRunV2InstanceVolumesEmptyDir)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putEmptyDir.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---

##### `PutGcs` <a name="PutGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs"></a>

```go
func PutGcs(value GoogleCloudRunV2InstanceVolumesGcs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---

##### `PutNfs` <a name="PutNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs"></a>

```go
func PutNfs(value GoogleCloudRunV2InstanceVolumesNfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---

##### `PutSecret` <a name="PutSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret"></a>

```go
func PutSecret(value GoogleCloudRunV2InstanceVolumesSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.putSecret.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---

##### `ResetCloudSqlInstance` <a name="ResetCloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetCloudSqlInstance"></a>

```go
func ResetCloudSqlInstance()
```

##### `ResetEmptyDir` <a name="ResetEmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetEmptyDir"></a>

```go
func ResetEmptyDir()
```

##### `ResetGcs` <a name="ResetGcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetGcs"></a>

```go
func ResetGcs()
```

##### `ResetNfs` <a name="ResetNfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetNfs"></a>

```go
func ResetNfs()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.resetSecret"></a>

```go
func ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstance">CloudSqlInstance</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDir">EmptyDir</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference">GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcs">Gcs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference">GoogleCloudRunV2InstanceVolumesGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfs">Nfs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference">GoogleCloudRunV2InstanceVolumesNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secret">Secret</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference">GoogleCloudRunV2InstanceVolumesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstanceInput">CloudSqlInstanceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDirInput">EmptyDirInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcsInput">GcsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfsInput">NfsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secretInput">SecretInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudSqlInstance`<sup>Required</sup> <a name="CloudSqlInstance" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstance"></a>

```go
func CloudSqlInstance() GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference">GoogleCloudRunV2InstanceVolumesCloudSqlInstanceOutputReference</a>

---

##### `EmptyDir`<sup>Required</sup> <a name="EmptyDir" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDir"></a>

```go
func EmptyDir() GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference">GoogleCloudRunV2InstanceVolumesEmptyDirOutputReference</a>

---

##### `Gcs`<sup>Required</sup> <a name="Gcs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcs"></a>

```go
func Gcs() GoogleCloudRunV2InstanceVolumesGcsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcsOutputReference">GoogleCloudRunV2InstanceVolumesGcsOutputReference</a>

---

##### `Nfs`<sup>Required</sup> <a name="Nfs" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfs"></a>

```go
func Nfs() GoogleCloudRunV2InstanceVolumesNfsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfsOutputReference">GoogleCloudRunV2InstanceVolumesNfsOutputReference</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secret"></a>

```go
func Secret() GoogleCloudRunV2InstanceVolumesSecretOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference">GoogleCloudRunV2InstanceVolumesSecretOutputReference</a>

---

##### `CloudSqlInstanceInput`<sup>Optional</sup> <a name="CloudSqlInstanceInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.cloudSqlInstanceInput"></a>

```go
func CloudSqlInstanceInput() GoogleCloudRunV2InstanceVolumesCloudSqlInstance
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesCloudSqlInstance">GoogleCloudRunV2InstanceVolumesCloudSqlInstance</a>

---

##### `EmptyDirInput`<sup>Optional</sup> <a name="EmptyDirInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.emptyDirInput"></a>

```go
func EmptyDirInput() GoogleCloudRunV2InstanceVolumesEmptyDir
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesEmptyDir">GoogleCloudRunV2InstanceVolumesEmptyDir</a>

---

##### `GcsInput`<sup>Optional</sup> <a name="GcsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.gcsInput"></a>

```go
func GcsInput() GoogleCloudRunV2InstanceVolumesGcs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesGcs">GoogleCloudRunV2InstanceVolumesGcs</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NfsInput`<sup>Optional</sup> <a name="NfsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.nfsInput"></a>

```go
func NfsInput() GoogleCloudRunV2InstanceVolumesNfs
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesNfs">GoogleCloudRunV2InstanceVolumesNfs</a>

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.secretInput"></a>

```go
func SecretInput() GoogleCloudRunV2InstanceVolumesSecret
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceVolumesSecretItemsList <a name="GoogleCloudRunV2InstanceVolumesSecretItemsList" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceVolumesSecretItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCloudRunV2InstanceVolumesSecretItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get"></a>

```go
func Get(index *f64) GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference <a name="GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceVolumesSecretItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.modeInput">ModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.mode">Mode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.modeInput"></a>

```go
func ModeInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.mode"></a>

```go
func Mode() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleCloudRunV2InstanceVolumesSecretOutputReference <a name="GoogleCloudRunV2InstanceVolumesSecretOutputReference" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v22/googlecloudrunv2instance"

googlecloudrunv2instance.NewGoogleCloudRunV2InstanceVolumesSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCloudRunV2InstanceVolumesSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems">PutItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetDefaultMode">ResetDefaultMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetItems">ResetItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutItems` <a name="PutItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems"></a>

```go
func PutItems(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.putItems.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultMode` <a name="ResetDefaultMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetDefaultMode"></a>

```go
func ResetDefaultMode()
```

##### `ResetItems` <a name="ResetItems" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.resetItems"></a>

```go
func ResetItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.items">Items</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList">GoogleCloudRunV2InstanceVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultModeInput">DefaultModeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.itemsInput">ItemsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultMode">DefaultMode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.items"></a>

```go
func Items() GoogleCloudRunV2InstanceVolumesSecretItemsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretItemsList">GoogleCloudRunV2InstanceVolumesSecretItemsList</a>

---

##### `DefaultModeInput`<sup>Optional</sup> <a name="DefaultModeInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultModeInput"></a>

```go
func DefaultModeInput() *f64
```

- *Type:* *f64

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.itemsInput"></a>

```go
func ItemsInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.defaultMode"></a>

```go
func DefaultMode() *f64
```

- *Type:* *f64

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCloudRunV2InstanceVolumesSecret
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudRunV2Instance.GoogleCloudRunV2InstanceVolumesSecret">GoogleCloudRunV2InstanceVolumesSecret</a>

---



