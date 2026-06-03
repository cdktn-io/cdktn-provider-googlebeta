# `googleAlloydbCluster` Submodule <a name="`googleAlloydbCluster` Submodule" id="@cdktn/provider-google-beta.googleAlloydbCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAlloydbCluster <a name="GoogleAlloydbCluster" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster google_alloydb_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbCluster(scope Construct, id *string, config GoogleAlloydbClusterConfig) GoogleAlloydbCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig">GoogleAlloydbClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig">GoogleAlloydbClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putAutomatedBackupPolicy">PutAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putContinuousBackupConfig">PutContinuousBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putDataplexConfig">PutDataplexConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putInitialUser">PutInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putMaintenanceUpdatePolicy">PutMaintenanceUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putPscConfig">PutPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupdrBackupSource">PutRestoreBackupdrBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupdrPitrSource">PutRestoreBackupdrPitrSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupSource">PutRestoreBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreContinuousBackupSource">PutRestoreContinuousBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putSecondaryConfig">PutSecondaryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetAutomatedBackupPolicy">ResetAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetClusterType">ResetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetContinuousBackupConfig">ResetContinuousBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDatabaseVersion">ResetDatabaseVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDataplexConfig">ResetDataplexConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetInitialUser">ResetInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetMaintenanceUpdatePolicy">ResetMaintenanceUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetPscConfig">ResetPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreBackupdrBackupSource">ResetRestoreBackupdrBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreBackupdrPitrSource">ResetRestoreBackupdrPitrSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreBackupSource">ResetRestoreBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreContinuousBackupSource">ResetRestoreContinuousBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetSecondaryConfig">ResetSecondaryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetSkipAwaitMajorVersionUpgrade">ResetSkipAwaitMajorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetSubscriptionType">ResetSubscriptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutomatedBackupPolicy` <a name="PutAutomatedBackupPolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putAutomatedBackupPolicy"></a>

```go
func PutAutomatedBackupPolicy(value GoogleAlloydbClusterAutomatedBackupPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putAutomatedBackupPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a>

---

##### `PutContinuousBackupConfig` <a name="PutContinuousBackupConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putContinuousBackupConfig"></a>

```go
func PutContinuousBackupConfig(value GoogleAlloydbClusterContinuousBackupConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putContinuousBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a>

---

##### `PutDataplexConfig` <a name="PutDataplexConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putDataplexConfig"></a>

```go
func PutDataplexConfig(value GoogleAlloydbClusterDataplexConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putDataplexConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfig">GoogleAlloydbClusterDataplexConfig</a>

---

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value GoogleAlloydbClusterEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a>

---

##### `PutInitialUser` <a name="PutInitialUser" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putInitialUser"></a>

```go
func PutInitialUser(value GoogleAlloydbClusterInitialUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putInitialUser.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a>

---

##### `PutMaintenanceUpdatePolicy` <a name="PutMaintenanceUpdatePolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putMaintenanceUpdatePolicy"></a>

```go
func PutMaintenanceUpdatePolicy(value GoogleAlloydbClusterMaintenanceUpdatePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putMaintenanceUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putNetworkConfig"></a>

```go
func PutNetworkConfig(value GoogleAlloydbClusterNetworkConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a>

---

##### `PutPscConfig` <a name="PutPscConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putPscConfig"></a>

```go
func PutPscConfig(value GoogleAlloydbClusterPscConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putPscConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a>

---

##### `PutRestoreBackupdrBackupSource` <a name="PutRestoreBackupdrBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupdrBackupSource"></a>

```go
func PutRestoreBackupdrBackupSource(value GoogleAlloydbClusterRestoreBackupdrBackupSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupdrBackupSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSource">GoogleAlloydbClusterRestoreBackupdrBackupSource</a>

---

##### `PutRestoreBackupdrPitrSource` <a name="PutRestoreBackupdrPitrSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupdrPitrSource"></a>

```go
func PutRestoreBackupdrPitrSource(value GoogleAlloydbClusterRestoreBackupdrPitrSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupdrPitrSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource">GoogleAlloydbClusterRestoreBackupdrPitrSource</a>

---

##### `PutRestoreBackupSource` <a name="PutRestoreBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupSource"></a>

```go
func PutRestoreBackupSource(value GoogleAlloydbClusterRestoreBackupSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreBackupSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a>

---

##### `PutRestoreContinuousBackupSource` <a name="PutRestoreContinuousBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreContinuousBackupSource"></a>

```go
func PutRestoreContinuousBackupSource(value GoogleAlloydbClusterRestoreContinuousBackupSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putRestoreContinuousBackupSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a>

---

##### `PutSecondaryConfig` <a name="PutSecondaryConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putSecondaryConfig"></a>

```go
func PutSecondaryConfig(value GoogleAlloydbClusterSecondaryConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putSecondaryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAlloydbClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetAutomatedBackupPolicy` <a name="ResetAutomatedBackupPolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetAutomatedBackupPolicy"></a>

```go
func ResetAutomatedBackupPolicy()
```

##### `ResetClusterType` <a name="ResetClusterType" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetClusterType"></a>

```go
func ResetClusterType()
```

##### `ResetContinuousBackupConfig` <a name="ResetContinuousBackupConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetContinuousBackupConfig"></a>

```go
func ResetContinuousBackupConfig()
```

##### `ResetDatabaseVersion` <a name="ResetDatabaseVersion" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDatabaseVersion"></a>

```go
func ResetDatabaseVersion()
```

##### `ResetDataplexConfig` <a name="ResetDataplexConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDataplexConfig"></a>

```go
func ResetDataplexConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialUser` <a name="ResetInitialUser" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetInitialUser"></a>

```go
func ResetInitialUser()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaintenanceUpdatePolicy` <a name="ResetMaintenanceUpdatePolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetMaintenanceUpdatePolicy"></a>

```go
func ResetMaintenanceUpdatePolicy()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetNetworkConfig"></a>

```go
func ResetNetworkConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPscConfig` <a name="ResetPscConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetPscConfig"></a>

```go
func ResetPscConfig()
```

##### `ResetRestoreBackupdrBackupSource` <a name="ResetRestoreBackupdrBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreBackupdrBackupSource"></a>

```go
func ResetRestoreBackupdrBackupSource()
```

##### `ResetRestoreBackupdrPitrSource` <a name="ResetRestoreBackupdrPitrSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreBackupdrPitrSource"></a>

```go
func ResetRestoreBackupdrPitrSource()
```

##### `ResetRestoreBackupSource` <a name="ResetRestoreBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreBackupSource"></a>

```go
func ResetRestoreBackupSource()
```

##### `ResetRestoreContinuousBackupSource` <a name="ResetRestoreContinuousBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetRestoreContinuousBackupSource"></a>

```go
func ResetRestoreContinuousBackupSource()
```

##### `ResetSecondaryConfig` <a name="ResetSecondaryConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetSecondaryConfig"></a>

```go
func ResetSecondaryConfig()
```

##### `ResetSkipAwaitMajorVersionUpgrade` <a name="ResetSkipAwaitMajorVersionUpgrade" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetSkipAwaitMajorVersionUpgrade"></a>

```go
func ResetSkipAwaitMajorVersionUpgrade()
```

##### `ResetSubscriptionType` <a name="ResetSubscriptionType" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetSubscriptionType"></a>

```go
func ResetSubscriptionType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleAlloydbCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.GoogleAlloydbCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.GoogleAlloydbCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.GoogleAlloydbCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.GoogleAlloydbCluster_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleAlloydbCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAlloydbCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAlloydbCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleAlloydbCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.automatedBackupPolicy">AutomatedBackupPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.backupdrBackupSource">BackupdrBackupSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList">GoogleAlloydbClusterBackupdrBackupSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.backupSource">BackupSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList">GoogleAlloydbClusterBackupSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupConfig">ContinuousBackupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference">GoogleAlloydbClusterContinuousBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupInfo">ContinuousBackupInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList">GoogleAlloydbClusterContinuousBackupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.dataplexConfig">DataplexConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference">GoogleAlloydbClusterDataplexConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference">GoogleAlloydbClusterEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionInfo">EncryptionInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList">GoogleAlloydbClusterEncryptionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.initialUser">InitialUser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference">GoogleAlloydbClusterInitialUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.maintenanceUpdatePolicy">MaintenanceUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference">GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.migrationSource">MigrationSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList">GoogleAlloydbClusterMigrationSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference">GoogleAlloydbClusterNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference">GoogleAlloydbClusterPscConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.reconciling">Reconciling</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupdrBackupSource">RestoreBackupdrBackupSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference">GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupdrPitrSource">RestoreBackupdrPitrSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference">GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupSource">RestoreBackupSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference">GoogleAlloydbClusterRestoreBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreContinuousBackupSource">RestoreContinuousBackupSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference">GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.secondaryConfig">SecondaryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference">GoogleAlloydbClusterSecondaryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference">GoogleAlloydbClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.trialMetadata">TrialMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList">GoogleAlloydbClusterTrialMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.automatedBackupPolicyInput">AutomatedBackupPolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupConfigInput">ContinuousBackupConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.databaseVersionInput">DatabaseVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.dataplexConfigInput">DataplexConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfig">GoogleAlloydbClusterDataplexConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.initialUserInput">InitialUserInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.maintenanceUpdatePolicyInput">MaintenanceUpdatePolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.pscConfigInput">PscConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupdrBackupSourceInput">RestoreBackupdrBackupSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSource">GoogleAlloydbClusterRestoreBackupdrBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupdrPitrSourceInput">RestoreBackupdrPitrSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource">GoogleAlloydbClusterRestoreBackupdrPitrSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupSourceInput">RestoreBackupSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreContinuousBackupSourceInput">RestoreContinuousBackupSourceInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.secondaryConfigInput">SecondaryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.skipAwaitMajorVersionUpgradeInput">SkipAwaitMajorVersionUpgradeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.subscriptionTypeInput">SubscriptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterType">ClusterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.skipAwaitMajorVersionUpgrade">SkipAwaitMajorVersionUpgrade</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.subscriptionType">SubscriptionType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutomatedBackupPolicy`<sup>Required</sup> <a name="AutomatedBackupPolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.automatedBackupPolicy"></a>

```go
func AutomatedBackupPolicy() GoogleAlloydbClusterAutomatedBackupPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyOutputReference</a>

---

##### `BackupdrBackupSource`<sup>Required</sup> <a name="BackupdrBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.backupdrBackupSource"></a>

```go
func BackupdrBackupSource() GoogleAlloydbClusterBackupdrBackupSourceList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList">GoogleAlloydbClusterBackupdrBackupSourceList</a>

---

##### `BackupSource`<sup>Required</sup> <a name="BackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.backupSource"></a>

```go
func BackupSource() GoogleAlloydbClusterBackupSourceList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList">GoogleAlloydbClusterBackupSourceList</a>

---

##### `ContinuousBackupConfig`<sup>Required</sup> <a name="ContinuousBackupConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupConfig"></a>

```go
func ContinuousBackupConfig() GoogleAlloydbClusterContinuousBackupConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference">GoogleAlloydbClusterContinuousBackupConfigOutputReference</a>

---

##### `ContinuousBackupInfo`<sup>Required</sup> <a name="ContinuousBackupInfo" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupInfo"></a>

```go
func ContinuousBackupInfo() GoogleAlloydbClusterContinuousBackupInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList">GoogleAlloydbClusterContinuousBackupInfoList</a>

---

##### `DataplexConfig`<sup>Required</sup> <a name="DataplexConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.dataplexConfig"></a>

```go
func DataplexConfig() GoogleAlloydbClusterDataplexConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference">GoogleAlloydbClusterDataplexConfigOutputReference</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionConfig"></a>

```go
func EncryptionConfig() GoogleAlloydbClusterEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference">GoogleAlloydbClusterEncryptionConfigOutputReference</a>

---

##### `EncryptionInfo`<sup>Required</sup> <a name="EncryptionInfo" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionInfo"></a>

```go
func EncryptionInfo() GoogleAlloydbClusterEncryptionInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList">GoogleAlloydbClusterEncryptionInfoList</a>

---

##### `InitialUser`<sup>Required</sup> <a name="InitialUser" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.initialUser"></a>

```go
func InitialUser() GoogleAlloydbClusterInitialUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference">GoogleAlloydbClusterInitialUserOutputReference</a>

---

##### `MaintenanceUpdatePolicy`<sup>Required</sup> <a name="MaintenanceUpdatePolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.maintenanceUpdatePolicy"></a>

```go
func MaintenanceUpdatePolicy() GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference">GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference</a>

---

##### `MigrationSource`<sup>Required</sup> <a name="MigrationSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.migrationSource"></a>

```go
func MigrationSource() GoogleAlloydbClusterMigrationSourceList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList">GoogleAlloydbClusterMigrationSourceList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.networkConfig"></a>

```go
func NetworkConfig() GoogleAlloydbClusterNetworkConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference">GoogleAlloydbClusterNetworkConfigOutputReference</a>

---

##### `PscConfig`<sup>Required</sup> <a name="PscConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.pscConfig"></a>

```go
func PscConfig() GoogleAlloydbClusterPscConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference">GoogleAlloydbClusterPscConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `RestoreBackupdrBackupSource`<sup>Required</sup> <a name="RestoreBackupdrBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupdrBackupSource"></a>

```go
func RestoreBackupdrBackupSource() GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference">GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference</a>

---

##### `RestoreBackupdrPitrSource`<sup>Required</sup> <a name="RestoreBackupdrPitrSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupdrPitrSource"></a>

```go
func RestoreBackupdrPitrSource() GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference">GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference</a>

---

##### `RestoreBackupSource`<sup>Required</sup> <a name="RestoreBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupSource"></a>

```go
func RestoreBackupSource() GoogleAlloydbClusterRestoreBackupSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference">GoogleAlloydbClusterRestoreBackupSourceOutputReference</a>

---

##### `RestoreContinuousBackupSource`<sup>Required</sup> <a name="RestoreContinuousBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreContinuousBackupSource"></a>

```go
func RestoreContinuousBackupSource() GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference">GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference</a>

---

##### `SecondaryConfig`<sup>Required</sup> <a name="SecondaryConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.secondaryConfig"></a>

```go
func SecondaryConfig() GoogleAlloydbClusterSecondaryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference">GoogleAlloydbClusterSecondaryConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.timeouts"></a>

```go
func Timeouts() GoogleAlloydbClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference">GoogleAlloydbClusterTimeoutsOutputReference</a>

---

##### `TrialMetadata`<sup>Required</sup> <a name="TrialMetadata" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.trialMetadata"></a>

```go
func TrialMetadata() GoogleAlloydbClusterTrialMetadataList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList">GoogleAlloydbClusterTrialMetadataList</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AutomatedBackupPolicyInput`<sup>Optional</sup> <a name="AutomatedBackupPolicyInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.automatedBackupPolicyInput"></a>

```go
func AutomatedBackupPolicyInput() GoogleAlloydbClusterAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterTypeInput"></a>

```go
func ClusterTypeInput() *string
```

- *Type:* *string

---

##### `ContinuousBackupConfigInput`<sup>Optional</sup> <a name="ContinuousBackupConfigInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.continuousBackupConfigInput"></a>

```go
func ContinuousBackupConfigInput() GoogleAlloydbClusterContinuousBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a>

---

##### `DatabaseVersionInput`<sup>Optional</sup> <a name="DatabaseVersionInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.databaseVersionInput"></a>

```go
func DatabaseVersionInput() *string
```

- *Type:* *string

---

##### `DataplexConfigInput`<sup>Optional</sup> <a name="DataplexConfigInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.dataplexConfigInput"></a>

```go
func DataplexConfigInput() GoogleAlloydbClusterDataplexConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfig">GoogleAlloydbClusterDataplexConfig</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() GoogleAlloydbClusterEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialUserInput`<sup>Optional</sup> <a name="InitialUserInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.initialUserInput"></a>

```go
func InitialUserInput() GoogleAlloydbClusterInitialUser
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenanceUpdatePolicyInput`<sup>Optional</sup> <a name="MaintenanceUpdatePolicyInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.maintenanceUpdatePolicyInput"></a>

```go
func MaintenanceUpdatePolicyInput() GoogleAlloydbClusterMaintenanceUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a>

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.networkConfigInput"></a>

```go
func NetworkConfigInput() GoogleAlloydbClusterNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PscConfigInput`<sup>Optional</sup> <a name="PscConfigInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.pscConfigInput"></a>

```go
func PscConfigInput() GoogleAlloydbClusterPscConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a>

---

##### `RestoreBackupdrBackupSourceInput`<sup>Optional</sup> <a name="RestoreBackupdrBackupSourceInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupdrBackupSourceInput"></a>

```go
func RestoreBackupdrBackupSourceInput() GoogleAlloydbClusterRestoreBackupdrBackupSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSource">GoogleAlloydbClusterRestoreBackupdrBackupSource</a>

---

##### `RestoreBackupdrPitrSourceInput`<sup>Optional</sup> <a name="RestoreBackupdrPitrSourceInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupdrPitrSourceInput"></a>

```go
func RestoreBackupdrPitrSourceInput() GoogleAlloydbClusterRestoreBackupdrPitrSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource">GoogleAlloydbClusterRestoreBackupdrPitrSource</a>

---

##### `RestoreBackupSourceInput`<sup>Optional</sup> <a name="RestoreBackupSourceInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreBackupSourceInput"></a>

```go
func RestoreBackupSourceInput() GoogleAlloydbClusterRestoreBackupSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a>

---

##### `RestoreContinuousBackupSourceInput`<sup>Optional</sup> <a name="RestoreContinuousBackupSourceInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.restoreContinuousBackupSourceInput"></a>

```go
func RestoreContinuousBackupSourceInput() GoogleAlloydbClusterRestoreContinuousBackupSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a>

---

##### `SecondaryConfigInput`<sup>Optional</sup> <a name="SecondaryConfigInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.secondaryConfigInput"></a>

```go
func SecondaryConfigInput() GoogleAlloydbClusterSecondaryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a>

---

##### `SkipAwaitMajorVersionUpgradeInput`<sup>Optional</sup> <a name="SkipAwaitMajorVersionUpgradeInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.skipAwaitMajorVersionUpgradeInput"></a>

```go
func SkipAwaitMajorVersionUpgradeInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionTypeInput`<sup>Optional</sup> <a name="SubscriptionTypeInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.subscriptionTypeInput"></a>

```go
func SubscriptionTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.clusterType"></a>

```go
func ClusterType() *string
```

- *Type:* *string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SkipAwaitMajorVersionUpgrade`<sup>Required</sup> <a name="SkipAwaitMajorVersionUpgrade" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.skipAwaitMajorVersionUpgrade"></a>

```go
func SkipAwaitMajorVersionUpgrade() interface{}
```

- *Type:* interface{}

---

##### `SubscriptionType`<sup>Required</sup> <a name="SubscriptionType" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.subscriptionType"></a>

```go
func SubscriptionType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAlloydbClusterAutomatedBackupPolicy <a name="GoogleAlloydbClusterAutomatedBackupPolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterAutomatedBackupPolicy {
	BackupWindow: *string,
	Enabled: interface{},
	EncryptionConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig,
	Labels: *map[string]*string,
	Location: *string,
	QuantityBasedRetention: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention,
	TimeBasedRetention: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention,
	WeeklySchedule: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.backupWindow">BackupWindow</a></code> | <code>*string</code> | The length of the time window during which a backup can be taken. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether automated backups are enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels to apply to backups created using this configuration. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.location">Location</a></code> | <code>*string</code> | The location where the backup will be stored. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.quantityBasedRetention">QuantityBasedRetention</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | quantity_based_retention block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.timeBasedRetention">TimeBasedRetention</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | time_based_retention block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `BackupWindow`<sup>Optional</sup> <a name="BackupWindow" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.backupWindow"></a>

```go
BackupWindow *string
```

- *Type:* *string

The length of the time window during which a backup can be taken.

If a backup does not succeed within this time window, it will be canceled and considered failed.

The backup window must be at least 5 minutes long. There is no upper bound on the window. If not set, it will default to 1 hour.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#backup_window GoogleAlloydbCluster#backup_window}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether automated backups are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#enabled GoogleAlloydbCluster#enabled}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.encryptionConfig"></a>

```go
EncryptionConfig GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#encryption_config GoogleAlloydbCluster#encryption_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels to apply to backups created using this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#labels GoogleAlloydbCluster#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the backup will be stored.

Currently, the only supported option is to store the backup in the same region as the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#location GoogleAlloydbCluster#location}

---

##### `QuantityBasedRetention`<sup>Optional</sup> <a name="QuantityBasedRetention" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.quantityBasedRetention"></a>

```go
QuantityBasedRetention GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

quantity_based_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#quantity_based_retention GoogleAlloydbCluster#quantity_based_retention}

---

##### `TimeBasedRetention`<sup>Optional</sup> <a name="TimeBasedRetention" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.timeBasedRetention"></a>

```go
TimeBasedRetention GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

time_based_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#time_based_retention GoogleAlloydbCluster#time_based_retention}

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy.property.weeklySchedule"></a>

```go
WeeklySchedule GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#weekly_schedule GoogleAlloydbCluster#weekly_schedule}

---

### GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig <a name="GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The fully-qualified resource name of the KMS key. |

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#kms_key_name GoogleAlloydbCluster#kms_key_name}

---

### GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention <a name="GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention {
	Count: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.property.count">Count</a></code> | <code>*f64</code> | The number of backups to retain. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

The number of backups to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#count GoogleAlloydbCluster#count}

---

### GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention <a name="GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention {
	RetentionPeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention.property.retentionPeriod">RetentionPeriod</a></code> | <code>*string</code> | The retention period. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". |

---

##### `RetentionPeriod`<sup>Optional</sup> <a name="RetentionPeriod" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention.property.retentionPeriod"></a>

```go
RetentionPeriod *string
```

- *Type:* *string

The retention period. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#retention_period GoogleAlloydbCluster#retention_period}

---

### GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule {
	StartTimes: interface{},
	DaysOfWeek: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.startTimes">StartTimes</a></code> | <code>interface{}</code> | start_times block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | The days of the week to perform a backup. |

---

##### `StartTimes`<sup>Required</sup> <a name="StartTimes" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.startTimes"></a>

```go
StartTimes interface{}
```

- *Type:* interface{}

start_times block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#start_times GoogleAlloydbCluster#start_times}

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

The days of the week to perform a backup.

At least one day of the week must be provided. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#days_of_week GoogleAlloydbCluster#days_of_week}

---

### GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.hours">Hours</a></code> | <code>*f64</code> | Hours of day in 24 hour format. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of hour of day. Currently, only the value 0 is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds in nanoseconds. Currently, only the value 0 is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of minutes of the time. Currently, only the value 0 is supported. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of day in 24 hour format.

Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#hours GoogleAlloydbCluster#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of hour of day. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#minutes GoogleAlloydbCluster#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#nanos GoogleAlloydbCluster#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimes.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of minutes of the time. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#seconds GoogleAlloydbCluster#seconds}

---

### GoogleAlloydbClusterBackupdrBackupSource <a name="GoogleAlloydbClusterBackupdrBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterBackupdrBackupSource {

}
```


### GoogleAlloydbClusterBackupSource <a name="GoogleAlloydbClusterBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterBackupSource {

}
```


### GoogleAlloydbClusterConfig <a name="GoogleAlloydbClusterConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Location: *string,
	Annotations: *map[string]*string,
	AutomatedBackupPolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy,
	ClusterType: *string,
	ContinuousBackupConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig,
	DatabaseVersion: *string,
	DataplexConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfig,
	DeletionPolicy: *string,
	DeletionProtection: interface{},
	DisplayName: *string,
	EncryptionConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig,
	Etag: *string,
	Id: *string,
	InitialUser: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterInitialUser,
	Labels: *map[string]*string,
	MaintenanceUpdatePolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy,
	NetworkConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig,
	Project: *string,
	PscConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterPscConfig,
	RestoreBackupdrBackupSource: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSource,
	RestoreBackupdrPitrSource: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource,
	RestoreBackupSource: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource,
	RestoreContinuousBackupSource: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource,
	SecondaryConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig,
	SkipAwaitMajorVersionUpgrade: interface{},
	SubscriptionType: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | The ID of the alloydb cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.location">Location</a></code> | <code>*string</code> | The location where the alloydb cluster should reside. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Annotations to allow client tools to store small amount of arbitrary data. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.automatedBackupPolicy">AutomatedBackupPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a></code> | automated_backup_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.clusterType">ClusterType</a></code> | <code>*string</code> | The type of cluster. If not set, defaults to PRIMARY. Default value: "PRIMARY" Possible values: ["PRIMARY", "SECONDARY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.continuousBackupConfig">ContinuousBackupConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a></code> | continuous_backup_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | The database engine major version. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.dataplexConfig">DataplexConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfig">GoogleAlloydbClusterDataplexConfig</a></code> | dataplex_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/alloydb_cluster.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether Terraform will be prevented from destroying the cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User-settable and human-readable display name for the Cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.etag">Etag</a></code> | <code>*string</code> | For Resource freshness validation (https://google.aip.dev/154). |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#id GoogleAlloydbCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.initialUser">InitialUser</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a></code> | initial_user block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels for the alloydb cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.maintenanceUpdatePolicy">MaintenanceUpdatePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a></code> | maintenance_update_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#project GoogleAlloydbCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.pscConfig">PscConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a></code> | psc_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreBackupdrBackupSource">RestoreBackupdrBackupSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSource">GoogleAlloydbClusterRestoreBackupdrBackupSource</a></code> | restore_backupdr_backup_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreBackupdrPitrSource">RestoreBackupdrPitrSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource">GoogleAlloydbClusterRestoreBackupdrPitrSource</a></code> | restore_backupdr_pitr_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreBackupSource">RestoreBackupSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a></code> | restore_backup_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreContinuousBackupSource">RestoreContinuousBackupSource</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a></code> | restore_continuous_backup_source block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.secondaryConfig">SecondaryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a></code> | secondary_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.skipAwaitMajorVersionUpgrade">SkipAwaitMajorVersionUpgrade</a></code> | <code>interface{}</code> | Set to true to skip awaiting on the major version upgrade of the cluster. Possible values: true, false Default value: "true". |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.subscriptionType">SubscriptionType</a></code> | <code>*string</code> | The subscrition type of cluster. Possible values: ["TRIAL", "STANDARD"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

The ID of the alloydb cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#cluster_id GoogleAlloydbCluster#cluster_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the alloydb cluster should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#location GoogleAlloydbCluster#location}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Annotations to allow client tools to store small amount of arbitrary data.

This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#annotations GoogleAlloydbCluster#annotations}

---

##### `AutomatedBackupPolicy`<sup>Optional</sup> <a name="AutomatedBackupPolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.automatedBackupPolicy"></a>

```go
AutomatedBackupPolicy GoogleAlloydbClusterAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a>

automated_backup_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#automated_backup_policy GoogleAlloydbCluster#automated_backup_policy}

---

##### `ClusterType`<sup>Optional</sup> <a name="ClusterType" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.clusterType"></a>

```go
ClusterType *string
```

- *Type:* *string

The type of cluster. If not set, defaults to PRIMARY. Default value: "PRIMARY" Possible values: ["PRIMARY", "SECONDARY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#cluster_type GoogleAlloydbCluster#cluster_type}

---

##### `ContinuousBackupConfig`<sup>Optional</sup> <a name="ContinuousBackupConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.continuousBackupConfig"></a>

```go
ContinuousBackupConfig GoogleAlloydbClusterContinuousBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a>

continuous_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#continuous_backup_config GoogleAlloydbCluster#continuous_backup_config}

---

##### `DatabaseVersion`<sup>Optional</sup> <a name="DatabaseVersion" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.databaseVersion"></a>

```go
DatabaseVersion *string
```

- *Type:* *string

The database engine major version.

This is an optional field and it's populated at the Cluster creation time.
Note: Changing this field to a higer version results in upgrading the AlloyDB cluster which is an irreversible change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#database_version GoogleAlloydbCluster#database_version}

---

##### `DataplexConfig`<sup>Optional</sup> <a name="DataplexConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.dataplexConfig"></a>

```go
DataplexConfig GoogleAlloydbClusterDataplexConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfig">GoogleAlloydbClusterDataplexConfig</a>

dataplex_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#dataplex_config GoogleAlloydbCluster#dataplex_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/alloydb_cluster.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#deletion_policy GoogleAlloydbCluster#deletion_policy}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether Terraform will be prevented from destroying the cluster.

When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the cluster will fail.
When the field is set to false, deleting the cluster is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#deletion_protection GoogleAlloydbCluster#deletion_protection}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User-settable and human-readable display name for the Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#display_name GoogleAlloydbCluster#display_name}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.encryptionConfig"></a>

```go
EncryptionConfig GoogleAlloydbClusterEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#encryption_config GoogleAlloydbCluster#encryption_config}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

For Resource freshness validation (https://google.aip.dev/154).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#etag GoogleAlloydbCluster#etag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#id GoogleAlloydbCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialUser`<sup>Optional</sup> <a name="InitialUser" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.initialUser"></a>

```go
InitialUser GoogleAlloydbClusterInitialUser
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a>

initial_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#initial_user GoogleAlloydbCluster#initial_user}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels for the alloydb cluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#labels GoogleAlloydbCluster#labels}

---

##### `MaintenanceUpdatePolicy`<sup>Optional</sup> <a name="MaintenanceUpdatePolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.maintenanceUpdatePolicy"></a>

```go
MaintenanceUpdatePolicy GoogleAlloydbClusterMaintenanceUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a>

maintenance_update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#maintenance_update_policy GoogleAlloydbCluster#maintenance_update_policy}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.networkConfig"></a>

```go
NetworkConfig GoogleAlloydbClusterNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#network_config GoogleAlloydbCluster#network_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#project GoogleAlloydbCluster#project}.

---

##### `PscConfig`<sup>Optional</sup> <a name="PscConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.pscConfig"></a>

```go
PscConfig GoogleAlloydbClusterPscConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a>

psc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#psc_config GoogleAlloydbCluster#psc_config}

---

##### `RestoreBackupdrBackupSource`<sup>Optional</sup> <a name="RestoreBackupdrBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreBackupdrBackupSource"></a>

```go
RestoreBackupdrBackupSource GoogleAlloydbClusterRestoreBackupdrBackupSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSource">GoogleAlloydbClusterRestoreBackupdrBackupSource</a>

restore_backupdr_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#restore_backupdr_backup_source GoogleAlloydbCluster#restore_backupdr_backup_source}

---

##### `RestoreBackupdrPitrSource`<sup>Optional</sup> <a name="RestoreBackupdrPitrSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreBackupdrPitrSource"></a>

```go
RestoreBackupdrPitrSource GoogleAlloydbClusterRestoreBackupdrPitrSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource">GoogleAlloydbClusterRestoreBackupdrPitrSource</a>

restore_backupdr_pitr_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#restore_backupdr_pitr_source GoogleAlloydbCluster#restore_backupdr_pitr_source}

---

##### `RestoreBackupSource`<sup>Optional</sup> <a name="RestoreBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreBackupSource"></a>

```go
RestoreBackupSource GoogleAlloydbClusterRestoreBackupSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a>

restore_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#restore_backup_source GoogleAlloydbCluster#restore_backup_source}

---

##### `RestoreContinuousBackupSource`<sup>Optional</sup> <a name="RestoreContinuousBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.restoreContinuousBackupSource"></a>

```go
RestoreContinuousBackupSource GoogleAlloydbClusterRestoreContinuousBackupSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a>

restore_continuous_backup_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#restore_continuous_backup_source GoogleAlloydbCluster#restore_continuous_backup_source}

---

##### `SecondaryConfig`<sup>Optional</sup> <a name="SecondaryConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.secondaryConfig"></a>

```go
SecondaryConfig GoogleAlloydbClusterSecondaryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a>

secondary_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#secondary_config GoogleAlloydbCluster#secondary_config}

---

##### `SkipAwaitMajorVersionUpgrade`<sup>Optional</sup> <a name="SkipAwaitMajorVersionUpgrade" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.skipAwaitMajorVersionUpgrade"></a>

```go
SkipAwaitMajorVersionUpgrade interface{}
```

- *Type:* interface{}

Set to true to skip awaiting on the major version upgrade of the cluster. Possible values: true, false Default value: "true".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#skip_await_major_version_upgrade GoogleAlloydbCluster#skip_await_major_version_upgrade}

---

##### `SubscriptionType`<sup>Optional</sup> <a name="SubscriptionType" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.subscriptionType"></a>

```go
SubscriptionType *string
```

- *Type:* *string

The subscrition type of cluster. Possible values: ["TRIAL", "STANDARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#subscription_type GoogleAlloydbCluster#subscription_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterConfig.property.timeouts"></a>

```go
Timeouts GoogleAlloydbClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts">GoogleAlloydbClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#timeouts GoogleAlloydbCluster#timeouts}

---

### GoogleAlloydbClusterContinuousBackupConfig <a name="GoogleAlloydbClusterContinuousBackupConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterContinuousBackupConfig {
	Enabled: interface{},
	EncryptionConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig,
	RecoveryWindowDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether continuous backup recovery is enabled. If not set, defaults to true. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.recoveryWindowDays">RecoveryWindowDays</a></code> | <code>*f64</code> | The numbers of days that are eligible to restore from using PITR. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether continuous backup recovery is enabled. If not set, defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#enabled GoogleAlloydbCluster#enabled}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.encryptionConfig"></a>

```go
EncryptionConfig GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#encryption_config GoogleAlloydbCluster#encryption_config}

---

##### `RecoveryWindowDays`<sup>Optional</sup> <a name="RecoveryWindowDays" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig.property.recoveryWindowDays"></a>

```go
RecoveryWindowDays *f64
```

- *Type:* *f64

The numbers of days that are eligible to restore from using PITR.

To support the entire recovery window, backups and logs are retained for one day more than the recovery window.

If not set, defaults to 14 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#recovery_window_days GoogleAlloydbCluster#recovery_window_days}

---

### GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig <a name="GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The fully-qualified resource name of the KMS key. |

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#kms_key_name GoogleAlloydbCluster#kms_key_name}

---

### GoogleAlloydbClusterContinuousBackupInfo <a name="GoogleAlloydbClusterContinuousBackupInfo" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterContinuousBackupInfo {

}
```


### GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo <a name="GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo {

}
```


### GoogleAlloydbClusterDataplexConfig <a name="GoogleAlloydbClusterDataplexConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterDataplexConfig {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether Dataplex integration is enabled for the cluster. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether Dataplex integration is enabled for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#enabled GoogleAlloydbCluster#enabled}

---

### GoogleAlloydbClusterEncryptionConfig <a name="GoogleAlloydbClusterEncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterEncryptionConfig {
	KmsKeyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The fully-qualified resource name of the KMS key. |

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The fully-qualified resource name of the KMS key.

Each Cloud KMS key is regionalized and has the following format: projects/[PROJECT]/locations/[REGION]/keyRings/[RING]/cryptoKeys/[KEY_NAME].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#kms_key_name GoogleAlloydbCluster#kms_key_name}

---

### GoogleAlloydbClusterEncryptionInfo <a name="GoogleAlloydbClusterEncryptionInfo" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterEncryptionInfo {

}
```


### GoogleAlloydbClusterInitialUser <a name="GoogleAlloydbClusterInitialUser" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterInitialUser {
	Password: *string,
	PasswordWo: *string,
	PasswordWoVersion: *string,
	User: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.password">Password</a></code> | <code>*string</code> | The initial password for the user. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | The initial password for the user. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>*string</code> | Triggers update of 'password_wo' write-only. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.user">User</a></code> | <code>*string</code> | The database username. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.password"></a>

```go
Password *string
```

- *Type:* *string

The initial password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#password GoogleAlloydbCluster#password}

---

##### `PasswordWo`<sup>Optional</sup> <a name="PasswordWo" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.passwordWo"></a>

```go
PasswordWo *string
```

- *Type:* *string

The initial password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#password_wo GoogleAlloydbCluster#password_wo}

---

##### `PasswordWoVersion`<sup>Optional</sup> <a name="PasswordWoVersion" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.passwordWoVersion"></a>

```go
PasswordWoVersion *string
```

- *Type:* *string

Triggers update of 'password_wo' write-only.

Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#password_wo_version GoogleAlloydbCluster#password_wo_version}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser.property.user"></a>

```go
User *string
```

- *Type:* *string

The database username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#user GoogleAlloydbCluster#user}

---

### GoogleAlloydbClusterMaintenanceUpdatePolicy <a name="GoogleAlloydbClusterMaintenanceUpdatePolicy" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterMaintenanceUpdatePolicy {
	MaintenanceWindows: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy.property.maintenanceWindows">MaintenanceWindows</a></code> | <code>interface{}</code> | maintenance_windows block. |

---

##### `MaintenanceWindows`<sup>Optional</sup> <a name="MaintenanceWindows" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy.property.maintenanceWindows"></a>

```go
MaintenanceWindows interface{}
```

- *Type:* interface{}

maintenance_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#maintenance_windows GoogleAlloydbCluster#maintenance_windows}

---

### GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows <a name="GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows {
	Day: *string,
	StartTime: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows.property.day">Day</a></code> | <code>*string</code> | Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a></code> | start_time block. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows.property.day"></a>

```go
Day *string
```

- *Type:* *string

Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#day GoogleAlloydbCluster#day}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindows.property.startTime"></a>

```go
StartTime GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#start_time GoogleAlloydbCluster#start_time}

---

### GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime <a name="GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of hour of day. Currently, only the value 0 is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds in nanoseconds. Currently, only the value 0 is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of minutes of the time. Currently, only the value 0 is supported. |

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#hours GoogleAlloydbCluster#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of hour of day. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#minutes GoogleAlloydbCluster#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds in nanoseconds. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#nanos GoogleAlloydbCluster#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of minutes of the time. Currently, only the value 0 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#seconds GoogleAlloydbCluster#seconds}

---

### GoogleAlloydbClusterMigrationSource <a name="GoogleAlloydbClusterMigrationSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterMigrationSource {

}
```


### GoogleAlloydbClusterNetworkConfig <a name="GoogleAlloydbClusterNetworkConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterNetworkConfig {
	AllocatedIpRange: *string,
	Network: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>*string</code> | The name of the allocated IP range for the private IP AlloyDB cluster. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig.property.network">Network</a></code> | <code>*string</code> | The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. |

---

##### `AllocatedIpRange`<sup>Optional</sup> <a name="AllocatedIpRange" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig.property.allocatedIpRange"></a>

```go
AllocatedIpRange *string
```

- *Type:* *string

The name of the allocated IP range for the private IP AlloyDB cluster.

For example: "google-managed-services-default".
If set, the instance IPs for this cluster will be created in the allocated range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#allocated_ip_range GoogleAlloydbCluster#allocated_ip_range}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP.

The network must belong to the same project as the cluster.
It is specified in the form: "projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#network GoogleAlloydbCluster#network}

---

### GoogleAlloydbClusterPscConfig <a name="GoogleAlloydbClusterPscConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterPscConfig {
	PscEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig.property.pscEnabled">PscEnabled</a></code> | <code>interface{}</code> | Create an instance that allows connections from Private Service Connect endpoints to the instance. |

---

##### `PscEnabled`<sup>Optional</sup> <a name="PscEnabled" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig.property.pscEnabled"></a>

```go
PscEnabled interface{}
```

- *Type:* interface{}

Create an instance that allows connections from Private Service Connect endpoints to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#psc_enabled GoogleAlloydbCluster#psc_enabled}

---

### GoogleAlloydbClusterRestoreBackupdrBackupSource <a name="GoogleAlloydbClusterRestoreBackupdrBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterRestoreBackupdrBackupSource {
	Backup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSource.property.backup">Backup</a></code> | <code>*string</code> | The name of the BackupDR backup that this cluster is restored from. It must be of the format "projects/[PROJECT]/locations/[LOCATION]/backupVaults/[VAULT_ID]/dataSources/[DATASOURCE_ID]/backups/[BACKUP_ID]". |

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSource.property.backup"></a>

```go
Backup *string
```

- *Type:* *string

The name of the BackupDR backup that this cluster is restored from. It must be of the format "projects/[PROJECT]/locations/[LOCATION]/backupVaults/[VAULT_ID]/dataSources/[DATASOURCE_ID]/backups/[BACKUP_ID]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#backup GoogleAlloydbCluster#backup}

---

### GoogleAlloydbClusterRestoreBackupdrPitrSource <a name="GoogleAlloydbClusterRestoreBackupdrPitrSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterRestoreBackupdrPitrSource {
	DataSource: *string,
	PointInTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource.property.dataSource">DataSource</a></code> | <code>*string</code> | The name of the BackupDR data source that this cluster is restore from. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource.property.pointInTime">PointInTime</a></code> | <code>*string</code> | The point in time that this cluster is restored to, in RFC 3339 format. |

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource.property.dataSource"></a>

```go
DataSource *string
```

- *Type:* *string

The name of the BackupDR data source that this cluster is restore from.

It must be of the format "projects/[PROJECT]/locations/[LOCATION]/backupVaults/[VAULT_ID]/dataSources/[DATASOURCE_ID]"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#data_source GoogleAlloydbCluster#data_source}

---

##### `PointInTime`<sup>Required</sup> <a name="PointInTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource.property.pointInTime"></a>

```go
PointInTime *string
```

- *Type:* *string

The point in time that this cluster is restored to, in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#point_in_time GoogleAlloydbCluster#point_in_time}

---

### GoogleAlloydbClusterRestoreBackupSource <a name="GoogleAlloydbClusterRestoreBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterRestoreBackupSource {
	BackupName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource.property.backupName">BackupName</a></code> | <code>*string</code> | The name of the backup that this cluster is restored from. |

---

##### `BackupName`<sup>Required</sup> <a name="BackupName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource.property.backupName"></a>

```go
BackupName *string
```

- *Type:* *string

The name of the backup that this cluster is restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#backup_name GoogleAlloydbCluster#backup_name}

---

### GoogleAlloydbClusterRestoreContinuousBackupSource <a name="GoogleAlloydbClusterRestoreContinuousBackupSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterRestoreContinuousBackupSource {
	Cluster: *string,
	PointInTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.property.cluster">Cluster</a></code> | <code>*string</code> | The name of the source cluster that this cluster is restored from. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.property.pointInTime">PointInTime</a></code> | <code>*string</code> | The point in time that this cluster is restored to, in RFC 3339 format. |

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The name of the source cluster that this cluster is restored from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#cluster GoogleAlloydbCluster#cluster}

---

##### `PointInTime`<sup>Required</sup> <a name="PointInTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource.property.pointInTime"></a>

```go
PointInTime *string
```

- *Type:* *string

The point in time that this cluster is restored to, in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#point_in_time GoogleAlloydbCluster#point_in_time}

---

### GoogleAlloydbClusterSecondaryConfig <a name="GoogleAlloydbClusterSecondaryConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterSecondaryConfig {
	PrimaryClusterName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig.property.primaryClusterName">PrimaryClusterName</a></code> | <code>*string</code> | Name of the primary cluster must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'. |

---

##### `PrimaryClusterName`<sup>Required</sup> <a name="PrimaryClusterName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig.property.primaryClusterName"></a>

```go
PrimaryClusterName *string
```

- *Type:* *string

Name of the primary cluster must be in the format 'projects/{project}/locations/{location}/clusters/{cluster_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#primary_cluster_name GoogleAlloydbCluster#primary_cluster_name}

---

### GoogleAlloydbClusterTimeouts <a name="GoogleAlloydbClusterTimeouts" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#create GoogleAlloydbCluster#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#delete GoogleAlloydbCluster#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#update GoogleAlloydbCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#create GoogleAlloydbCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#delete GoogleAlloydbCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_alloydb_cluster#update GoogleAlloydbCluster#update}.

---

### GoogleAlloydbClusterTrialMetadata <a name="GoogleAlloydbClusterTrialMetadata" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

&googlealloydbcluster.GoogleAlloydbClusterTrialMetadata {

}
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterAutomatedBackupPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterAutomatedBackupPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putQuantityBasedRetention">PutQuantityBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putTimeBasedRetention">PutTimeBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule">PutWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetBackupWindow">ResetBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetQuantityBasedRetention">ResetQuantityBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetTimeBasedRetention">ResetTimeBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetWeeklySchedule">ResetWeeklySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

---

##### `PutQuantityBasedRetention` <a name="PutQuantityBasedRetention" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putQuantityBasedRetention"></a>

```go
func PutQuantityBasedRetention(value GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putQuantityBasedRetention.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

---

##### `PutTimeBasedRetention` <a name="PutTimeBasedRetention" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putTimeBasedRetention"></a>

```go
func PutTimeBasedRetention(value GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putTimeBasedRetention.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

---

##### `PutWeeklySchedule` <a name="PutWeeklySchedule" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule"></a>

```go
func PutWeeklySchedule(value GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

---

##### `ResetBackupWindow` <a name="ResetBackupWindow" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetBackupWindow"></a>

```go
func ResetBackupWindow()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetQuantityBasedRetention` <a name="ResetQuantityBasedRetention" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetQuantityBasedRetention"></a>

```go
func ResetQuantityBasedRetention()
```

##### `ResetTimeBasedRetention` <a name="ResetTimeBasedRetention" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetTimeBasedRetention"></a>

```go
func ResetTimeBasedRetention()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.resetWeeklySchedule"></a>

```go
func ResetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetention">QuantityBasedRetention</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetention">TimeBasedRetention</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindowInput">BackupWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetentionInput">QuantityBasedRetentionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetentionInput">TimeBasedRetentionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindow">BackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfig"></a>

```go
func EncryptionConfig() GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfigOutputReference</a>

---

##### `QuantityBasedRetention`<sup>Required</sup> <a name="QuantityBasedRetention" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetention"></a>

```go
func QuantityBasedRetention() GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference</a>

---

##### `TimeBasedRetention`<sup>Required</sup> <a name="TimeBasedRetention" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetention"></a>

```go
func TimeBasedRetention() GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklySchedule"></a>

```go
func WeeklySchedule() GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference</a>

---

##### `BackupWindowInput`<sup>Optional</sup> <a name="BackupWindowInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindowInput"></a>

```go
func BackupWindowInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig">GoogleAlloydbClusterAutomatedBackupPolicyEncryptionConfig</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `QuantityBasedRetentionInput`<sup>Optional</sup> <a name="QuantityBasedRetentionInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.quantityBasedRetentionInput"></a>

```go
func QuantityBasedRetentionInput() GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

---

##### `TimeBasedRetentionInput`<sup>Optional</sup> <a name="TimeBasedRetentionInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.timeBasedRetentionInput"></a>

```go
func TimeBasedRetentionInput() GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.weeklyScheduleInput"></a>

```go
func WeeklyScheduleInput() GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

---

##### `BackupWindow`<sup>Required</sup> <a name="BackupWindow" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.backupWindow"></a>

```go
func BackupWindow() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterAutomatedBackupPolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicy">GoogleAlloydbClusterAutomatedBackupPolicy</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resetCount">ResetCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.resetCount"></a>

```go
func ResetCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetentionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyQuantityBasedRetention</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resetRetentionPeriod">ResetRetentionPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionPeriod` <a name="ResetRetentionPeriod" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.resetRetentionPeriod"></a>

```go
func ResetRetentionPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriodInput">RetentionPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriod">RetentionPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionPeriodInput`<sup>Optional</sup> <a name="RetentionPeriodInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriodInput"></a>

```go
func RetentionPeriodInput() *string
```

- *Type:* *string

---

##### `RetentionPeriod`<sup>Required</sup> <a name="RetentionPeriod" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.retentionPeriod"></a>

```go
func RetentionPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetentionOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention">GoogleAlloydbClusterAutomatedBackupPolicyTimeBasedRetention</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.putStartTimes">PutStartTimes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTimes` <a name="PutStartTimes" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.putStartTimes"></a>

```go
func PutStartTimes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.putStartTimes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.resetDaysOfWeek"></a>

```go
func ResetDaysOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimes">StartTimes</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimesInput">StartTimesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTimes`<sup>Required</sup> <a name="StartTimes" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimes"></a>

```go
func StartTimes() GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList">GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList</a>

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `StartTimesInput`<sup>Optional</sup> <a name="StartTimesInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.startTimesInput"></a>

```go
func StartTimesInput() interface{}
```

- *Type:* interface{}

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule">GoogleAlloydbClusterAutomatedBackupPolicyWeeklySchedule</a>

---


### GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get"></a>

```go
func Get(index *f64) GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference <a name="GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterAutomatedBackupPolicyWeeklyScheduleStartTimesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAlloydbClusterBackupdrBackupSourceList <a name="GoogleAlloydbClusterBackupdrBackupSourceList" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterBackupdrBackupSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAlloydbClusterBackupdrBackupSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.get"></a>

```go
func Get(index *f64) GoogleAlloydbClusterBackupdrBackupSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleAlloydbClusterBackupdrBackupSourceOutputReference <a name="GoogleAlloydbClusterBackupdrBackupSourceOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterBackupdrBackupSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAlloydbClusterBackupdrBackupSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.property.backup">Backup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSource">GoogleAlloydbClusterBackupdrBackupSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.property.backup"></a>

```go
func Backup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterBackupdrBackupSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupdrBackupSource">GoogleAlloydbClusterBackupdrBackupSource</a>

---


### GoogleAlloydbClusterBackupSourceList <a name="GoogleAlloydbClusterBackupSourceList" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterBackupSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAlloydbClusterBackupSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.get"></a>

```go
func Get(index *f64) GoogleAlloydbClusterBackupSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleAlloydbClusterBackupSourceOutputReference <a name="GoogleAlloydbClusterBackupSourceOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterBackupSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAlloydbClusterBackupSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.backupName">BackupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSource">GoogleAlloydbClusterBackupSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupName`<sup>Required</sup> <a name="BackupName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.backupName"></a>

```go
func BackupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterBackupSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterBackupSource">GoogleAlloydbClusterBackupSource</a>

---


### GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference <a name="GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

---


### GoogleAlloydbClusterContinuousBackupConfigOutputReference <a name="GoogleAlloydbClusterContinuousBackupConfigOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterContinuousBackupConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterContinuousBackupConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetRecoveryWindowDays">ResetRecoveryWindowDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetRecoveryWindowDays` <a name="ResetRecoveryWindowDays" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.resetRecoveryWindowDays"></a>

```go
func ResetRecoveryWindowDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDaysInput">RecoveryWindowDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDays">RecoveryWindowDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfig"></a>

```go
func EncryptionConfig() GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfigOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig">GoogleAlloydbClusterContinuousBackupConfigEncryptionConfig</a>

---

##### `RecoveryWindowDaysInput`<sup>Optional</sup> <a name="RecoveryWindowDaysInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDaysInput"></a>

```go
func RecoveryWindowDaysInput() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `RecoveryWindowDays`<sup>Required</sup> <a name="RecoveryWindowDays" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.recoveryWindowDays"></a>

```go
func RecoveryWindowDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterContinuousBackupConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupConfig">GoogleAlloydbClusterContinuousBackupConfig</a>

---


### GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList <a name="GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.get"></a>

```go
func Get(index *f64) GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference <a name="GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.kmsKeyVersions">KmsKeyVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo">GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `KmsKeyVersions`<sup>Required</sup> <a name="KmsKeyVersions" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.kmsKeyVersions"></a>

```go
func KmsKeyVersions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo">GoogleAlloydbClusterContinuousBackupInfoEncryptionInfo</a>

---


### GoogleAlloydbClusterContinuousBackupInfoList <a name="GoogleAlloydbClusterContinuousBackupInfoList" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterContinuousBackupInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAlloydbClusterContinuousBackupInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.get"></a>

```go
func Get(index *f64) GoogleAlloydbClusterContinuousBackupInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleAlloydbClusterContinuousBackupInfoOutputReference <a name="GoogleAlloydbClusterContinuousBackupInfoOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterContinuousBackupInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAlloydbClusterContinuousBackupInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.earliestRestorableTime">EarliestRestorableTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.enabledTime">EnabledTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.encryptionInfo">EncryptionInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList">GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.schedule">Schedule</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo">GoogleAlloydbClusterContinuousBackupInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EarliestRestorableTime`<sup>Required</sup> <a name="EarliestRestorableTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.earliestRestorableTime"></a>

```go
func EarliestRestorableTime() *string
```

- *Type:* *string

---

##### `EnabledTime`<sup>Required</sup> <a name="EnabledTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.enabledTime"></a>

```go
func EnabledTime() *string
```

- *Type:* *string

---

##### `EncryptionInfo`<sup>Required</sup> <a name="EncryptionInfo" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.encryptionInfo"></a>

```go
func EncryptionInfo() GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList">GoogleAlloydbClusterContinuousBackupInfoEncryptionInfoList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.schedule"></a>

```go
func Schedule() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterContinuousBackupInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterContinuousBackupInfo">GoogleAlloydbClusterContinuousBackupInfo</a>

---


### GoogleAlloydbClusterDataplexConfigOutputReference <a name="GoogleAlloydbClusterDataplexConfigOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterDataplexConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterDataplexConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfig">GoogleAlloydbClusterDataplexConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterDataplexConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterDataplexConfig">GoogleAlloydbClusterDataplexConfig</a>

---


### GoogleAlloydbClusterEncryptionConfigOutputReference <a name="GoogleAlloydbClusterEncryptionConfigOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionConfig">GoogleAlloydbClusterEncryptionConfig</a>

---


### GoogleAlloydbClusterEncryptionInfoList <a name="GoogleAlloydbClusterEncryptionInfoList" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterEncryptionInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAlloydbClusterEncryptionInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.get"></a>

```go
func Get(index *f64) GoogleAlloydbClusterEncryptionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleAlloydbClusterEncryptionInfoOutputReference <a name="GoogleAlloydbClusterEncryptionInfoOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterEncryptionInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAlloydbClusterEncryptionInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.kmsKeyVersions">KmsKeyVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo">GoogleAlloydbClusterEncryptionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `KmsKeyVersions`<sup>Required</sup> <a name="KmsKeyVersions" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.kmsKeyVersions"></a>

```go
func KmsKeyVersions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterEncryptionInfo
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterEncryptionInfo">GoogleAlloydbClusterEncryptionInfo</a>

---


### GoogleAlloydbClusterInitialUserOutputReference <a name="GoogleAlloydbClusterInitialUserOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterInitialUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterInitialUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resetPasswordWo">ResetPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resetPasswordWoVersion">ResetPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPasswordWo` <a name="ResetPasswordWo" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resetPasswordWo"></a>

```go
func ResetPasswordWo()
```

##### `ResetPasswordWoVersion` <a name="ResetPasswordWoVersion" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resetPasswordWoVersion"></a>

```go
func ResetPasswordWoVersion()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.resetUser"></a>

```go
func ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordWoInput">PasswordWoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordWoVersionInput">PasswordWoVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordWo">PasswordWo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordWoVersion">PasswordWoVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PasswordWoInput`<sup>Optional</sup> <a name="PasswordWoInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordWoInput"></a>

```go
func PasswordWoInput() *string
```

- *Type:* *string

---

##### `PasswordWoVersionInput`<sup>Optional</sup> <a name="PasswordWoVersionInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordWoVersionInput"></a>

```go
func PasswordWoVersionInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PasswordWo`<sup>Required</sup> <a name="PasswordWo" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordWo"></a>

```go
func PasswordWo() *string
```

- *Type:* *string

---

##### `PasswordWoVersion`<sup>Required</sup> <a name="PasswordWoVersion" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.passwordWoVersion"></a>

```go
func PasswordWoVersion() *string
```

- *Type:* *string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUserOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterInitialUser
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterInitialUser">GoogleAlloydbClusterInitialUser</a>

---


### GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList <a name="GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.get"></a>

```go
func Get(index *f64) GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference <a name="GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.putStartTime"></a>

```go
func PutStartTime(value GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.startTime"></a>

```go
func StartTime() GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference</a>

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a>

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference <a name="GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsStartTime</a>

---


### GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference <a name="GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.putMaintenanceWindows">PutMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resetMaintenanceWindows">ResetMaintenanceWindows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceWindows` <a name="PutMaintenanceWindows" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.putMaintenanceWindows"></a>

```go
func PutMaintenanceWindows(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.putMaintenanceWindows.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMaintenanceWindows` <a name="ResetMaintenanceWindows" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.resetMaintenanceWindows"></a>

```go
func ResetMaintenanceWindows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.maintenanceWindows">MaintenanceWindows</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.maintenanceWindowsInput">MaintenanceWindowsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaintenanceWindows`<sup>Required</sup> <a name="MaintenanceWindows" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.maintenanceWindows"></a>

```go
func MaintenanceWindows() GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList">GoogleAlloydbClusterMaintenanceUpdatePolicyMaintenanceWindowsList</a>

---

##### `MaintenanceWindowsInput`<sup>Optional</sup> <a name="MaintenanceWindowsInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.maintenanceWindowsInput"></a>

```go
func MaintenanceWindowsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterMaintenanceUpdatePolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMaintenanceUpdatePolicy">GoogleAlloydbClusterMaintenanceUpdatePolicy</a>

---


### GoogleAlloydbClusterMigrationSourceList <a name="GoogleAlloydbClusterMigrationSourceList" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterMigrationSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAlloydbClusterMigrationSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.get"></a>

```go
func Get(index *f64) GoogleAlloydbClusterMigrationSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleAlloydbClusterMigrationSourceOutputReference <a name="GoogleAlloydbClusterMigrationSourceOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterMigrationSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAlloydbClusterMigrationSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.hostPort">HostPort</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.referenceId">ReferenceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSource">GoogleAlloydbClusterMigrationSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostPort`<sup>Required</sup> <a name="HostPort" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.hostPort"></a>

```go
func HostPort() *string
```

- *Type:* *string

---

##### `ReferenceId`<sup>Required</sup> <a name="ReferenceId" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.referenceId"></a>

```go
func ReferenceId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterMigrationSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterMigrationSource">GoogleAlloydbClusterMigrationSource</a>

---


### GoogleAlloydbClusterNetworkConfigOutputReference <a name="GoogleAlloydbClusterNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterNetworkConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterNetworkConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resetAllocatedIpRange">ResetAllocatedIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllocatedIpRange` <a name="ResetAllocatedIpRange" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resetAllocatedIpRange"></a>

```go
func ResetAllocatedIpRange()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.allocatedIpRangeInput">AllocatedIpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.allocatedIpRange">AllocatedIpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocatedIpRangeInput`<sup>Optional</sup> <a name="AllocatedIpRangeInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.allocatedIpRangeInput"></a>

```go
func AllocatedIpRangeInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `AllocatedIpRange`<sup>Required</sup> <a name="AllocatedIpRange" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.allocatedIpRange"></a>

```go
func AllocatedIpRange() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterNetworkConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterNetworkConfig">GoogleAlloydbClusterNetworkConfig</a>

---


### GoogleAlloydbClusterPscConfigOutputReference <a name="GoogleAlloydbClusterPscConfigOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterPscConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterPscConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.resetPscEnabled">ResetPscEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPscEnabled` <a name="ResetPscEnabled" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.resetPscEnabled"></a>

```go
func ResetPscEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.serviceOwnedProjectNumber">ServiceOwnedProjectNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.pscEnabledInput">PscEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.pscEnabled">PscEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceOwnedProjectNumber`<sup>Required</sup> <a name="ServiceOwnedProjectNumber" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.serviceOwnedProjectNumber"></a>

```go
func ServiceOwnedProjectNumber() *f64
```

- *Type:* *f64

---

##### `PscEnabledInput`<sup>Optional</sup> <a name="PscEnabledInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.pscEnabledInput"></a>

```go
func PscEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PscEnabled`<sup>Required</sup> <a name="PscEnabled" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.pscEnabled"></a>

```go
func PscEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterPscConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterPscConfig">GoogleAlloydbClusterPscConfig</a>

---


### GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference <a name="GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.property.backupInput">BackupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.property.backup">Backup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSource">GoogleAlloydbClusterRestoreBackupdrBackupSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.property.backupInput"></a>

```go
func BackupInput() *string
```

- *Type:* *string

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.property.backup"></a>

```go
func Backup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterRestoreBackupdrBackupSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrBackupSource">GoogleAlloydbClusterRestoreBackupdrBackupSource</a>

---


### GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference <a name="GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.pointInTimeInput">PointInTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.pointInTime">PointInTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource">GoogleAlloydbClusterRestoreBackupdrPitrSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.dataSourceInput"></a>

```go
func DataSourceInput() *string
```

- *Type:* *string

---

##### `PointInTimeInput`<sup>Optional</sup> <a name="PointInTimeInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.pointInTimeInput"></a>

```go
func PointInTimeInput() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `PointInTime`<sup>Required</sup> <a name="PointInTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.pointInTime"></a>

```go
func PointInTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterRestoreBackupdrPitrSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupdrPitrSource">GoogleAlloydbClusterRestoreBackupdrPitrSource</a>

---


### GoogleAlloydbClusterRestoreBackupSourceOutputReference <a name="GoogleAlloydbClusterRestoreBackupSourceOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterRestoreBackupSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterRestoreBackupSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupNameInput">BackupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupName">BackupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupNameInput`<sup>Optional</sup> <a name="BackupNameInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupNameInput"></a>

```go
func BackupNameInput() *string
```

- *Type:* *string

---

##### `BackupName`<sup>Required</sup> <a name="BackupName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.backupName"></a>

```go
func BackupName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterRestoreBackupSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreBackupSource">GoogleAlloydbClusterRestoreBackupSource</a>

---


### GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference <a name="GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTimeInput">PointInTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTime">PointInTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `PointInTimeInput`<sup>Optional</sup> <a name="PointInTimeInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTimeInput"></a>

```go
func PointInTimeInput() *string
```

- *Type:* *string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `PointInTime`<sup>Required</sup> <a name="PointInTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.pointInTime"></a>

```go
func PointInTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterRestoreContinuousBackupSource
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterRestoreContinuousBackupSource">GoogleAlloydbClusterRestoreContinuousBackupSource</a>

---


### GoogleAlloydbClusterSecondaryConfigOutputReference <a name="GoogleAlloydbClusterSecondaryConfigOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterSecondaryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterSecondaryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.primaryClusterNameInput">PrimaryClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.primaryClusterName">PrimaryClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryClusterNameInput`<sup>Optional</sup> <a name="PrimaryClusterNameInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.primaryClusterNameInput"></a>

```go
func PrimaryClusterNameInput() *string
```

- *Type:* *string

---

##### `PrimaryClusterName`<sup>Required</sup> <a name="PrimaryClusterName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.primaryClusterName"></a>

```go
func PrimaryClusterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterSecondaryConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterSecondaryConfig">GoogleAlloydbClusterSecondaryConfig</a>

---


### GoogleAlloydbClusterTimeoutsOutputReference <a name="GoogleAlloydbClusterTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAlloydbClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAlloydbClusterTrialMetadataList <a name="GoogleAlloydbClusterTrialMetadataList" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterTrialMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAlloydbClusterTrialMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.get"></a>

```go
func Get(index *f64) GoogleAlloydbClusterTrialMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleAlloydbClusterTrialMetadataOutputReference <a name="GoogleAlloydbClusterTrialMetadataOutputReference" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlealloydbcluster"

googlealloydbcluster.NewGoogleAlloydbClusterTrialMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAlloydbClusterTrialMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.graceEndTime">GraceEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.upgradeTime">UpgradeTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadata">GoogleAlloydbClusterTrialMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `GraceEndTime`<sup>Required</sup> <a name="GraceEndTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.graceEndTime"></a>

```go
func GraceEndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `UpgradeTime`<sup>Required</sup> <a name="UpgradeTime" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.upgradeTime"></a>

```go
func UpgradeTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAlloydbClusterTrialMetadata
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleAlloydbCluster.GoogleAlloydbClusterTrialMetadata">GoogleAlloydbClusterTrialMetadata</a>

---



