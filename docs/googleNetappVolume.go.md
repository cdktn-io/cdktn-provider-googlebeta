# `googleNetappVolume` Submodule <a name="`googleNetappVolume` Submodule" id="@cdktn/provider-google-beta.googleNetappVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetappVolume <a name="GoogleNetappVolume" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume google_netapp_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolume(scope Construct, id *string, config GoogleNetappVolumeConfig) GoogleNetappVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig">GoogleNetappVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig">GoogleNetappVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig">PutBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBlockDevices">PutBlockDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putCacheParameters">PutCacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putExportPolicy">PutExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putHybridReplicationParameters">PutHybridReplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putLargeCapacityConfig">PutLargeCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters">PutRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy">PutSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy">PutTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetBackupConfig">ResetBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetBlockDevices">ResetBlockDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetCacheParameters">ResetCacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetExportPolicy">ResetExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetHybridReplicationParameters">ResetHybridReplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetKerberosEnabled">ResetKerberosEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLargeCapacity">ResetLargeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLargeCapacityConfig">ResetLargeCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetMultipleEndpoints">ResetMultipleEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestoreParameters">ResetRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestrictedActions">ResetRestrictedActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSecurityStyle">ResetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetShareName">ResetShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSmbSettings">ResetSmbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotDirectory">ResetSnapshotDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotPolicy">ResetSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetThroughputMibps">ResetThroughputMibps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTieringPolicy">ResetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetUnixPermissions">ResetUnixPermissions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupConfig` <a name="PutBackupConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig"></a>

```go
func PutBackupConfig(value GoogleNetappVolumeBackupConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

---

##### `PutBlockDevices` <a name="PutBlockDevices" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBlockDevices"></a>

```go
func PutBlockDevices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putBlockDevices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCacheParameters` <a name="PutCacheParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putCacheParameters"></a>

```go
func PutCacheParameters(value GoogleNetappVolumeCacheParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putCacheParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters">GoogleNetappVolumeCacheParameters</a>

---

##### `PutExportPolicy` <a name="PutExportPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putExportPolicy"></a>

```go
func PutExportPolicy(value GoogleNetappVolumeExportPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putExportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

---

##### `PutHybridReplicationParameters` <a name="PutHybridReplicationParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putHybridReplicationParameters"></a>

```go
func PutHybridReplicationParameters(value GoogleNetappVolumeHybridReplicationParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putHybridReplicationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters">GoogleNetappVolumeHybridReplicationParameters</a>

---

##### `PutLargeCapacityConfig` <a name="PutLargeCapacityConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putLargeCapacityConfig"></a>

```go
func PutLargeCapacityConfig(value GoogleNetappVolumeLargeCapacityConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putLargeCapacityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfig">GoogleNetappVolumeLargeCapacityConfig</a>

---

##### `PutRestoreParameters` <a name="PutRestoreParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters"></a>

```go
func PutRestoreParameters(value GoogleNetappVolumeRestoreParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putRestoreParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

---

##### `PutSnapshotPolicy` <a name="PutSnapshotPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy"></a>

```go
func PutSnapshotPolicy(value GoogleNetappVolumeSnapshotPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putSnapshotPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

---

##### `PutTieringPolicy` <a name="PutTieringPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy"></a>

```go
func PutTieringPolicy(value GoogleNetappVolumeTieringPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts"></a>

```go
func PutTimeouts(value GoogleNetappVolumeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>

---

##### `ResetBackupConfig` <a name="ResetBackupConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetBackupConfig"></a>

```go
func ResetBackupConfig()
```

##### `ResetBlockDevices` <a name="ResetBlockDevices" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetBlockDevices"></a>

```go
func ResetBlockDevices()
```

##### `ResetCacheParameters` <a name="ResetCacheParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetCacheParameters"></a>

```go
func ResetCacheParameters()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExportPolicy` <a name="ResetExportPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetExportPolicy"></a>

```go
func ResetExportPolicy()
```

##### `ResetHybridReplicationParameters` <a name="ResetHybridReplicationParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetHybridReplicationParameters"></a>

```go
func ResetHybridReplicationParameters()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetId"></a>

```go
func ResetId()
```

##### `ResetKerberosEnabled` <a name="ResetKerberosEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetKerberosEnabled"></a>

```go
func ResetKerberosEnabled()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLargeCapacity` <a name="ResetLargeCapacity" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLargeCapacity"></a>

```go
func ResetLargeCapacity()
```

##### `ResetLargeCapacityConfig` <a name="ResetLargeCapacityConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetLargeCapacityConfig"></a>

```go
func ResetLargeCapacityConfig()
```

##### `ResetMultipleEndpoints` <a name="ResetMultipleEndpoints" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetMultipleEndpoints"></a>

```go
func ResetMultipleEndpoints()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRestoreParameters` <a name="ResetRestoreParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestoreParameters"></a>

```go
func ResetRestoreParameters()
```

##### `ResetRestrictedActions` <a name="ResetRestrictedActions" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetRestrictedActions"></a>

```go
func ResetRestrictedActions()
```

##### `ResetSecurityStyle` <a name="ResetSecurityStyle" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSecurityStyle"></a>

```go
func ResetSecurityStyle()
```

##### `ResetShareName` <a name="ResetShareName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetShareName"></a>

```go
func ResetShareName()
```

##### `ResetSmbSettings` <a name="ResetSmbSettings" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSmbSettings"></a>

```go
func ResetSmbSettings()
```

##### `ResetSnapshotDirectory` <a name="ResetSnapshotDirectory" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotDirectory"></a>

```go
func ResetSnapshotDirectory()
```

##### `ResetSnapshotPolicy` <a name="ResetSnapshotPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetSnapshotPolicy"></a>

```go
func ResetSnapshotPolicy()
```

##### `ResetThroughputMibps` <a name="ResetThroughputMibps" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetThroughputMibps"></a>

```go
func ResetThroughputMibps()
```

##### `ResetTieringPolicy` <a name="ResetTieringPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTieringPolicy"></a>

```go
func ResetTieringPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUnixPermissions` <a name="ResetUnixPermissions" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.resetUnixPermissions"></a>

```go
func ResetUnixPermissions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetappVolume resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.GoogleNetappVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.GoogleNetappVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.GoogleNetappVolume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.GoogleNetappVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleNetappVolume resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleNetappVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleNetappVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetappVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.activeDirectory">ActiveDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfig">BackupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference">GoogleNetappVolumeBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.blockDevices">BlockDevices</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList">GoogleNetappVolumeBlockDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.cacheParameters">CacheParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference">GoogleNetappVolumeCacheParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.coldTierSizeGib">ColdTierSizeGib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicy">ExportPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference">GoogleNetappVolumeExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hasReplication">HasReplication</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hotTierSizeUsedGib">HotTierSizeUsedGib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hybridReplicationParameters">HybridReplicationParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference">GoogleNetappVolumeHybridReplicationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kmsConfig">KmsConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacityConfig">LargeCapacityConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference">GoogleNetappVolumeLargeCapacityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.ldapEnabled">LdapEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.mountOptions">MountOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList">GoogleNetappVolumeMountOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.psaRange">PsaRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.replicaZone">ReplicaZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParameters">RestoreParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference">GoogleNetappVolumeRestoreParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.serviceLevel">ServiceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicy">SnapshotPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference">GoogleNetappVolumeSnapshotPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.stateDetails">StateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference">GoogleNetappVolumeTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference">GoogleNetappVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.usedGib">UsedGib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfigInput">BackupConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.blockDevicesInput">BlockDevicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.cacheParametersInput">CacheParametersInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters">GoogleNetappVolumeCacheParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGibInput">CapacityGibInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicyInput">ExportPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hybridReplicationParametersInput">HybridReplicationParametersInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters">GoogleNetappVolumeHybridReplicationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabledInput">KerberosEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacityConfigInput">LargeCapacityConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfig">GoogleNetappVolumeLargeCapacityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacityInput">LargeCapacityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpointsInput">MultipleEndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParametersInput">RestoreParametersInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActionsInput">RestrictedActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyleInput">SecurityStyleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareNameInput">ShareNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettingsInput">SmbSettingsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectoryInput">SnapshotDirectoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicyInput">SnapshotPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePoolInput">StoragePoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.throughputMibpsInput">ThroughputMibpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicyInput">TieringPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissionsInput">UnixPermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGib">CapacityGib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabled">KerberosEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacity">LargeCapacity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpoints">MultipleEndpoints</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActions">RestrictedActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareName">ShareName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettings">SmbSettings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectory">SnapshotDirectory</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePool">StoragePool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.throughputMibps">ThroughputMibps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissions">UnixPermissions</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.activeDirectory"></a>

```go
func ActiveDirectory() *string
```

- *Type:* *string

---

##### `BackupConfig`<sup>Required</sup> <a name="BackupConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfig"></a>

```go
func BackupConfig() GoogleNetappVolumeBackupConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference">GoogleNetappVolumeBackupConfigOutputReference</a>

---

##### `BlockDevices`<sup>Required</sup> <a name="BlockDevices" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.blockDevices"></a>

```go
func BlockDevices() GoogleNetappVolumeBlockDevicesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList">GoogleNetappVolumeBlockDevicesList</a>

---

##### `CacheParameters`<sup>Required</sup> <a name="CacheParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.cacheParameters"></a>

```go
func CacheParameters() GoogleNetappVolumeCacheParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference">GoogleNetappVolumeCacheParametersOutputReference</a>

---

##### `ColdTierSizeGib`<sup>Required</sup> <a name="ColdTierSizeGib" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.coldTierSizeGib"></a>

```go
func ColdTierSizeGib() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `ExportPolicy`<sup>Required</sup> <a name="ExportPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicy"></a>

```go
func ExportPolicy() GoogleNetappVolumeExportPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference">GoogleNetappVolumeExportPolicyOutputReference</a>

---

##### `HasReplication`<sup>Required</sup> <a name="HasReplication" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hasReplication"></a>

```go
func HasReplication() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `HotTierSizeUsedGib`<sup>Required</sup> <a name="HotTierSizeUsedGib" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hotTierSizeUsedGib"></a>

```go
func HotTierSizeUsedGib() *string
```

- *Type:* *string

---

##### `HybridReplicationParameters`<sup>Required</sup> <a name="HybridReplicationParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hybridReplicationParameters"></a>

```go
func HybridReplicationParameters() GoogleNetappVolumeHybridReplicationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference">GoogleNetappVolumeHybridReplicationParametersOutputReference</a>

---

##### `KmsConfig`<sup>Required</sup> <a name="KmsConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kmsConfig"></a>

```go
func KmsConfig() *string
```

- *Type:* *string

---

##### `LargeCapacityConfig`<sup>Required</sup> <a name="LargeCapacityConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacityConfig"></a>

```go
func LargeCapacityConfig() GoogleNetappVolumeLargeCapacityConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference">GoogleNetappVolumeLargeCapacityConfigOutputReference</a>

---

##### `LdapEnabled`<sup>Required</sup> <a name="LdapEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.ldapEnabled"></a>

```go
func LdapEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `MountOptions`<sup>Required</sup> <a name="MountOptions" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.mountOptions"></a>

```go
func MountOptions() GoogleNetappVolumeMountOptionsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList">GoogleNetappVolumeMountOptionsList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `PsaRange`<sup>Required</sup> <a name="PsaRange" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.psaRange"></a>

```go
func PsaRange() *string
```

- *Type:* *string

---

##### `ReplicaZone`<sup>Required</sup> <a name="ReplicaZone" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.replicaZone"></a>

```go
func ReplicaZone() *string
```

- *Type:* *string

---

##### `RestoreParameters`<sup>Required</sup> <a name="RestoreParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParameters"></a>

```go
func RestoreParameters() GoogleNetappVolumeRestoreParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference">GoogleNetappVolumeRestoreParametersOutputReference</a>

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.serviceLevel"></a>

```go
func ServiceLevel() *string
```

- *Type:* *string

---

##### `SnapshotPolicy`<sup>Required</sup> <a name="SnapshotPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicy"></a>

```go
func SnapshotPolicy() GoogleNetappVolumeSnapshotPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference">GoogleNetappVolumeSnapshotPolicyOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.stateDetails"></a>

```go
func StateDetails() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `TieringPolicy`<sup>Required</sup> <a name="TieringPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicy"></a>

```go
func TieringPolicy() GoogleNetappVolumeTieringPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference">GoogleNetappVolumeTieringPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeouts"></a>

```go
func Timeouts() GoogleNetappVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference">GoogleNetappVolumeTimeoutsOutputReference</a>

---

##### `UsedGib`<sup>Required</sup> <a name="UsedGib" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.usedGib"></a>

```go
func UsedGib() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `BackupConfigInput`<sup>Optional</sup> <a name="BackupConfigInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.backupConfigInput"></a>

```go
func BackupConfigInput() GoogleNetappVolumeBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

---

##### `BlockDevicesInput`<sup>Optional</sup> <a name="BlockDevicesInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.blockDevicesInput"></a>

```go
func BlockDevicesInput() interface{}
```

- *Type:* interface{}

---

##### `CacheParametersInput`<sup>Optional</sup> <a name="CacheParametersInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.cacheParametersInput"></a>

```go
func CacheParametersInput() GoogleNetappVolumeCacheParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters">GoogleNetappVolumeCacheParameters</a>

---

##### `CapacityGibInput`<sup>Optional</sup> <a name="CapacityGibInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGibInput"></a>

```go
func CapacityGibInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExportPolicyInput`<sup>Optional</sup> <a name="ExportPolicyInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.exportPolicyInput"></a>

```go
func ExportPolicyInput() GoogleNetappVolumeExportPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

---

##### `HybridReplicationParametersInput`<sup>Optional</sup> <a name="HybridReplicationParametersInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.hybridReplicationParametersInput"></a>

```go
func HybridReplicationParametersInput() GoogleNetappVolumeHybridReplicationParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters">GoogleNetappVolumeHybridReplicationParameters</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KerberosEnabledInput`<sup>Optional</sup> <a name="KerberosEnabledInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabledInput"></a>

```go
func KerberosEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LargeCapacityConfigInput`<sup>Optional</sup> <a name="LargeCapacityConfigInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacityConfigInput"></a>

```go
func LargeCapacityConfigInput() GoogleNetappVolumeLargeCapacityConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfig">GoogleNetappVolumeLargeCapacityConfig</a>

---

##### `LargeCapacityInput`<sup>Optional</sup> <a name="LargeCapacityInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacityInput"></a>

```go
func LargeCapacityInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MultipleEndpointsInput`<sup>Optional</sup> <a name="MultipleEndpointsInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpointsInput"></a>

```go
func MultipleEndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RestoreParametersInput`<sup>Optional</sup> <a name="RestoreParametersInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restoreParametersInput"></a>

```go
func RestoreParametersInput() GoogleNetappVolumeRestoreParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

---

##### `RestrictedActionsInput`<sup>Optional</sup> <a name="RestrictedActionsInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActionsInput"></a>

```go
func RestrictedActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityStyleInput`<sup>Optional</sup> <a name="SecurityStyleInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyleInput"></a>

```go
func SecurityStyleInput() *string
```

- *Type:* *string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareNameInput"></a>

```go
func ShareNameInput() *string
```

- *Type:* *string

---

##### `SmbSettingsInput`<sup>Optional</sup> <a name="SmbSettingsInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettingsInput"></a>

```go
func SmbSettingsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotDirectoryInput`<sup>Optional</sup> <a name="SnapshotDirectoryInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectoryInput"></a>

```go
func SnapshotDirectoryInput() interface{}
```

- *Type:* interface{}

---

##### `SnapshotPolicyInput`<sup>Optional</sup> <a name="SnapshotPolicyInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotPolicyInput"></a>

```go
func SnapshotPolicyInput() GoogleNetappVolumeSnapshotPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePoolInput"></a>

```go
func StoragePoolInput() *string
```

- *Type:* *string

---

##### `ThroughputMibpsInput`<sup>Optional</sup> <a name="ThroughputMibpsInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.throughputMibpsInput"></a>

```go
func ThroughputMibpsInput() *f64
```

- *Type:* *f64

---

##### `TieringPolicyInput`<sup>Optional</sup> <a name="TieringPolicyInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tieringPolicyInput"></a>

```go
func TieringPolicyInput() GoogleNetappVolumeTieringPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UnixPermissionsInput`<sup>Optional</sup> <a name="UnixPermissionsInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissionsInput"></a>

```go
func UnixPermissionsInput() *string
```

- *Type:* *string

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.capacityGib"></a>

```go
func CapacityGib() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KerberosEnabled`<sup>Required</sup> <a name="KerberosEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.kerberosEnabled"></a>

```go
func KerberosEnabled() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LargeCapacity`<sup>Required</sup> <a name="LargeCapacity" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.largeCapacity"></a>

```go
func LargeCapacity() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MultipleEndpoints`<sup>Required</sup> <a name="MultipleEndpoints" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.multipleEndpoints"></a>

```go
func MultipleEndpoints() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictedActions`<sup>Required</sup> <a name="RestrictedActions" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.restrictedActions"></a>

```go
func RestrictedActions() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityStyle`<sup>Required</sup> <a name="SecurityStyle" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.securityStyle"></a>

```go
func SecurityStyle() *string
```

- *Type:* *string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.shareName"></a>

```go
func ShareName() *string
```

- *Type:* *string

---

##### `SmbSettings`<sup>Required</sup> <a name="SmbSettings" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.smbSettings"></a>

```go
func SmbSettings() *[]*string
```

- *Type:* *[]*string

---

##### `SnapshotDirectory`<sup>Required</sup> <a name="SnapshotDirectory" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.snapshotDirectory"></a>

```go
func SnapshotDirectory() interface{}
```

- *Type:* interface{}

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.storagePool"></a>

```go
func StoragePool() *string
```

- *Type:* *string

---

##### `ThroughputMibps`<sup>Required</sup> <a name="ThroughputMibps" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.throughputMibps"></a>

```go
func ThroughputMibps() *f64
```

- *Type:* *f64

---

##### `UnixPermissions`<sup>Required</sup> <a name="UnixPermissions" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.unixPermissions"></a>

```go
func UnixPermissions() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetappVolumeBackupConfig <a name="GoogleNetappVolumeBackupConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeBackupConfig {
	BackupPolicies: *[]*string,
	BackupVault: *string,
	ScheduledBackupEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupPolicies">BackupPolicies</a></code> | <code>*[]*string</code> | Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupVault">BackupVault</a></code> | <code>*string</code> | ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.scheduledBackupEnabled">ScheduledBackupEnabled</a></code> | <code>interface{}</code> | When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified. |

---

##### `BackupPolicies`<sup>Optional</sup> <a name="BackupPolicies" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupPolicies"></a>

```go
BackupPolicies *[]*string
```

- *Type:* *[]*string

Specify a single backup policy ID for scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupPolicies/{{backupPolicyName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#backup_policies GoogleNetappVolume#backup_policies}

---

##### `BackupVault`<sup>Optional</sup> <a name="BackupVault" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.backupVault"></a>

```go
BackupVault *string
```

- *Type:* *string

ID of the backup vault to use. A backup vault is reqired to create manual or scheduled backups. Format: 'projects/{{projectId}}/locations/{{location}}/backupVaults/{{backupVaultName}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#backup_vault GoogleNetappVolume#backup_vault}

---

##### `ScheduledBackupEnabled`<sup>Optional</sup> <a name="ScheduledBackupEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig.property.scheduledBackupEnabled"></a>

```go
ScheduledBackupEnabled interface{}
```

- *Type:* interface{}

When set to true, scheduled backup is enabled on the volume. Omit if no backup_policy is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#scheduled_backup_enabled GoogleNetappVolume#scheduled_backup_enabled}

---

### GoogleNetappVolumeBlockDevices <a name="GoogleNetappVolumeBlockDevices" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevices.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeBlockDevices {
	OsType: *string,
	HostGroups: *[]*string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevices.property.osType">OsType</a></code> | <code>*string</code> | The OS type of the volume. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevices.property.hostGroups">HostGroups</a></code> | <code>*[]*string</code> | A list of host groups that identify hosts that can mount the block volume. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevices.property.name">Name</a></code> | <code>*string</code> | User-defined name for the block device, unique within the Volume. |

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevices.property.osType"></a>

```go
OsType *string
```

- *Type:* *string

The OS type of the volume.

This field can't be changed after the block device is created. Possible values: ["LINUX", "WINDOWS", "ESXI"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#os_type GoogleNetappVolume#os_type}

---

##### `HostGroups`<sup>Optional</sup> <a name="HostGroups" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevices.property.hostGroups"></a>

```go
HostGroups *[]*string
```

- *Type:* *[]*string

A list of host groups that identify hosts that can mount the block volume.

Format:
'projects/{project_id}/locations/{location}/hostGroups/{host_group_id}'
This field can be updated after the block device is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#host_groups GoogleNetappVolume#host_groups}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevices.property.name"></a>

```go
Name *string
```

- *Type:* *string

User-defined name for the block device, unique within the Volume.

In case
no user input is provided, name will be autogenerated in the backend.
The name must meet the following requirements:

* Be between 1 and 255 characters long.
* Contain only uppercase or lowercase letters (A-Z, a-z), numbers (0-9),
  and the following special characters: "-", "_", "}", "{", ".".
* Spaces are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#name GoogleNetappVolume#name}

---

### GoogleNetappVolumeCacheParameters <a name="GoogleNetappVolumeCacheParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeCacheParameters {
	CacheConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfig,
	EnableGlobalFileLock: interface{},
	PeerClusterName: *string,
	PeeringCommandExpiryTime: *string,
	PeerIpAddresses: *[]*string,
	PeerSvmName: *string,
	PeerVolumeName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.cacheConfig">CacheConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfig">GoogleNetappVolumeCacheParametersCacheConfig</a></code> | cache_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.enableGlobalFileLock">EnableGlobalFileLock</a></code> | <code>interface{}</code> | Optional. Field indicating whether cache volume as global file lock enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.peerClusterName">PeerClusterName</a></code> | <code>*string</code> | Required. Name of the origin volume's ONTAP cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.peeringCommandExpiryTime">PeeringCommandExpiryTime</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.peerIpAddresses">PeerIpAddresses</a></code> | <code>*[]*string</code> | Required. List of IC LIF addresses of the origin volume's ONTAP cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.peerSvmName">PeerSvmName</a></code> | <code>*string</code> | Required. Name of the origin volume's SVM. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.peerVolumeName">PeerVolumeName</a></code> | <code>*string</code> | Required. Name of the origin volume for the cache volume. |

---

##### `CacheConfig`<sup>Optional</sup> <a name="CacheConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.cacheConfig"></a>

```go
CacheConfig GoogleNetappVolumeCacheParametersCacheConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfig">GoogleNetappVolumeCacheParametersCacheConfig</a>

cache_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#cache_config GoogleNetappVolume#cache_config}

---

##### `EnableGlobalFileLock`<sup>Optional</sup> <a name="EnableGlobalFileLock" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.enableGlobalFileLock"></a>

```go
EnableGlobalFileLock interface{}
```

- *Type:* interface{}

Optional. Field indicating whether cache volume as global file lock enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#enable_global_file_lock GoogleNetappVolume#enable_global_file_lock}

---

##### `PeerClusterName`<sup>Optional</sup> <a name="PeerClusterName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.peerClusterName"></a>

```go
PeerClusterName *string
```

- *Type:* *string

Required. Name of the origin volume's ONTAP cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#peer_cluster_name GoogleNetappVolume#peer_cluster_name}

---

##### `PeeringCommandExpiryTime`<sup>Optional</sup> <a name="PeeringCommandExpiryTime" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.peeringCommandExpiryTime"></a>

```go
PeeringCommandExpiryTime *string
```

- *Type:* *string

Optional.

Expiration time for the peering command to be executed on user's ONTAP. A timestamp in RFC3339 UTC "Zulu" format. Examples: "2023-06-22T09:13:01.617Z".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#peering_command_expiry_time GoogleNetappVolume#peering_command_expiry_time}

---

##### `PeerIpAddresses`<sup>Optional</sup> <a name="PeerIpAddresses" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.peerIpAddresses"></a>

```go
PeerIpAddresses *[]*string
```

- *Type:* *[]*string

Required. List of IC LIF addresses of the origin volume's ONTAP cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#peer_ip_addresses GoogleNetappVolume#peer_ip_addresses}

---

##### `PeerSvmName`<sup>Optional</sup> <a name="PeerSvmName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.peerSvmName"></a>

```go
PeerSvmName *string
```

- *Type:* *string

Required. Name of the origin volume's SVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#peer_svm_name GoogleNetappVolume#peer_svm_name}

---

##### `PeerVolumeName`<sup>Optional</sup> <a name="PeerVolumeName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters.property.peerVolumeName"></a>

```go
PeerVolumeName *string
```

- *Type:* *string

Required. Name of the origin volume for the cache volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#peer_volume_name GoogleNetappVolume#peer_volume_name}

---

### GoogleNetappVolumeCacheParametersCacheConfig <a name="GoogleNetappVolumeCacheParametersCacheConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeCacheParametersCacheConfig {
	CifsChangeNotifyEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfig.property.cifsChangeNotifyEnabled">CifsChangeNotifyEnabled</a></code> | <code>interface{}</code> | Optional. Flag indicating whether a CIFS change notification is enabled for the FlexCache volume. |

---

##### `CifsChangeNotifyEnabled`<sup>Optional</sup> <a name="CifsChangeNotifyEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfig.property.cifsChangeNotifyEnabled"></a>

```go
CifsChangeNotifyEnabled interface{}
```

- *Type:* interface{}

Optional. Flag indicating whether a CIFS change notification is enabled for the FlexCache volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#cifs_change_notify_enabled GoogleNetappVolume#cifs_change_notify_enabled}

---

### GoogleNetappVolumeConfig <a name="GoogleNetappVolumeConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityGib: *string,
	Location: *string,
	Name: *string,
	Protocols: *[]*string,
	StoragePool: *string,
	BackupConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeBackupConfig,
	BlockDevices: interface{},
	CacheParameters: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeCacheParameters,
	DeletionPolicy: *string,
	Description: *string,
	ExportPolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeExportPolicy,
	HybridReplicationParameters: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters,
	Id: *string,
	KerberosEnabled: interface{},
	Labels: *map[string]*string,
	LargeCapacity: interface{},
	LargeCapacityConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfig,
	MultipleEndpoints: interface{},
	Project: *string,
	RestoreParameters: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeRestoreParameters,
	RestrictedActions: *[]*string,
	SecurityStyle: *string,
	ShareName: *string,
	SmbSettings: *[]*string,
	SnapshotDirectory: interface{},
	SnapshotPolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy,
	ThroughputMibps: *f64,
	TieringPolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeTieringPolicy,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeTimeouts,
	UnixPermissions: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.capacityGib">CapacityGib</a></code> | <code>*string</code> | Capacity of the volume (in GiB). |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.location">Location</a></code> | <code>*string</code> | Name of the pool location. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.name">Name</a></code> | <code>*string</code> | The name of the volume. Needs to be unique per location. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.protocols">Protocols</a></code> | <code>*[]*string</code> | The protocol of the volume. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.storagePool">StoragePool</a></code> | <code>*string</code> | Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.backupConfig">BackupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | backup_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.blockDevices">BlockDevices</a></code> | <code>interface{}</code> | block_devices block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.cacheParameters">CacheParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters">GoogleNetappVolumeCacheParameters</a></code> | cache_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/netapp_volume.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.exportPolicy">ExportPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | export_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.hybridReplicationParameters">HybridReplicationParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters">GoogleNetappVolumeHybridReplicationParameters</a></code> | hybrid_replication_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#id GoogleNetappVolume#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.kerberosEnabled">KerberosEnabled</a></code> | <code>interface{}</code> | Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p). |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.largeCapacity">LargeCapacity</a></code> | <code>interface{}</code> | Optional. Flag indicating if the volume will be a large capacity volume or a regular volume. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.largeCapacityConfig">LargeCapacityConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfig">GoogleNetappVolumeLargeCapacityConfig</a></code> | large_capacity_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.multipleEndpoints">MultipleEndpoints</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#project GoogleNetappVolume#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restoreParameters">RestoreParameters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | restore_parameters block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restrictedActions">RestrictedActions</a></code> | <code>*[]*string</code> | List of actions that are restricted on this volume. Possible values: ["DELETE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.securityStyle">SecurityStyle</a></code> | <code>*string</code> | Security Style of the Volume. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.shareName">ShareName</a></code> | <code>*string</code> | Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.smbSettings">SmbSettings</a></code> | <code>*[]*string</code> | Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotDirectory">SnapshotDirectory</a></code> | <code>interface{}</code> | If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotPolicy">SnapshotPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | snapshot_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.throughputMibps">ThroughputMibps</a></code> | <code>*f64</code> | Optional. Custom Performance Total Throughput of the pool (in MiB/s). |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.tieringPolicy">TieringPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.unixPermissions">UnixPermissions</a></code> | <code>*string</code> | Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.capacityGib"></a>

```go
CapacityGib *string
```

- *Type:* *string

Capacity of the volume (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#capacity_gib GoogleNetappVolume#capacity_gib}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Name of the pool location.

Usually a region name, expect for some STANDARD service level pools which require a zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#location GoogleNetappVolume#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#name GoogleNetappVolume#name}

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

The protocol of the volume.

Allowed combinations are '['NFSV3']', '['NFSV4']', '['SMB']', '['NFSV3', 'NFSV4']', '['SMB', 'NFSV3']' and '['SMB', 'NFSV4']'. Possible values: ["NFSV3", "NFSV4", "SMB", "ISCSI"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#protocols GoogleNetappVolume#protocols}

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.storagePool"></a>

```go
StoragePool *string
```

- *Type:* *string

Name of the storage pool to create the volume in. Pool needs enough spare capacity to accommodate the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#storage_pool GoogleNetappVolume#storage_pool}

---

##### `BackupConfig`<sup>Optional</sup> <a name="BackupConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.backupConfig"></a>

```go
BackupConfig GoogleNetappVolumeBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#backup_config GoogleNetappVolume#backup_config}

---

##### `BlockDevices`<sup>Optional</sup> <a name="BlockDevices" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.blockDevices"></a>

```go
BlockDevices interface{}
```

- *Type:* interface{}

block_devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#block_devices GoogleNetappVolume#block_devices}

---

##### `CacheParameters`<sup>Optional</sup> <a name="CacheParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.cacheParameters"></a>

```go
CacheParameters GoogleNetappVolumeCacheParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters">GoogleNetappVolumeCacheParameters</a>

cache_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#cache_parameters GoogleNetappVolume#cache_parameters}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/netapp_volume.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#deletion_policy GoogleNetappVolume#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#description GoogleNetappVolume#description}

---

##### `ExportPolicy`<sup>Optional</sup> <a name="ExportPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.exportPolicy"></a>

```go
ExportPolicy GoogleNetappVolumeExportPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#export_policy GoogleNetappVolume#export_policy}

---

##### `HybridReplicationParameters`<sup>Optional</sup> <a name="HybridReplicationParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.hybridReplicationParameters"></a>

```go
HybridReplicationParameters GoogleNetappVolumeHybridReplicationParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters">GoogleNetappVolumeHybridReplicationParameters</a>

hybrid_replication_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#hybrid_replication_parameters GoogleNetappVolume#hybrid_replication_parameters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#id GoogleNetappVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KerberosEnabled`<sup>Optional</sup> <a name="KerberosEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.kerberosEnabled"></a>

```go
KerberosEnabled interface{}
```

- *Type:* interface{}

Flag indicating if the volume is a kerberos volume or not, export policy rules control kerberos security modes (krb5, krb5i, krb5p).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#kerberos_enabled GoogleNetappVolume#kerberos_enabled}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#labels GoogleNetappVolume#labels}

---

##### `LargeCapacity`<sup>Optional</sup> <a name="LargeCapacity" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.largeCapacity"></a>

```go
LargeCapacity interface{}
```

- *Type:* interface{}

Optional. Flag indicating if the volume will be a large capacity volume or a regular volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#large_capacity GoogleNetappVolume#large_capacity}

---

##### `LargeCapacityConfig`<sup>Optional</sup> <a name="LargeCapacityConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.largeCapacityConfig"></a>

```go
LargeCapacityConfig GoogleNetappVolumeLargeCapacityConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfig">GoogleNetappVolumeLargeCapacityConfig</a>

large_capacity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#large_capacity_config GoogleNetappVolume#large_capacity_config}

---

##### `MultipleEndpoints`<sup>Optional</sup> <a name="MultipleEndpoints" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.multipleEndpoints"></a>

```go
MultipleEndpoints interface{}
```

- *Type:* interface{}

Optional.

Flag indicating if the volume will have an IP address per node for volumes supporting multiple IP endpoints.
Only the volume with largeCapacity will be allowed to have multiple endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#multiple_endpoints GoogleNetappVolume#multiple_endpoints}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#project GoogleNetappVolume#project}.

---

##### `RestoreParameters`<sup>Optional</sup> <a name="RestoreParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restoreParameters"></a>

```go
RestoreParameters GoogleNetappVolumeRestoreParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

restore_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#restore_parameters GoogleNetappVolume#restore_parameters}

---

##### `RestrictedActions`<sup>Optional</sup> <a name="RestrictedActions" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.restrictedActions"></a>

```go
RestrictedActions *[]*string
```

- *Type:* *[]*string

List of actions that are restricted on this volume. Possible values: ["DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#restricted_actions GoogleNetappVolume#restricted_actions}

---

##### `SecurityStyle`<sup>Optional</sup> <a name="SecurityStyle" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.securityStyle"></a>

```go
SecurityStyle *string
```

- *Type:* *string

Security Style of the Volume.

Use UNIX to use UNIX or NFSV4 ACLs for file permissions.
Use NTFS to use NTFS ACLs for file permissions. Can only be set for volumes which use SMB together with NFS as protocol. Possible values: ["NTFS", "UNIX"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#security_style GoogleNetappVolume#security_style}

---

##### `ShareName`<sup>Optional</sup> <a name="ShareName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.shareName"></a>

```go
ShareName *string
```

- *Type:* *string

Share name (SMB) or export path (NFS) of the volume. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#share_name GoogleNetappVolume#share_name}

---

##### `SmbSettings`<sup>Optional</sup> <a name="SmbSettings" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.smbSettings"></a>

```go
SmbSettings *[]*string
```

- *Type:* *[]*string

Settings for volumes with SMB access. Possible values: ["ENCRYPT_DATA", "BROWSABLE", "CHANGE_NOTIFY", "NON_BROWSABLE", "OPLOCKS", "SHOW_SNAPSHOT", "SHOW_PREVIOUS_VERSIONS", "ACCESS_BASED_ENUMERATION", "CONTINUOUSLY_AVAILABLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#smb_settings GoogleNetappVolume#smb_settings}

---

##### `SnapshotDirectory`<sup>Optional</sup> <a name="SnapshotDirectory" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotDirectory"></a>

```go
SnapshotDirectory interface{}
```

- *Type:* interface{}

If enabled, a NFS volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots. Will enable "Previous Versions" support for SMB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#snapshot_directory GoogleNetappVolume#snapshot_directory}

---

##### `SnapshotPolicy`<sup>Optional</sup> <a name="SnapshotPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.snapshotPolicy"></a>

```go
SnapshotPolicy GoogleNetappVolumeSnapshotPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#snapshot_policy GoogleNetappVolume#snapshot_policy}

---

##### `ThroughputMibps`<sup>Optional</sup> <a name="ThroughputMibps" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.throughputMibps"></a>

```go
ThroughputMibps *f64
```

- *Type:* *f64

Optional. Custom Performance Total Throughput of the pool (in MiB/s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#throughput_mibps GoogleNetappVolume#throughput_mibps}

---

##### `TieringPolicy`<sup>Optional</sup> <a name="TieringPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.tieringPolicy"></a>

```go
TieringPolicy GoogleNetappVolumeTieringPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#tiering_policy GoogleNetappVolume#tiering_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.timeouts"></a>

```go
Timeouts GoogleNetappVolumeTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts">GoogleNetappVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#timeouts GoogleNetappVolume#timeouts}

---

##### `UnixPermissions`<sup>Optional</sup> <a name="UnixPermissions" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeConfig.property.unixPermissions"></a>

```go
UnixPermissions *string
```

- *Type:* *string

Unix permission the mount point will be created with. Default is 0770. Applicable for UNIX security style volumes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#unix_permissions GoogleNetappVolume#unix_permissions}

---

### GoogleNetappVolumeExportPolicy <a name="GoogleNetappVolumeExportPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeExportPolicy {
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#rules GoogleNetappVolume#rules}

---

### GoogleNetappVolumeExportPolicyRules <a name="GoogleNetappVolumeExportPolicyRules" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeExportPolicyRules {
	AccessType: *string,
	AllowedClients: *string,
	AnonUid: *f64,
	HasRootAccess: *string,
	Kerberos5IReadOnly: interface{},
	Kerberos5IReadWrite: interface{},
	Kerberos5PReadOnly: interface{},
	Kerberos5PReadWrite: interface{},
	Kerberos5ReadOnly: interface{},
	Kerberos5ReadWrite: interface{},
	Nfsv3: interface{},
	Nfsv4: interface{},
	SquashMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.accessType">AccessType</a></code> | <code>*string</code> | Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.allowedClients">AllowedClients</a></code> | <code>*string</code> | Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.anonUid">AnonUid</a></code> | <code>*f64</code> | An integer representing the anonymous user ID. Range is 0 to 4294967295. Required when 'squash_mode' is 'ALL_SQUASH'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.hasRootAccess">HasRootAccess</a></code> | <code>*string</code> | If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534). |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadOnly">Kerberos5IReadOnly</a></code> | <code>interface{}</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadWrite">Kerberos5IReadWrite</a></code> | <code>interface{}</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadOnly">Kerberos5PReadOnly</a></code> | <code>interface{}</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadWrite">Kerberos5PReadWrite</a></code> | <code>interface{}</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadOnly">Kerberos5ReadOnly</a></code> | <code>interface{}</code> | If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadWrite">Kerberos5ReadWrite</a></code> | <code>interface{}</code> | If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv3">Nfsv3</a></code> | <code>interface{}</code> | Enable to apply the export rule to NFSV3 clients. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv4">Nfsv4</a></code> | <code>interface{}</code> | Enable to apply the export rule to NFSV4.1 clients. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.squashMode">SquashMode</a></code> | <code>*string</code> | SquashMode defines how remote user privileges are restricted when accessing an NFS export. |

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.accessType"></a>

```go
AccessType *string
```

- *Type:* *string

Defines the access type for clients matching the 'allowedClients' specification. Possible values: ["READ_ONLY", "READ_WRITE", "READ_NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#access_type GoogleNetappVolume#access_type}

---

##### `AllowedClients`<sup>Optional</sup> <a name="AllowedClients" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.allowedClients"></a>

```go
AllowedClients *string
```

- *Type:* *string

Defines the client ingress specification (allowed clients) as a comma separated list with IPv4 CIDRs or IPv4 host addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#allowed_clients GoogleNetappVolume#allowed_clients}

---

##### `AnonUid`<sup>Optional</sup> <a name="AnonUid" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.anonUid"></a>

```go
AnonUid *f64
```

- *Type:* *f64

An integer representing the anonymous user ID. Range is 0 to 4294967295. Required when 'squash_mode' is 'ALL_SQUASH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#anon_uid GoogleNetappVolume#anon_uid}

---

##### `HasRootAccess`<sup>Optional</sup> <a name="HasRootAccess" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.hasRootAccess"></a>

```go
HasRootAccess *string
```

- *Type:* *string

If enabled, the root user (UID = 0) of the specified clients doesn't get mapped to nobody (UID = 65534).

This is also known as no_root_squash.
Use either squash_mode or has_root_access, but never both at the same time. These parameters are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#has_root_access GoogleNetappVolume#has_root_access}

---

##### `Kerberos5IReadOnly`<sup>Optional</sup> <a name="Kerberos5IReadOnly" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadOnly"></a>

```go
Kerberos5IReadOnly interface{}
```

- *Type:* interface{}

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#kerberos5i_read_only GoogleNetappVolume#kerberos5i_read_only}

---

##### `Kerberos5IReadWrite`<sup>Optional</sup> <a name="Kerberos5IReadWrite" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5IReadWrite"></a>

```go
Kerberos5IReadWrite interface{}
```

- *Type:* interface{}

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'integrity' kerberos security mode. The 'kerberos5iReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#kerberos5i_read_write GoogleNetappVolume#kerberos5i_read_write}

---

##### `Kerberos5PReadOnly`<sup>Optional</sup> <a name="Kerberos5PReadOnly" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadOnly"></a>

```go
Kerberos5PReadOnly interface{}
```

- *Type:* interface{}

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#kerberos5p_read_only GoogleNetappVolume#kerberos5p_read_only}

---

##### `Kerberos5PReadWrite`<sup>Optional</sup> <a name="Kerberos5PReadWrite" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5PReadWrite"></a>

```go
Kerberos5PReadWrite interface{}
```

- *Type:* interface{}

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'privacy' kerberos security mode. The 'kerberos5pReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#kerberos5p_read_write GoogleNetappVolume#kerberos5p_read_write}

---

##### `Kerberos5ReadOnly`<sup>Optional</sup> <a name="Kerberos5ReadOnly" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadOnly"></a>

```go
Kerberos5ReadOnly interface{}
```

- *Type:* interface{}

If enabled (true) the rule defines a read only access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#kerberos5_read_only GoogleNetappVolume#kerberos5_read_only}

---

##### `Kerberos5ReadWrite`<sup>Optional</sup> <a name="Kerberos5ReadWrite" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.kerberos5ReadWrite"></a>

```go
Kerberos5ReadWrite interface{}
```

- *Type:* interface{}

If enabled (true) the rule defines read and write access for clients matching the 'allowedClients' specification.

It enables nfs clients to mount using 'authentication' kerberos security mode. The 'kerberos5ReadOnly' value is ignored if this is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#kerberos5_read_write GoogleNetappVolume#kerberos5_read_write}

---

##### `Nfsv3`<sup>Optional</sup> <a name="Nfsv3" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv3"></a>

```go
Nfsv3 interface{}
```

- *Type:* interface{}

Enable to apply the export rule to NFSV3 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#nfsv3 GoogleNetappVolume#nfsv3}

---

##### `Nfsv4`<sup>Optional</sup> <a name="Nfsv4" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.nfsv4"></a>

```go
Nfsv4 interface{}
```

- *Type:* interface{}

Enable to apply the export rule to NFSV4.1 clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#nfsv4 GoogleNetappVolume#nfsv4}

---

##### `SquashMode`<sup>Optional</sup> <a name="SquashMode" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRules.property.squashMode"></a>

```go
SquashMode *string
```

- *Type:* *string

SquashMode defines how remote user privileges are restricted when accessing an NFS export.

It controls how the user identities (like root) are mapped to anonymous users to limit access and enforce security.
Use either squash_mode or has_root_access, but never both at the same time. These parameters are mutually exclusive. Possible values: ["SQUASH_MODE_UNSPECIFIED", "NO_ROOT_SQUASH", "ROOT_SQUASH", "ALL_SQUASH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#squash_mode GoogleNetappVolume#squash_mode}

---

### GoogleNetappVolumeHybridReplicationParameters <a name="GoogleNetappVolumeHybridReplicationParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeHybridReplicationParameters {
	ClusterLocation: *string,
	Description: *string,
	HybridReplicationType: *string,
	Labels: *map[string]*string,
	LargeVolumeConstituentCount: *f64,
	PeerClusterName: *string,
	PeerIpAddresses: *[]*string,
	PeerSvmName: *string,
	PeerVolumeName: *string,
	Replication: *string,
	ReplicationSchedule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.clusterLocation">ClusterLocation</a></code> | <code>*string</code> | Optional. Name of source cluster location associated with the replication. This is a free-form field for display purposes only. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.description">Description</a></code> | <code>*string</code> | Optional. Description of the replication. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.hybridReplicationType">HybridReplicationType</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.largeVolumeConstituentCount">LargeVolumeConstituentCount</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.peerClusterName">PeerClusterName</a></code> | <code>*string</code> | Required. Name of the ONTAP source cluster to be peered with NetApp Volumes. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.peerIpAddresses">PeerIpAddresses</a></code> | <code>*[]*string</code> | Required. List of all intercluster LIF IP addresses of the ONTAP source cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.peerSvmName">PeerSvmName</a></code> | <code>*string</code> | Required. Name of the ONTAP source vserver SVM to be peered with NetApp Volumes. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.peerVolumeName">PeerVolumeName</a></code> | <code>*string</code> | Required. Name of the ONTAP source volume to be replicated to NetApp Volumes destination volume. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.replication">Replication</a></code> | <code>*string</code> | Required. Desired name for the replication of this volume. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.replicationSchedule">ReplicationSchedule</a></code> | <code>*string</code> | Optional. Replication Schedule for the replication created. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"]. |

---

##### `ClusterLocation`<sup>Optional</sup> <a name="ClusterLocation" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.clusterLocation"></a>

```go
ClusterLocation *string
```

- *Type:* *string

Optional. Name of source cluster location associated with the replication. This is a free-form field for display purposes only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#cluster_location GoogleNetappVolume#cluster_location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Description of the replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#description GoogleNetappVolume#description}

---

##### `HybridReplicationType`<sup>Optional</sup> <a name="HybridReplicationType" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.hybridReplicationType"></a>

```go
HybridReplicationType *string
```

- *Type:* *string

Optional.

Type of the hybrid replication. Use 'MIGRATION' to create a volume migration
and 'ONPREM_REPLICATION' to create an external replication.
Other values are read-only. 'REVERSE_ONPREM_REPLICATION' is used to represent an external
replication which got reversed. Default is 'MIGRATION'. Possible values: ["MIGRATION", "CONTINUOUS_REPLICATION", "ONPREM_REPLICATION", "REVERSE_ONPREM_REPLICATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#hybrid_replication_type GoogleNetappVolume#hybrid_replication_type}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional.

Labels to be added to the replication as the key value pairs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#labels GoogleNetappVolume#labels}

---

##### `LargeVolumeConstituentCount`<sup>Optional</sup> <a name="LargeVolumeConstituentCount" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.largeVolumeConstituentCount"></a>

```go
LargeVolumeConstituentCount *f64
```

- *Type:* *f64

Optional.

If the source is a FlexGroup volume, this field needs to match the number of constituents in the FlexGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#large_volume_constituent_count GoogleNetappVolume#large_volume_constituent_count}

---

##### `PeerClusterName`<sup>Optional</sup> <a name="PeerClusterName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.peerClusterName"></a>

```go
PeerClusterName *string
```

- *Type:* *string

Required. Name of the ONTAP source cluster to be peered with NetApp Volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#peer_cluster_name GoogleNetappVolume#peer_cluster_name}

---

##### `PeerIpAddresses`<sup>Optional</sup> <a name="PeerIpAddresses" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.peerIpAddresses"></a>

```go
PeerIpAddresses *[]*string
```

- *Type:* *[]*string

Required. List of all intercluster LIF IP addresses of the ONTAP source cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#peer_ip_addresses GoogleNetappVolume#peer_ip_addresses}

---

##### `PeerSvmName`<sup>Optional</sup> <a name="PeerSvmName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.peerSvmName"></a>

```go
PeerSvmName *string
```

- *Type:* *string

Required. Name of the ONTAP source vserver SVM to be peered with NetApp Volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#peer_svm_name GoogleNetappVolume#peer_svm_name}

---

##### `PeerVolumeName`<sup>Optional</sup> <a name="PeerVolumeName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.peerVolumeName"></a>

```go
PeerVolumeName *string
```

- *Type:* *string

Required. Name of the ONTAP source volume to be replicated to NetApp Volumes destination volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#peer_volume_name GoogleNetappVolume#peer_volume_name}

---

##### `Replication`<sup>Optional</sup> <a name="Replication" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.replication"></a>

```go
Replication *string
```

- *Type:* *string

Required. Desired name for the replication of this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#replication GoogleNetappVolume#replication}

---

##### `ReplicationSchedule`<sup>Optional</sup> <a name="ReplicationSchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters.property.replicationSchedule"></a>

```go
ReplicationSchedule *string
```

- *Type:* *string

Optional. Replication Schedule for the replication created. Possible values: ["EVERY_10_MINUTES", "HOURLY", "DAILY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#replication_schedule GoogleNetappVolume#replication_schedule}

---

### GoogleNetappVolumeLargeCapacityConfig <a name="GoogleNetappVolumeLargeCapacityConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeLargeCapacityConfig {
	ConstituentCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfig.property.constituentCount">ConstituentCount</a></code> | <code>*f64</code> | The number of internal constituents (e.g., FlexVols) for this large volume. The minimum number of constituents is 2. |

---

##### `ConstituentCount`<sup>Optional</sup> <a name="ConstituentCount" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfig.property.constituentCount"></a>

```go
ConstituentCount *f64
```

- *Type:* *f64

The number of internal constituents (e.g., FlexVols) for this large volume. The minimum number of constituents is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#constituent_count GoogleNetappVolume#constituent_count}

---

### GoogleNetappVolumeMountOptions <a name="GoogleNetappVolumeMountOptions" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeMountOptions {

}
```


### GoogleNetappVolumeRestoreParameters <a name="GoogleNetappVolumeRestoreParameters" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeRestoreParameters {
	SourceBackup: *string,
	SourceSnapshot: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceBackup">SourceBackup</a></code> | <code>*string</code> | Full name of the backup to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'. |

---

##### `SourceBackup`<sup>Optional</sup> <a name="SourceBackup" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceBackup"></a>

```go
SourceBackup *string
```

- *Type:* *string

Full name of the backup to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/backupVaults/{{backupVaultId}}/backups/{{backup}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#source_backup GoogleNetappVolume#source_backup}

---

##### `SourceSnapshot`<sup>Optional</sup> <a name="SourceSnapshot" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters.property.sourceSnapshot"></a>

```go
SourceSnapshot *string
```

- *Type:* *string

Full name of the snapshot to use for creating this volume. 'source_snapshot' and 'source_backup' cannot be used simultaneously. Format: 'projects/{{project}}/locations/{{location}}/volumes/{{volume}}/snapshots/{{snapshot}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#source_snapshot GoogleNetappVolume#source_snapshot}

---

### GoogleNetappVolumeSnapshotPolicy <a name="GoogleNetappVolumeSnapshotPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeSnapshotPolicy {
	DailySchedule: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule,
	Enabled: interface{},
	HourlySchedule: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule,
	MonthlySchedule: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule,
	WeeklySchedule: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables automated snapshot creation according to defined schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `DailySchedule`<sup>Optional</sup> <a name="DailySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.dailySchedule"></a>

```go
DailySchedule GoogleNetappVolumeSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#daily_schedule GoogleNetappVolume#daily_schedule}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables automated snapshot creation according to defined schedule.

Default is false.
To disable automatic snapshot creation you have to remove the whole snapshot_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#enabled GoogleNetappVolume#enabled}

---

##### `HourlySchedule`<sup>Optional</sup> <a name="HourlySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.hourlySchedule"></a>

```go
HourlySchedule GoogleNetappVolumeSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#hourly_schedule GoogleNetappVolume#hourly_schedule}

---

##### `MonthlySchedule`<sup>Optional</sup> <a name="MonthlySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.monthlySchedule"></a>

```go
MonthlySchedule GoogleNetappVolumeSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#monthly_schedule GoogleNetappVolume#monthly_schedule}

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy.property.weeklySchedule"></a>

```go
WeeklySchedule GoogleNetappVolumeSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#weekly_schedule GoogleNetappVolume#weekly_schedule}

---

### GoogleNetappVolumeSnapshotPolicyDailySchedule <a name="GoogleNetappVolumeSnapshotPolicyDailySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeSnapshotPolicyDailySchedule {
	SnapshotsToKeep: *f64,
	Hour: *f64,
	Minute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | The maximum number of snapshots to keep for the daily schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.minute">Minute</a></code> | <code>*f64</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.snapshotsToKeep"></a>

```go
SnapshotsToKeep *f64
```

- *Type:* *f64

The maximum number of snapshots to keep for the daily schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule.property.minute"></a>

```go
Minute *f64
```

- *Type:* *f64

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeSnapshotPolicyHourlySchedule <a name="GoogleNetappVolumeSnapshotPolicyHourlySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule {
	SnapshotsToKeep: *f64,
	Minute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | The maximum number of snapshots to keep for the hourly schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.minute">Minute</a></code> | <code>*f64</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.snapshotsToKeep"></a>

```go
SnapshotsToKeep *f64
```

- *Type:* *f64

The maximum number of snapshots to keep for the hourly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule.property.minute"></a>

```go
Minute *f64
```

- *Type:* *f64

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeSnapshotPolicyMonthlySchedule <a name="GoogleNetappVolumeSnapshotPolicyMonthlySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule {
	SnapshotsToKeep: *f64,
	DaysOfMonth: *string,
	Hour: *f64,
	Minute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | The maximum number of snapshots to keep for the monthly schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth">DaysOfMonth</a></code> | <code>*string</code> | Set the day or days of the month to make a snapshot (1-31). |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.minute">Minute</a></code> | <code>*f64</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.snapshotsToKeep"></a>

```go
SnapshotsToKeep *f64
```

- *Type:* *f64

The maximum number of snapshots to keep for the monthly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `DaysOfMonth`<sup>Optional</sup> <a name="DaysOfMonth" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.daysOfMonth"></a>

```go
DaysOfMonth *string
```

- *Type:* *string

Set the day or days of the month to make a snapshot (1-31).

Accepts a comma separated number of days. Defaults to '1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#days_of_month GoogleNetappVolume#days_of_month}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule.property.minute"></a>

```go
Minute *f64
```

- *Type:* *f64

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeSnapshotPolicyWeeklySchedule <a name="GoogleNetappVolumeSnapshotPolicyWeeklySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule {
	SnapshotsToKeep: *f64,
	Day: *string,
	Hour: *f64,
	Minute: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | The maximum number of snapshots to keep for the weekly schedule. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.day">Day</a></code> | <code>*string</code> | Set the day or days of the week to make a snapshot. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Set the hour to create the snapshot (0-23), defaults to midnight (0). |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.minute">Minute</a></code> | <code>*f64</code> | Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0). |

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.snapshotsToKeep"></a>

```go
SnapshotsToKeep *f64
```

- *Type:* *f64

The maximum number of snapshots to keep for the weekly schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#snapshots_to_keep GoogleNetappVolume#snapshots_to_keep}

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.day"></a>

```go
Day *string
```

- *Type:* *string

Set the day or days of the week to make a snapshot.

Accepts a comma separated days of the week. Defaults to 'Sunday'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#day GoogleNetappVolume#day}

---

##### `Hour`<sup>Optional</sup> <a name="Hour" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Set the hour to create the snapshot (0-23), defaults to midnight (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#hour GoogleNetappVolume#hour}

---

##### `Minute`<sup>Optional</sup> <a name="Minute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule.property.minute"></a>

```go
Minute *f64
```

- *Type:* *f64

Set the minute of the hour to create the snapshot (0-59), defaults to the top of the hour (0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#minute GoogleNetappVolume#minute}

---

### GoogleNetappVolumeTieringPolicy <a name="GoogleNetappVolumeTieringPolicy" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeTieringPolicy {
	CoolingThresholdDays: *f64,
	HotTierBypassModeEnabled: interface{},
	TierAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.coolingThresholdDays">CoolingThresholdDays</a></code> | <code>*f64</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.hotTierBypassModeEnabled">HotTierBypassModeEnabled</a></code> | <code>interface{}</code> | Optional. Flag indicating that the hot tier bypass mode is enabled. Default is false. Only applicable to Flex service level. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.tierAction">TierAction</a></code> | <code>*string</code> | Optional. |

---

##### `CoolingThresholdDays`<sup>Optional</sup> <a name="CoolingThresholdDays" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.coolingThresholdDays"></a>

```go
CoolingThresholdDays *f64
```

- *Type:* *f64

Optional.

Time in days to mark the volume's data block as cold and make it eligible for tiering, can be range from 2-183.
Default is 31.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#cooling_threshold_days GoogleNetappVolume#cooling_threshold_days}

---

##### `HotTierBypassModeEnabled`<sup>Optional</sup> <a name="HotTierBypassModeEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.hotTierBypassModeEnabled"></a>

```go
HotTierBypassModeEnabled interface{}
```

- *Type:* interface{}

Optional. Flag indicating that the hot tier bypass mode is enabled. Default is false. Only applicable to Flex service level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#hot_tier_bypass_mode_enabled GoogleNetappVolume#hot_tier_bypass_mode_enabled}

---

##### `TierAction`<sup>Optional</sup> <a name="TierAction" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy.property.tierAction"></a>

```go
TierAction *string
```

- *Type:* *string

Optional.

Flag indicating if the volume has tiering policy enable/pause. Default is PAUSED. Default value: "PAUSED" Possible values: ["ENABLED", "PAUSED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#tier_action GoogleNetappVolume#tier_action}

---

### GoogleNetappVolumeTimeouts <a name="GoogleNetappVolumeTimeouts" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

&googlenetappvolume.GoogleNetappVolumeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#create GoogleNetappVolume#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#delete GoogleNetappVolume#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#update GoogleNetappVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#create GoogleNetappVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#delete GoogleNetappVolume#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_netapp_volume#update GoogleNetappVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetappVolumeBackupConfigOutputReference <a name="GoogleNetappVolumeBackupConfigOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupPolicies">ResetBackupPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupVault">ResetBackupVault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled">ResetScheduledBackupEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupPolicies` <a name="ResetBackupPolicies" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupPolicies"></a>

```go
func ResetBackupPolicies()
```

##### `ResetBackupVault` <a name="ResetBackupVault" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetBackupVault"></a>

```go
func ResetBackupVault()
```

##### `ResetScheduledBackupEnabled` <a name="ResetScheduledBackupEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.resetScheduledBackupEnabled"></a>

```go
func ResetScheduledBackupEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPoliciesInput">BackupPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVaultInput">BackupVaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput">ScheduledBackupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPolicies">BackupPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVault">BackupVault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled">ScheduledBackupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupPoliciesInput`<sup>Optional</sup> <a name="BackupPoliciesInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPoliciesInput"></a>

```go
func BackupPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `BackupVaultInput`<sup>Optional</sup> <a name="BackupVaultInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVaultInput"></a>

```go
func BackupVaultInput() *string
```

- *Type:* *string

---

##### `ScheduledBackupEnabledInput`<sup>Optional</sup> <a name="ScheduledBackupEnabledInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabledInput"></a>

```go
func ScheduledBackupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPolicies`<sup>Required</sup> <a name="BackupPolicies" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupPolicies"></a>

```go
func BackupPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `BackupVault`<sup>Required</sup> <a name="BackupVault" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.backupVault"></a>

```go
func BackupVault() *string
```

- *Type:* *string

---

##### `ScheduledBackupEnabled`<sup>Required</sup> <a name="ScheduledBackupEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.scheduledBackupEnabled"></a>

```go
func ScheduledBackupEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBackupConfig">GoogleNetappVolumeBackupConfig</a>

---


### GoogleNetappVolumeBlockDevicesList <a name="GoogleNetappVolumeBlockDevicesList" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeBlockDevicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetappVolumeBlockDevicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.get"></a>

```go
func Get(index *f64) GoogleNetappVolumeBlockDevicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetappVolumeBlockDevicesOutputReference <a name="GoogleNetappVolumeBlockDevicesOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeBlockDevicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetappVolumeBlockDevicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.resetHostGroups">ResetHostGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHostGroups` <a name="ResetHostGroups" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.resetHostGroups"></a>

```go
func ResetHostGroups()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.sizeGib">SizeGib</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.hostGroupsInput">HostGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.osTypeInput">OsTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.hostGroups">HostGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `SizeGib`<sup>Required</sup> <a name="SizeGib" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.sizeGib"></a>

```go
func SizeGib() *f64
```

- *Type:* *f64

---

##### `HostGroupsInput`<sup>Optional</sup> <a name="HostGroupsInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.hostGroupsInput"></a>

```go
func HostGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OsTypeInput`<sup>Optional</sup> <a name="OsTypeInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.osTypeInput"></a>

```go
func OsTypeInput() *string
```

- *Type:* *string

---

##### `HostGroups`<sup>Required</sup> <a name="HostGroups" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.hostGroups"></a>

```go
func HostGroups() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeBlockDevicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetappVolumeCacheParametersCacheConfigOutputReference <a name="GoogleNetappVolumeCacheParametersCacheConfigOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeCacheParametersCacheConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeCacheParametersCacheConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.resetCifsChangeNotifyEnabled">ResetCifsChangeNotifyEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCifsChangeNotifyEnabled` <a name="ResetCifsChangeNotifyEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.resetCifsChangeNotifyEnabled"></a>

```go
func ResetCifsChangeNotifyEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.property.cifsChangeNotifyEnabledInput">CifsChangeNotifyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.property.cifsChangeNotifyEnabled">CifsChangeNotifyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfig">GoogleNetappVolumeCacheParametersCacheConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CifsChangeNotifyEnabledInput`<sup>Optional</sup> <a name="CifsChangeNotifyEnabledInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.property.cifsChangeNotifyEnabledInput"></a>

```go
func CifsChangeNotifyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CifsChangeNotifyEnabled`<sup>Required</sup> <a name="CifsChangeNotifyEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.property.cifsChangeNotifyEnabled"></a>

```go
func CifsChangeNotifyEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeCacheParametersCacheConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfig">GoogleNetappVolumeCacheParametersCacheConfig</a>

---


### GoogleNetappVolumeCacheParametersOutputReference <a name="GoogleNetappVolumeCacheParametersOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeCacheParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeCacheParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.putCacheConfig">PutCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetCacheConfig">ResetCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetEnableGlobalFileLock">ResetEnableGlobalFileLock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetPeerClusterName">ResetPeerClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetPeeringCommandExpiryTime">ResetPeeringCommandExpiryTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetPeerIpAddresses">ResetPeerIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetPeerSvmName">ResetPeerSvmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetPeerVolumeName">ResetPeerVolumeName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCacheConfig` <a name="PutCacheConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.putCacheConfig"></a>

```go
func PutCacheConfig(value GoogleNetappVolumeCacheParametersCacheConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.putCacheConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfig">GoogleNetappVolumeCacheParametersCacheConfig</a>

---

##### `ResetCacheConfig` <a name="ResetCacheConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetCacheConfig"></a>

```go
func ResetCacheConfig()
```

##### `ResetEnableGlobalFileLock` <a name="ResetEnableGlobalFileLock" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetEnableGlobalFileLock"></a>

```go
func ResetEnableGlobalFileLock()
```

##### `ResetPeerClusterName` <a name="ResetPeerClusterName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetPeerClusterName"></a>

```go
func ResetPeerClusterName()
```

##### `ResetPeeringCommandExpiryTime` <a name="ResetPeeringCommandExpiryTime" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetPeeringCommandExpiryTime"></a>

```go
func ResetPeeringCommandExpiryTime()
```

##### `ResetPeerIpAddresses` <a name="ResetPeerIpAddresses" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetPeerIpAddresses"></a>

```go
func ResetPeerIpAddresses()
```

##### `ResetPeerSvmName` <a name="ResetPeerSvmName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetPeerSvmName"></a>

```go
func ResetPeerSvmName()
```

##### `ResetPeerVolumeName` <a name="ResetPeerVolumeName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.resetPeerVolumeName"></a>

```go
func ResetPeerVolumeName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.cacheConfig">CacheConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference">GoogleNetappVolumeCacheParametersCacheConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.cacheState">CacheState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.command">Command</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.passphrase">Passphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.stateDetails">StateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.cacheConfigInput">CacheConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfig">GoogleNetappVolumeCacheParametersCacheConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.enableGlobalFileLockInput">EnableGlobalFileLockInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerClusterNameInput">PeerClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peeringCommandExpiryTimeInput">PeeringCommandExpiryTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerIpAddressesInput">PeerIpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerSvmNameInput">PeerSvmNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerVolumeNameInput">PeerVolumeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.enableGlobalFileLock">EnableGlobalFileLock</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerClusterName">PeerClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peeringCommandExpiryTime">PeeringCommandExpiryTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerIpAddresses">PeerIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerSvmName">PeerSvmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerVolumeName">PeerVolumeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters">GoogleNetappVolumeCacheParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CacheConfig`<sup>Required</sup> <a name="CacheConfig" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.cacheConfig"></a>

```go
func CacheConfig() GoogleNetappVolumeCacheParametersCacheConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfigOutputReference">GoogleNetappVolumeCacheParametersCacheConfigOutputReference</a>

---

##### `CacheState`<sup>Required</sup> <a name="CacheState" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.cacheState"></a>

```go
func CacheState() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.command"></a>

```go
func Command() *string
```

- *Type:* *string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.passphrase"></a>

```go
func Passphrase() *string
```

- *Type:* *string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.stateDetails"></a>

```go
func StateDetails() *string
```

- *Type:* *string

---

##### `CacheConfigInput`<sup>Optional</sup> <a name="CacheConfigInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.cacheConfigInput"></a>

```go
func CacheConfigInput() GoogleNetappVolumeCacheParametersCacheConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersCacheConfig">GoogleNetappVolumeCacheParametersCacheConfig</a>

---

##### `EnableGlobalFileLockInput`<sup>Optional</sup> <a name="EnableGlobalFileLockInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.enableGlobalFileLockInput"></a>

```go
func EnableGlobalFileLockInput() interface{}
```

- *Type:* interface{}

---

##### `PeerClusterNameInput`<sup>Optional</sup> <a name="PeerClusterNameInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerClusterNameInput"></a>

```go
func PeerClusterNameInput() *string
```

- *Type:* *string

---

##### `PeeringCommandExpiryTimeInput`<sup>Optional</sup> <a name="PeeringCommandExpiryTimeInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peeringCommandExpiryTimeInput"></a>

```go
func PeeringCommandExpiryTimeInput() *string
```

- *Type:* *string

---

##### `PeerIpAddressesInput`<sup>Optional</sup> <a name="PeerIpAddressesInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerIpAddressesInput"></a>

```go
func PeerIpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PeerSvmNameInput`<sup>Optional</sup> <a name="PeerSvmNameInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerSvmNameInput"></a>

```go
func PeerSvmNameInput() *string
```

- *Type:* *string

---

##### `PeerVolumeNameInput`<sup>Optional</sup> <a name="PeerVolumeNameInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerVolumeNameInput"></a>

```go
func PeerVolumeNameInput() *string
```

- *Type:* *string

---

##### `EnableGlobalFileLock`<sup>Required</sup> <a name="EnableGlobalFileLock" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.enableGlobalFileLock"></a>

```go
func EnableGlobalFileLock() interface{}
```

- *Type:* interface{}

---

##### `PeerClusterName`<sup>Required</sup> <a name="PeerClusterName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerClusterName"></a>

```go
func PeerClusterName() *string
```

- *Type:* *string

---

##### `PeeringCommandExpiryTime`<sup>Required</sup> <a name="PeeringCommandExpiryTime" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peeringCommandExpiryTime"></a>

```go
func PeeringCommandExpiryTime() *string
```

- *Type:* *string

---

##### `PeerIpAddresses`<sup>Required</sup> <a name="PeerIpAddresses" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerIpAddresses"></a>

```go
func PeerIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `PeerSvmName`<sup>Required</sup> <a name="PeerSvmName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerSvmName"></a>

```go
func PeerSvmName() *string
```

- *Type:* *string

---

##### `PeerVolumeName`<sup>Required</sup> <a name="PeerVolumeName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.peerVolumeName"></a>

```go
func PeerVolumeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeCacheParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeCacheParameters">GoogleNetappVolumeCacheParameters</a>

---


### GoogleNetappVolumeExportPolicyOutputReference <a name="GoogleNetappVolumeExportPolicyOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeExportPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeExportPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList">GoogleNetappVolumeExportPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rules"></a>

```go
func Rules() GoogleNetappVolumeExportPolicyRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList">GoogleNetappVolumeExportPolicyRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeExportPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicy">GoogleNetappVolumeExportPolicy</a>

---


### GoogleNetappVolumeExportPolicyRulesList <a name="GoogleNetappVolumeExportPolicyRulesList" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeExportPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetappVolumeExportPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.get"></a>

```go
func Get(index *f64) GoogleNetappVolumeExportPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetappVolumeExportPolicyRulesOutputReference <a name="GoogleNetappVolumeExportPolicyRulesOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeExportPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetappVolumeExportPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAllowedClients">ResetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAnonUid">ResetAnonUid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess">ResetHasRootAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly">ResetKerberos5IReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite">ResetKerberos5IReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly">ResetKerberos5PReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite">ResetKerberos5PReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly">ResetKerberos5ReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite">ResetKerberos5ReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv3">ResetNfsv3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv4">ResetNfsv4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetSquashMode">ResetSquashMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAccessType"></a>

```go
func ResetAccessType()
```

##### `ResetAllowedClients` <a name="ResetAllowedClients" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAllowedClients"></a>

```go
func ResetAllowedClients()
```

##### `ResetAnonUid` <a name="ResetAnonUid" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetAnonUid"></a>

```go
func ResetAnonUid()
```

##### `ResetHasRootAccess` <a name="ResetHasRootAccess" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetHasRootAccess"></a>

```go
func ResetHasRootAccess()
```

##### `ResetKerberos5IReadOnly` <a name="ResetKerberos5IReadOnly" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadOnly"></a>

```go
func ResetKerberos5IReadOnly()
```

##### `ResetKerberos5IReadWrite` <a name="ResetKerberos5IReadWrite" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5IReadWrite"></a>

```go
func ResetKerberos5IReadWrite()
```

##### `ResetKerberos5PReadOnly` <a name="ResetKerberos5PReadOnly" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadOnly"></a>

```go
func ResetKerberos5PReadOnly()
```

##### `ResetKerberos5PReadWrite` <a name="ResetKerberos5PReadWrite" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5PReadWrite"></a>

```go
func ResetKerberos5PReadWrite()
```

##### `ResetKerberos5ReadOnly` <a name="ResetKerberos5ReadOnly" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadOnly"></a>

```go
func ResetKerberos5ReadOnly()
```

##### `ResetKerberos5ReadWrite` <a name="ResetKerberos5ReadWrite" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetKerberos5ReadWrite"></a>

```go
func ResetKerberos5ReadWrite()
```

##### `ResetNfsv3` <a name="ResetNfsv3" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv3"></a>

```go
func ResetNfsv3()
```

##### `ResetNfsv4` <a name="ResetNfsv4" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetNfsv4"></a>

```go
func ResetNfsv4()
```

##### `ResetSquashMode` <a name="ResetSquashMode" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.resetSquashMode"></a>

```go
func ResetSquashMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput">AccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.anonUidInput">AnonUidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput">HasRootAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput">Kerberos5IReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput">Kerberos5IReadWriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput">Kerberos5PReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput">Kerberos5PReadWriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput">Kerberos5ReadOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput">Kerberos5ReadWriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input">Nfsv3Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input">Nfsv4Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.squashModeInput">SquashModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessType">AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClients">AllowedClients</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.anonUid">AnonUid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess">HasRootAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly">Kerberos5IReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite">Kerberos5IReadWrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly">Kerberos5PReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite">Kerberos5PReadWrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly">Kerberos5ReadOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite">Kerberos5ReadWrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3">Nfsv3</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4">Nfsv4</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.squashMode">SquashMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessTypeInput"></a>

```go
func AccessTypeInput() *string
```

- *Type:* *string

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClientsInput"></a>

```go
func AllowedClientsInput() *string
```

- *Type:* *string

---

##### `AnonUidInput`<sup>Optional</sup> <a name="AnonUidInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.anonUidInput"></a>

```go
func AnonUidInput() *f64
```

- *Type:* *f64

---

##### `HasRootAccessInput`<sup>Optional</sup> <a name="HasRootAccessInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccessInput"></a>

```go
func HasRootAccessInput() *string
```

- *Type:* *string

---

##### `Kerberos5IReadOnlyInput`<sup>Optional</sup> <a name="Kerberos5IReadOnlyInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnlyInput"></a>

```go
func Kerberos5IReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5IReadWriteInput`<sup>Optional</sup> <a name="Kerberos5IReadWriteInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWriteInput"></a>

```go
func Kerberos5IReadWriteInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5PReadOnlyInput`<sup>Optional</sup> <a name="Kerberos5PReadOnlyInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnlyInput"></a>

```go
func Kerberos5PReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5PReadWriteInput`<sup>Optional</sup> <a name="Kerberos5PReadWriteInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWriteInput"></a>

```go
func Kerberos5PReadWriteInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5ReadOnlyInput`<sup>Optional</sup> <a name="Kerberos5ReadOnlyInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnlyInput"></a>

```go
func Kerberos5ReadOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5ReadWriteInput`<sup>Optional</sup> <a name="Kerberos5ReadWriteInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWriteInput"></a>

```go
func Kerberos5ReadWriteInput() interface{}
```

- *Type:* interface{}

---

##### `Nfsv3Input`<sup>Optional</sup> <a name="Nfsv3Input" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3Input"></a>

```go
func Nfsv3Input() interface{}
```

- *Type:* interface{}

---

##### `Nfsv4Input`<sup>Optional</sup> <a name="Nfsv4Input" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4Input"></a>

```go
func Nfsv4Input() interface{}
```

- *Type:* interface{}

---

##### `SquashModeInput`<sup>Optional</sup> <a name="SquashModeInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.squashModeInput"></a>

```go
func SquashModeInput() *string
```

- *Type:* *string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.accessType"></a>

```go
func AccessType() *string
```

- *Type:* *string

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.allowedClients"></a>

```go
func AllowedClients() *string
```

- *Type:* *string

---

##### `AnonUid`<sup>Required</sup> <a name="AnonUid" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.anonUid"></a>

```go
func AnonUid() *f64
```

- *Type:* *f64

---

##### `HasRootAccess`<sup>Required</sup> <a name="HasRootAccess" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.hasRootAccess"></a>

```go
func HasRootAccess() *string
```

- *Type:* *string

---

##### `Kerberos5IReadOnly`<sup>Required</sup> <a name="Kerberos5IReadOnly" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadOnly"></a>

```go
func Kerberos5IReadOnly() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5IReadWrite`<sup>Required</sup> <a name="Kerberos5IReadWrite" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5IReadWrite"></a>

```go
func Kerberos5IReadWrite() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5PReadOnly`<sup>Required</sup> <a name="Kerberos5PReadOnly" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadOnly"></a>

```go
func Kerberos5PReadOnly() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5PReadWrite`<sup>Required</sup> <a name="Kerberos5PReadWrite" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5PReadWrite"></a>

```go
func Kerberos5PReadWrite() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5ReadOnly`<sup>Required</sup> <a name="Kerberos5ReadOnly" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadOnly"></a>

```go
func Kerberos5ReadOnly() interface{}
```

- *Type:* interface{}

---

##### `Kerberos5ReadWrite`<sup>Required</sup> <a name="Kerberos5ReadWrite" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.kerberos5ReadWrite"></a>

```go
func Kerberos5ReadWrite() interface{}
```

- *Type:* interface{}

---

##### `Nfsv3`<sup>Required</sup> <a name="Nfsv3" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv3"></a>

```go
func Nfsv3() interface{}
```

- *Type:* interface{}

---

##### `Nfsv4`<sup>Required</sup> <a name="Nfsv4" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.nfsv4"></a>

```go
func Nfsv4() interface{}
```

- *Type:* interface{}

---

##### `SquashMode`<sup>Required</sup> <a name="SquashMode" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.squashMode"></a>

```go
func SquashMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeExportPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleNetappVolumeHybridReplicationParametersOutputReference <a name="GoogleNetappVolumeHybridReplicationParametersOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeHybridReplicationParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeHybridReplicationParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetClusterLocation">ResetClusterLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetHybridReplicationType">ResetHybridReplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetLargeVolumeConstituentCount">ResetLargeVolumeConstituentCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetPeerClusterName">ResetPeerClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetPeerIpAddresses">ResetPeerIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetPeerSvmName">ResetPeerSvmName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetPeerVolumeName">ResetPeerVolumeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetReplication">ResetReplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetReplicationSchedule">ResetReplicationSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterLocation` <a name="ResetClusterLocation" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetClusterLocation"></a>

```go
func ResetClusterLocation()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHybridReplicationType` <a name="ResetHybridReplicationType" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetHybridReplicationType"></a>

```go
func ResetHybridReplicationType()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLargeVolumeConstituentCount` <a name="ResetLargeVolumeConstituentCount" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetLargeVolumeConstituentCount"></a>

```go
func ResetLargeVolumeConstituentCount()
```

##### `ResetPeerClusterName` <a name="ResetPeerClusterName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetPeerClusterName"></a>

```go
func ResetPeerClusterName()
```

##### `ResetPeerIpAddresses` <a name="ResetPeerIpAddresses" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetPeerIpAddresses"></a>

```go
func ResetPeerIpAddresses()
```

##### `ResetPeerSvmName` <a name="ResetPeerSvmName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetPeerSvmName"></a>

```go
func ResetPeerSvmName()
```

##### `ResetPeerVolumeName` <a name="ResetPeerVolumeName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetPeerVolumeName"></a>

```go
func ResetPeerVolumeName()
```

##### `ResetReplication` <a name="ResetReplication" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetReplication"></a>

```go
func ResetReplication()
```

##### `ResetReplicationSchedule` <a name="ResetReplicationSchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.resetReplicationSchedule"></a>

```go
func ResetReplicationSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.clusterLocationInput">ClusterLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.hybridReplicationTypeInput">HybridReplicationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.largeVolumeConstituentCountInput">LargeVolumeConstituentCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerClusterNameInput">PeerClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerIpAddressesInput">PeerIpAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerSvmNameInput">PeerSvmNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerVolumeNameInput">PeerVolumeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.replicationInput">ReplicationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.replicationScheduleInput">ReplicationScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.clusterLocation">ClusterLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.hybridReplicationType">HybridReplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.largeVolumeConstituentCount">LargeVolumeConstituentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerClusterName">PeerClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerIpAddresses">PeerIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerSvmName">PeerSvmName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerVolumeName">PeerVolumeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.replication">Replication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.replicationSchedule">ReplicationSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters">GoogleNetappVolumeHybridReplicationParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterLocationInput`<sup>Optional</sup> <a name="ClusterLocationInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.clusterLocationInput"></a>

```go
func ClusterLocationInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HybridReplicationTypeInput`<sup>Optional</sup> <a name="HybridReplicationTypeInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.hybridReplicationTypeInput"></a>

```go
func HybridReplicationTypeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LargeVolumeConstituentCountInput`<sup>Optional</sup> <a name="LargeVolumeConstituentCountInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.largeVolumeConstituentCountInput"></a>

```go
func LargeVolumeConstituentCountInput() *f64
```

- *Type:* *f64

---

##### `PeerClusterNameInput`<sup>Optional</sup> <a name="PeerClusterNameInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerClusterNameInput"></a>

```go
func PeerClusterNameInput() *string
```

- *Type:* *string

---

##### `PeerIpAddressesInput`<sup>Optional</sup> <a name="PeerIpAddressesInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerIpAddressesInput"></a>

```go
func PeerIpAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PeerSvmNameInput`<sup>Optional</sup> <a name="PeerSvmNameInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerSvmNameInput"></a>

```go
func PeerSvmNameInput() *string
```

- *Type:* *string

---

##### `PeerVolumeNameInput`<sup>Optional</sup> <a name="PeerVolumeNameInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerVolumeNameInput"></a>

```go
func PeerVolumeNameInput() *string
```

- *Type:* *string

---

##### `ReplicationInput`<sup>Optional</sup> <a name="ReplicationInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.replicationInput"></a>

```go
func ReplicationInput() *string
```

- *Type:* *string

---

##### `ReplicationScheduleInput`<sup>Optional</sup> <a name="ReplicationScheduleInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.replicationScheduleInput"></a>

```go
func ReplicationScheduleInput() *string
```

- *Type:* *string

---

##### `ClusterLocation`<sup>Required</sup> <a name="ClusterLocation" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.clusterLocation"></a>

```go
func ClusterLocation() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HybridReplicationType`<sup>Required</sup> <a name="HybridReplicationType" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.hybridReplicationType"></a>

```go
func HybridReplicationType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LargeVolumeConstituentCount`<sup>Required</sup> <a name="LargeVolumeConstituentCount" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.largeVolumeConstituentCount"></a>

```go
func LargeVolumeConstituentCount() *f64
```

- *Type:* *f64

---

##### `PeerClusterName`<sup>Required</sup> <a name="PeerClusterName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerClusterName"></a>

```go
func PeerClusterName() *string
```

- *Type:* *string

---

##### `PeerIpAddresses`<sup>Required</sup> <a name="PeerIpAddresses" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerIpAddresses"></a>

```go
func PeerIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `PeerSvmName`<sup>Required</sup> <a name="PeerSvmName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerSvmName"></a>

```go
func PeerSvmName() *string
```

- *Type:* *string

---

##### `PeerVolumeName`<sup>Required</sup> <a name="PeerVolumeName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.peerVolumeName"></a>

```go
func PeerVolumeName() *string
```

- *Type:* *string

---

##### `Replication`<sup>Required</sup> <a name="Replication" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.replication"></a>

```go
func Replication() *string
```

- *Type:* *string

---

##### `ReplicationSchedule`<sup>Required</sup> <a name="ReplicationSchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.replicationSchedule"></a>

```go
func ReplicationSchedule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeHybridReplicationParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeHybridReplicationParameters">GoogleNetappVolumeHybridReplicationParameters</a>

---


### GoogleNetappVolumeLargeCapacityConfigOutputReference <a name="GoogleNetappVolumeLargeCapacityConfigOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeLargeCapacityConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeLargeCapacityConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.resetConstituentCount">ResetConstituentCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConstituentCount` <a name="ResetConstituentCount" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.resetConstituentCount"></a>

```go
func ResetConstituentCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.property.constituentCountInput">ConstituentCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.property.constituentCount">ConstituentCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfig">GoogleNetappVolumeLargeCapacityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstituentCountInput`<sup>Optional</sup> <a name="ConstituentCountInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.property.constituentCountInput"></a>

```go
func ConstituentCountInput() *f64
```

- *Type:* *f64

---

##### `ConstituentCount`<sup>Required</sup> <a name="ConstituentCount" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.property.constituentCount"></a>

```go
func ConstituentCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeLargeCapacityConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeLargeCapacityConfig">GoogleNetappVolumeLargeCapacityConfig</a>

---


### GoogleNetappVolumeMountOptionsList <a name="GoogleNetappVolumeMountOptionsList" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeMountOptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleNetappVolumeMountOptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.get"></a>

```go
func Get(index *f64) GoogleNetappVolumeMountOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleNetappVolumeMountOptionsOutputReference <a name="GoogleNetappVolumeMountOptionsOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeMountOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleNetappVolumeMountOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.export">Export</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.exportFull">ExportFull</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.instructions">Instructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions">GoogleNetappVolumeMountOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.export"></a>

```go
func Export() *string
```

- *Type:* *string

---

##### `ExportFull`<sup>Required</sup> <a name="ExportFull" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.exportFull"></a>

```go
func ExportFull() *string
```

- *Type:* *string

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.instructions"></a>

```go
func Instructions() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeMountOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeMountOptions">GoogleNetappVolumeMountOptions</a>

---


### GoogleNetappVolumeRestoreParametersOutputReference <a name="GoogleNetappVolumeRestoreParametersOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeRestoreParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeRestoreParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceBackup">ResetSourceBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceSnapshot">ResetSourceSnapshot</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceBackup` <a name="ResetSourceBackup" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceBackup"></a>

```go
func ResetSourceBackup()
```

##### `ResetSourceSnapshot` <a name="ResetSourceSnapshot" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.resetSourceSnapshot"></a>

```go
func ResetSourceSnapshot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackupInput">SourceBackupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput">SourceSnapshotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackup">SourceBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceBackupInput`<sup>Optional</sup> <a name="SourceBackupInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackupInput"></a>

```go
func SourceBackupInput() *string
```

- *Type:* *string

---

##### `SourceSnapshotInput`<sup>Optional</sup> <a name="SourceSnapshotInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshotInput"></a>

```go
func SourceSnapshotInput() *string
```

- *Type:* *string

---

##### `SourceBackup`<sup>Required</sup> <a name="SourceBackup" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceBackup"></a>

```go
func SourceBackup() *string
```

- *Type:* *string

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.sourceSnapshot"></a>

```go
func SourceSnapshot() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeRestoreParameters
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeRestoreParameters">GoogleNetappVolumeRestoreParameters</a>

---


### GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute">ResetMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHour` <a name="ResetHour" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetHour"></a>

```go
func ResetHour()
```

##### `ResetMinute` <a name="ResetMinute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.resetMinute"></a>

```go
func ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minuteInput"></a>

```go
func MinuteInput() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```go
func SnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```go
func SnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

---


### GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute">ResetMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinute` <a name="ResetMinute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.resetMinute"></a>

```go
func ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput"></a>

```go
func MinuteInput() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```go
func SnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```go
func SnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

---


### GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth">ResetDaysOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute">ResetMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysOfMonth` <a name="ResetDaysOfMonth" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetDaysOfMonth"></a>

```go
func ResetDaysOfMonth()
```

##### `ResetHour` <a name="ResetHour" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetHour"></a>

```go
func ResetHour()
```

##### `ResetMinute` <a name="ResetMinute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.resetMinute"></a>

```go
func ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput">DaysOfMonthInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfMonthInput`<sup>Optional</sup> <a name="DaysOfMonthInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput"></a>

```go
func DaysOfMonthInput() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput"></a>

```go
func MinuteInput() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```go
func SnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```go
func DaysOfMonth() *string
```

- *Type:* *string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```go
func SnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

---


### GoogleNetappVolumeSnapshotPolicyOutputReference <a name="GoogleNetappVolumeSnapshotPolicyOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeSnapshotPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeSnapshotPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule">PutDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule">PutHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule">PutMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule">PutWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetDailySchedule">ResetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule">ResetHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule">ResetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule">ResetWeeklySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDailySchedule` <a name="PutDailySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule"></a>

```go
func PutDailySchedule(value GoogleNetappVolumeSnapshotPolicyDailySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `PutHourlySchedule` <a name="PutHourlySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule"></a>

```go
func PutHourlySchedule(value GoogleNetappVolumeSnapshotPolicyHourlySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putHourlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `PutMonthlySchedule` <a name="PutMonthlySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule"></a>

```go
func PutMonthlySchedule(value GoogleNetappVolumeSnapshotPolicyMonthlySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `PutWeeklySchedule` <a name="PutWeeklySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule"></a>

```go
func PutWeeklySchedule(value GoogleNetappVolumeSnapshotPolicyWeeklySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `ResetDailySchedule` <a name="ResetDailySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetDailySchedule"></a>

```go
func ResetDailySchedule()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHourlySchedule` <a name="ResetHourlySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetHourlySchedule"></a>

```go
func ResetHourlySchedule()
```

##### `ResetMonthlySchedule` <a name="ResetMonthlySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetMonthlySchedule"></a>

```go
func ResetMonthlySchedule()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.resetWeeklySchedule"></a>

```go
func ResetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput">DailyScheduleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput">HourlyScheduleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput">MonthlyScheduleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailySchedule"></a>

```go
func DailySchedule() GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyDailyScheduleOutputReference</a>

---

##### `HourlySchedule`<sup>Required</sup> <a name="HourlySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlySchedule"></a>

```go
func HourlySchedule() GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyHourlyScheduleOutputReference</a>

---

##### `MonthlySchedule`<sup>Required</sup> <a name="MonthlySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlySchedule"></a>

```go
func MonthlySchedule() GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyMonthlyScheduleOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklySchedule"></a>

```go
func WeeklySchedule() GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference">GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference</a>

---

##### `DailyScheduleInput`<sup>Optional</sup> <a name="DailyScheduleInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.dailyScheduleInput"></a>

```go
func DailyScheduleInput() GoogleNetappVolumeSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyDailySchedule">GoogleNetappVolumeSnapshotPolicyDailySchedule</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HourlyScheduleInput`<sup>Optional</sup> <a name="HourlyScheduleInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.hourlyScheduleInput"></a>

```go
func HourlyScheduleInput() GoogleNetappVolumeSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyHourlySchedule">GoogleNetappVolumeSnapshotPolicyHourlySchedule</a>

---

##### `MonthlyScheduleInput`<sup>Optional</sup> <a name="MonthlyScheduleInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.monthlyScheduleInput"></a>

```go
func MonthlyScheduleInput() GoogleNetappVolumeSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyMonthlySchedule">GoogleNetappVolumeSnapshotPolicyMonthlySchedule</a>

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.weeklyScheduleInput"></a>

```go
func WeeklyScheduleInput() GoogleNetappVolumeSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeSnapshotPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicy">GoogleNetappVolumeSnapshotPolicy</a>

---


### GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference <a name="GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour">ResetHour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute">ResetMinute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetHour` <a name="ResetHour" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetHour"></a>

```go
func ResetHour()
```

##### `ResetMinute` <a name="ResetMinute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.resetMinute"></a>

```go
func ResetMinute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput"></a>

```go
func MinuteInput() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```go
func SnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```go
func SnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeSnapshotPolicyWeeklySchedule">GoogleNetappVolumeSnapshotPolicyWeeklySchedule</a>

---


### GoogleNetappVolumeTieringPolicyOutputReference <a name="GoogleNetappVolumeTieringPolicyOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeTieringPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeTieringPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays">ResetCoolingThresholdDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetHotTierBypassModeEnabled">ResetHotTierBypassModeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetTierAction">ResetTierAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoolingThresholdDays` <a name="ResetCoolingThresholdDays" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetCoolingThresholdDays"></a>

```go
func ResetCoolingThresholdDays()
```

##### `ResetHotTierBypassModeEnabled` <a name="ResetHotTierBypassModeEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetHotTierBypassModeEnabled"></a>

```go
func ResetHotTierBypassModeEnabled()
```

##### `ResetTierAction` <a name="ResetTierAction" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.resetTierAction"></a>

```go
func ResetTierAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput">CoolingThresholdDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.hotTierBypassModeEnabledInput">HotTierBypassModeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierActionInput">TierActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays">CoolingThresholdDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.hotTierBypassModeEnabled">HotTierBypassModeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierAction">TierAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoolingThresholdDaysInput`<sup>Optional</sup> <a name="CoolingThresholdDaysInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDaysInput"></a>

```go
func CoolingThresholdDaysInput() *f64
```

- *Type:* *f64

---

##### `HotTierBypassModeEnabledInput`<sup>Optional</sup> <a name="HotTierBypassModeEnabledInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.hotTierBypassModeEnabledInput"></a>

```go
func HotTierBypassModeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TierActionInput`<sup>Optional</sup> <a name="TierActionInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierActionInput"></a>

```go
func TierActionInput() *string
```

- *Type:* *string

---

##### `CoolingThresholdDays`<sup>Required</sup> <a name="CoolingThresholdDays" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.coolingThresholdDays"></a>

```go
func CoolingThresholdDays() *f64
```

- *Type:* *f64

---

##### `HotTierBypassModeEnabled`<sup>Required</sup> <a name="HotTierBypassModeEnabled" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.hotTierBypassModeEnabled"></a>

```go
func HotTierBypassModeEnabled() interface{}
```

- *Type:* interface{}

---

##### `TierAction`<sup>Required</sup> <a name="TierAction" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.tierAction"></a>

```go
func TierAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleNetappVolumeTieringPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTieringPolicy">GoogleNetappVolumeTieringPolicy</a>

---


### GoogleNetappVolumeTimeoutsOutputReference <a name="GoogleNetappVolumeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlenetappvolume"

googlenetappvolume.NewGoogleNetappVolumeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleNetappVolumeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleNetappVolume.GoogleNetappVolumeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



