# `googleLustreInstance` Submodule <a name="`googleLustreInstance` Submodule" id="@cdktn/provider-google-beta.googleLustreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLustreInstance <a name="GoogleLustreInstance" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance google_lustre_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstance(scope Construct, id *string, config GoogleLustreInstanceConfig) GoogleLustreInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig">GoogleLustreInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig">GoogleLustreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.putAccessRulesOptions">PutAccessRulesOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.putDynamicTierOptions">PutDynamicTierOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetAccessRulesOptions">ResetAccessRulesOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetDynamicTierOptions">ResetDynamicTierOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetGkeSupportEnabled">ResetGkeSupportEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetPerUnitStorageThroughput">ResetPerUnitStorageThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetPlacementPolicy">ResetPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessRulesOptions` <a name="PutAccessRulesOptions" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.putAccessRulesOptions"></a>

```go
func PutAccessRulesOptions(value GoogleLustreInstanceAccessRulesOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.putAccessRulesOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions">GoogleLustreInstanceAccessRulesOptions</a>

---

##### `PutDynamicTierOptions` <a name="PutDynamicTierOptions" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.putDynamicTierOptions"></a>

```go
func PutDynamicTierOptions(value GoogleLustreInstanceDynamicTierOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.putDynamicTierOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptions">GoogleLustreInstanceDynamicTierOptions</a>

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.putMaintenancePolicy"></a>

```go
func PutMaintenancePolicy(value GoogleLustreInstanceMaintenancePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy">GoogleLustreInstanceMaintenancePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.putTimeouts"></a>

```go
func PutTimeouts(value GoogleLustreInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeouts">GoogleLustreInstanceTimeouts</a>

---

##### `ResetAccessRulesOptions` <a name="ResetAccessRulesOptions" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetAccessRulesOptions"></a>

```go
func ResetAccessRulesOptions()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDynamicTierOptions` <a name="ResetDynamicTierOptions" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetDynamicTierOptions"></a>

```go
func ResetDynamicTierOptions()
```

##### `ResetGkeSupportEnabled` <a name="ResetGkeSupportEnabled" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetGkeSupportEnabled"></a>

```go
func ResetGkeSupportEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetMaintenancePolicy"></a>

```go
func ResetMaintenancePolicy()
```

##### `ResetPerUnitStorageThroughput` <a name="ResetPerUnitStorageThroughput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetPerUnitStorageThroughput"></a>

```go
func ResetPerUnitStorageThroughput()
```

##### `ResetPlacementPolicy` <a name="ResetPlacementPolicy" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetPlacementPolicy"></a>

```go
func ResetPlacementPolicy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleLustreInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.GoogleLustreInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.GoogleLustreInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.GoogleLustreInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.GoogleLustreInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleLustreInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleLustreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleLustreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleLustreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.accessRulesOptions">AccessRulesOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference">GoogleLustreInstanceAccessRulesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.dynamicTierOptions">DynamicTierOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference">GoogleLustreInstanceDynamicTierOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference">GoogleLustreInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.mountPoint">MountPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.stateReason">StateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference">GoogleLustreInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.upcomingMaintenanceSchedule">UpcomingMaintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList">GoogleLustreInstanceUpcomingMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.accessRulesOptionsInput">AccessRulesOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions">GoogleLustreInstanceAccessRulesOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.capacityGibInput">CapacityGibInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.dynamicTierOptionsInput">DynamicTierOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptions">GoogleLustreInstanceDynamicTierOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.filesystemInput">FilesystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.gkeSupportEnabledInput">GkeSupportEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy">GoogleLustreInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.perUnitStorageThroughputInput">PerUnitStorageThroughputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.placementPolicyInput">PlacementPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.capacityGib">CapacityGib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.filesystem">Filesystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.gkeSupportEnabled">GkeSupportEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.placementPolicy">PlacementPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessRulesOptions`<sup>Required</sup> <a name="AccessRulesOptions" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.accessRulesOptions"></a>

```go
func AccessRulesOptions() GoogleLustreInstanceAccessRulesOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference">GoogleLustreInstanceAccessRulesOptionsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DynamicTierOptions`<sup>Required</sup> <a name="DynamicTierOptions" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.dynamicTierOptions"></a>

```go
func DynamicTierOptions() GoogleLustreInstanceDynamicTierOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference">GoogleLustreInstanceDynamicTierOptionsOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.maintenancePolicy"></a>

```go
func MaintenancePolicy() GoogleLustreInstanceMaintenancePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference">GoogleLustreInstanceMaintenancePolicyOutputReference</a>

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.mountPoint"></a>

```go
func MountPoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.stateReason"></a>

```go
func StateReason() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.timeouts"></a>

```go
func Timeouts() GoogleLustreInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference">GoogleLustreInstanceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpcomingMaintenanceSchedule`<sup>Required</sup> <a name="UpcomingMaintenanceSchedule" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.upcomingMaintenanceSchedule"></a>

```go
func UpcomingMaintenanceSchedule() GoogleLustreInstanceUpcomingMaintenanceScheduleList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList">GoogleLustreInstanceUpcomingMaintenanceScheduleList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AccessRulesOptionsInput`<sup>Optional</sup> <a name="AccessRulesOptionsInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.accessRulesOptionsInput"></a>

```go
func AccessRulesOptionsInput() GoogleLustreInstanceAccessRulesOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions">GoogleLustreInstanceAccessRulesOptions</a>

---

##### `CapacityGibInput`<sup>Optional</sup> <a name="CapacityGibInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.capacityGibInput"></a>

```go
func CapacityGibInput() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DynamicTierOptionsInput`<sup>Optional</sup> <a name="DynamicTierOptionsInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.dynamicTierOptionsInput"></a>

```go
func DynamicTierOptionsInput() GoogleLustreInstanceDynamicTierOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptions">GoogleLustreInstanceDynamicTierOptions</a>

---

##### `FilesystemInput`<sup>Optional</sup> <a name="FilesystemInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.filesystemInput"></a>

```go
func FilesystemInput() *string
```

- *Type:* *string

---

##### `GkeSupportEnabledInput`<sup>Optional</sup> <a name="GkeSupportEnabledInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.gkeSupportEnabledInput"></a>

```go
func GkeSupportEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.maintenancePolicyInput"></a>

```go
func MaintenancePolicyInput() GoogleLustreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy">GoogleLustreInstanceMaintenancePolicy</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `PerUnitStorageThroughputInput`<sup>Optional</sup> <a name="PerUnitStorageThroughputInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.perUnitStorageThroughputInput"></a>

```go
func PerUnitStorageThroughputInput() *string
```

- *Type:* *string

---

##### `PlacementPolicyInput`<sup>Optional</sup> <a name="PlacementPolicyInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.placementPolicyInput"></a>

```go
func PlacementPolicyInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.capacityGib"></a>

```go
func CapacityGib() *string
```

- *Type:* *string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.filesystem"></a>

```go
func Filesystem() *string
```

- *Type:* *string

---

##### `GkeSupportEnabled`<sup>Required</sup> <a name="GkeSupportEnabled" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.gkeSupportEnabled"></a>

```go
func GkeSupportEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `PerUnitStorageThroughput`<sup>Required</sup> <a name="PerUnitStorageThroughput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.perUnitStorageThroughput"></a>

```go
func PerUnitStorageThroughput() *string
```

- *Type:* *string

---

##### `PlacementPolicy`<sup>Required</sup> <a name="PlacementPolicy" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.placementPolicy"></a>

```go
func PlacementPolicy() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLustreInstanceAccessRulesOptions <a name="GoogleLustreInstanceAccessRulesOptions" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceAccessRulesOptions {
	DefaultSquashMode: *string,
	AccessRules: interface{},
	DefaultSquashGid: *f64,
	DefaultSquashUid: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions.property.defaultSquashMode">DefaultSquashMode</a></code> | <code>*string</code> | The squash mode for the default access rule. Possible values: NO_SQUASH ROOT_SQUASH. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions.property.accessRules">AccessRules</a></code> | <code>interface{}</code> | access_rules block. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions.property.defaultSquashGid">DefaultSquashGid</a></code> | <code>*f64</code> | The user squash GID for the default access rule. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions.property.defaultSquashUid">DefaultSquashUid</a></code> | <code>*f64</code> | The user squash UID for the default access rule. |

---

##### `DefaultSquashMode`<sup>Required</sup> <a name="DefaultSquashMode" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions.property.defaultSquashMode"></a>

```go
DefaultSquashMode *string
```

- *Type:* *string

The squash mode for the default access rule. Possible values: NO_SQUASH ROOT_SQUASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#default_squash_mode GoogleLustreInstance#default_squash_mode}

---

##### `AccessRules`<sup>Optional</sup> <a name="AccessRules" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions.property.accessRules"></a>

```go
AccessRules interface{}
```

- *Type:* interface{}

access_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#access_rules GoogleLustreInstance#access_rules}

---

##### `DefaultSquashGid`<sup>Optional</sup> <a name="DefaultSquashGid" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions.property.defaultSquashGid"></a>

```go
DefaultSquashGid *f64
```

- *Type:* *f64

The user squash GID for the default access rule.

This user squash GID applies to all root users connecting from clients
that are not matched by any of the access rules. If not set, the default
is 0 (no GID squash).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#default_squash_gid GoogleLustreInstance#default_squash_gid}

---

##### `DefaultSquashUid`<sup>Optional</sup> <a name="DefaultSquashUid" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions.property.defaultSquashUid"></a>

```go
DefaultSquashUid *f64
```

- *Type:* *f64

The user squash UID for the default access rule.

This user squash UID applies to all root users connecting from clients
that are not matched by any of the access rules. If not set, the default
is 0 (no UID squash).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#default_squash_uid GoogleLustreInstance#default_squash_uid}

---

### GoogleLustreInstanceAccessRulesOptionsAccessRules <a name="GoogleLustreInstanceAccessRulesOptionsAccessRules" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceAccessRulesOptionsAccessRules {
	IpAddressRanges: *[]*string,
	Name: *string,
	SquashMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRules.property.ipAddressRanges">IpAddressRanges</a></code> | <code>*[]*string</code> | The IP address ranges to which to apply this access rule. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRules.property.name">Name</a></code> | <code>*string</code> | The name of the access rule policy group. Must be 16 characters or less and include only alphanumeric characters or '_'. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRules.property.squashMode">SquashMode</a></code> | <code>*string</code> | Squash mode for the access rule. Possible values: NO_SQUASH ROOT_SQUASH. |

---

##### `IpAddressRanges`<sup>Required</sup> <a name="IpAddressRanges" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRules.property.ipAddressRanges"></a>

```go
IpAddressRanges *[]*string
```

- *Type:* *[]*string

The IP address ranges to which to apply this access rule.

Accepts
non-overlapping CIDR ranges (e.g., '192.168.1.0/24') and IP addresses
(e.g., '192.168.1.0').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#ip_address_ranges GoogleLustreInstance#ip_address_ranges}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the access rule policy group. Must be 16 characters or less and include only alphanumeric characters or '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#name GoogleLustreInstance#name}

---

##### `SquashMode`<sup>Required</sup> <a name="SquashMode" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRules.property.squashMode"></a>

```go
SquashMode *string
```

- *Type:* *string

Squash mode for the access rule. Possible values: NO_SQUASH ROOT_SQUASH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#squash_mode GoogleLustreInstance#squash_mode}

---

### GoogleLustreInstanceConfig <a name="GoogleLustreInstanceConfig" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityGib: *string,
	Filesystem: *string,
	InstanceId: *string,
	Location: *string,
	Network: *string,
	AccessRulesOptions: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions,
	DeletionPolicy: *string,
	Description: *string,
	DynamicTierOptions: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLustreInstance.GoogleLustreInstanceDynamicTierOptions,
	GkeSupportEnabled: interface{},
	Id: *string,
	KmsKey: *string,
	Labels: *map[string]*string,
	MaintenancePolicy: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy,
	PerUnitStorageThroughput: *string,
	PlacementPolicy: *string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLustreInstance.GoogleLustreInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.capacityGib">CapacityGib</a></code> | <code>*string</code> | The storage capacity of the instance in gibibytes (GiB). |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.filesystem">Filesystem</a></code> | <code>*string</code> | The filesystem name for this instance. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | The name of the Managed Lustre instance. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.network">Network</a></code> | <code>*string</code> | The full name of the VPC network to which the instance is connected. Must be in the format 'projects/{project_id}/global/networks/{network_name}'. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.accessRulesOptions">AccessRulesOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions">GoogleLustreInstanceAccessRulesOptions</a></code> | access_rules_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.description">Description</a></code> | <code>*string</code> | A user-readable description of the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.dynamicTierOptions">DynamicTierOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptions">GoogleLustreInstanceDynamicTierOptions</a></code> | dynamic_tier_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.gkeSupportEnabled">GkeSupportEnabled</a></code> | <code>interface{}</code> | Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#id GoogleLustreInstance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The Cloud KMS key name to use for data encryption. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy">GoogleLustreInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.perUnitStorageThroughput">PerUnitStorageThroughput</a></code> | <code>*string</code> | The throughput of the instance in MBps per TiB. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.placementPolicy">PlacementPolicy</a></code> | <code>*string</code> | The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy}. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#project GoogleLustreInstance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeouts">GoogleLustreInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.capacityGib"></a>

```go
CapacityGib *string
```

- *Type:* *string

The storage capacity of the instance in gibibytes (GiB).

Allowed values
are from '9000' to '7632000', depending on the 'perUnitStorageThroughput'.
See [Performance tiers and maximum storage
capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
for specific minimums, maximums, and step sizes for each performance tier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#capacity_gib GoogleLustreInstance#capacity_gib}

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.filesystem"></a>

```go
Filesystem *string
```

- *Type:* *string

The filesystem name for this instance.

This name is used by client-side
tools, including when mounting the instance. Must be eight characters or
less and can only contain letters and numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#filesystem GoogleLustreInstance#filesystem}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

The name of the Managed Lustre instance.

* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#instance_id GoogleLustreInstance#instance_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#location GoogleLustreInstance#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

The full name of the VPC network to which the instance is connected. Must be in the format 'projects/{project_id}/global/networks/{network_name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#network GoogleLustreInstance#network}

---

##### `AccessRulesOptions`<sup>Optional</sup> <a name="AccessRulesOptions" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.accessRulesOptions"></a>

```go
AccessRulesOptions GoogleLustreInstanceAccessRulesOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions">GoogleLustreInstanceAccessRulesOptions</a>

access_rules_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#access_rules_options GoogleLustreInstance#access_rules_options}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#deletion_policy GoogleLustreInstance#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A user-readable description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#description GoogleLustreInstance#description}

---

##### `DynamicTierOptions`<sup>Optional</sup> <a name="DynamicTierOptions" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.dynamicTierOptions"></a>

```go
DynamicTierOptions GoogleLustreInstanceDynamicTierOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptions">GoogleLustreInstanceDynamicTierOptions</a>

dynamic_tier_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#dynamic_tier_options GoogleLustreInstance#dynamic_tier_options}

---

##### `GkeSupportEnabled`<sup>Optional</sup> <a name="GkeSupportEnabled" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.gkeSupportEnabled"></a>

```go
GkeSupportEnabled interface{}
```

- *Type:* interface{}

Indicates whether you want to enable support for GKE clients. By default, GKE clients are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#gke_support_enabled GoogleLustreInstance#gke_support_enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#id GoogleLustreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The Cloud KMS key name to use for data encryption.

If not set, the instance will use Google-managed encryption keys.
If set, the instance will use customer-managed encryption keys.
The key must be in the same region as the instance.
The key format is:
projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{key}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#kms_key GoogleLustreInstance#kms_key}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#labels GoogleLustreInstance#labels}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.maintenancePolicy"></a>

```go
MaintenancePolicy GoogleLustreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy">GoogleLustreInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#maintenance_policy GoogleLustreInstance#maintenance_policy}

---

##### `PerUnitStorageThroughput`<sup>Optional</sup> <a name="PerUnitStorageThroughput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.perUnitStorageThroughput"></a>

```go
PerUnitStorageThroughput *string
```

- *Type:* *string

The throughput of the instance in MBps per TiB.

Valid values are 125, 250,
500, 1000.
See [Performance tiers and maximum storage
capacities](https://cloud.google.com/managed-lustre/docs/create-instance#performance-tiers)
for more information.

If the instance is using the Dynamic tier, this field must not be set or
must be set to zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#per_unit_storage_throughput GoogleLustreInstance#per_unit_storage_throughput}

---

##### `PlacementPolicy`<sup>Optional</sup> <a name="PlacementPolicy" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.placementPolicy"></a>

```go
PlacementPolicy *string
```

- *Type:* *string

The placement policy name for the instance in the format of projects/{project}/locations/{location}/resourcePolicies/{resource_policy}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#placement_policy GoogleLustreInstance#placement_policy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#project GoogleLustreInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceConfig.property.timeouts"></a>

```go
Timeouts GoogleLustreInstanceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeouts">GoogleLustreInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#timeouts GoogleLustreInstance#timeouts}

---

### GoogleLustreInstanceDynamicTierOptions <a name="GoogleLustreInstanceDynamicTierOptions" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceDynamicTierOptions {
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptions.property.mode">Mode</a></code> | <code>*string</code> | The dynamic tier mode of the instance. Possible values: DISABLED DEFAULT_CACHE. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptions.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The dynamic tier mode of the instance. Possible values: DISABLED DEFAULT_CACHE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#mode GoogleLustreInstance#mode}

---

### GoogleLustreInstanceMaintenancePolicy <a name="GoogleLustreInstanceMaintenancePolicy" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceMaintenancePolicy {
	WeeklyMaintenanceWindows: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows,
	MaintenanceExclusionWindow: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy.property.weeklyMaintenanceWindows">WeeklyMaintenanceWindows</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | weekly_maintenance_windows block. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy.property.maintenanceExclusionWindow">MaintenanceExclusionWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | maintenance_exclusion_window block. |

---

##### `WeeklyMaintenanceWindows`<sup>Required</sup> <a name="WeeklyMaintenanceWindows" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy.property.weeklyMaintenanceWindows"></a>

```go
WeeklyMaintenanceWindows GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

weekly_maintenance_windows block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#weekly_maintenance_windows GoogleLustreInstance#weekly_maintenance_windows}

---

##### `MaintenanceExclusionWindow`<sup>Optional</sup> <a name="MaintenanceExclusionWindow" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy.property.maintenanceExclusionWindow"></a>

```go
MaintenanceExclusionWindow GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

maintenance_exclusion_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#maintenance_exclusion_window GoogleLustreInstance#maintenance_exclusion_window}

---

### GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow <a name="GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow {
	EndDate: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate,
	StartDate: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate,
	Time: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | end_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | start_date block. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.time">Time</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | time block. |

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.endDate"></a>

```go
EndDate GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#end_date GoogleLustreInstance#end_date}

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.startDate"></a>

```go
StartDate GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#start_date GoogleLustreInstance#start_date}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow.property.time"></a>

```go
Time GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#time GoogleLustreInstance#time}

---

### GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate <a name="GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.day">Day</a></code> | <code>*f64</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.month">Month</a></code> | <code>*f64</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.year">Year</a></code> | <code>*f64</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't
significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#day GoogleLustreInstance#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#month GoogleLustreInstance#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#year GoogleLustreInstance#year}

---

### GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate <a name="GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.day">Day</a></code> | <code>*f64</code> | Day of a month. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.month">Month</a></code> | <code>*f64</code> | Month of a year. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.year">Year</a></code> | <code>*f64</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't
significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#day GoogleLustreInstance#day}

---

##### `Month`<sup>Optional</sup> <a name="Month" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#month GoogleLustreInstance#month}

---

##### `Year`<sup>Optional</sup> <a name="Year" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#year GoogleLustreInstance#year}

---

### GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime <a name="GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.hours">Hours</a></code> | <code>*f64</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of a minute. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#hours GoogleLustreInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#minutes GoogleLustreInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#nanos GoogleLustreInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of a minute.

Must be greater than or equal to 0 and typically must
be less than or equal to 59. An API may allow the value 60 if it allows
leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#seconds GoogleLustreInstance#seconds}

---

### GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows <a name="GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows {
	DayOfWeek: *string,
	StartTime: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | start_time block. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.dayOfWeek"></a>

```go
DayOfWeek *string
```

- *Type:* *string

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#day_of_week GoogleLustreInstance#day_of_week}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows.property.startTime"></a>

```go
StartTime GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#start_time GoogleLustreInstance#start_time}

---

### GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime <a name="GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime {
	Hours: *f64,
	Minutes: *f64,
	Nanos: *f64,
	Seconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.hours">Hours</a></code> | <code>*f64</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.minutes">Minutes</a></code> | <code>*f64</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.nanos">Nanos</a></code> | <code>*f64</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.seconds">Seconds</a></code> | <code>*f64</code> | Seconds of a minute. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.hours"></a>

```go
Hours *f64
```

- *Type:* *f64

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#hours GoogleLustreInstance#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.minutes"></a>

```go
Minutes *f64
```

- *Type:* *f64

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#minutes GoogleLustreInstance#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#nanos GoogleLustreInstance#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime.property.seconds"></a>

```go
Seconds *f64
```

- *Type:* *f64

Seconds of a minute.

Must be greater than or equal to 0 and typically must
be less than or equal to 59. An API may allow the value 60 if it allows
leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#seconds GoogleLustreInstance#seconds}

---

### GoogleLustreInstanceTimeouts <a name="GoogleLustreInstanceTimeouts" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#create GoogleLustreInstance#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#delete GoogleLustreInstance#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#update GoogleLustreInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#create GoogleLustreInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#delete GoogleLustreInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_lustre_instance#update GoogleLustreInstance#update}.

---

### GoogleLustreInstanceUpcomingMaintenanceSchedule <a name="GoogleLustreInstanceUpcomingMaintenanceSchedule" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceSchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

&googlelustreinstance.GoogleLustreInstanceUpcomingMaintenanceSchedule {

}
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleLustreInstanceAccessRulesOptionsAccessRulesList <a name="GoogleLustreInstanceAccessRulesOptionsAccessRulesList" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceAccessRulesOptionsAccessRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleLustreInstanceAccessRulesOptionsAccessRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.get"></a>

```go
func Get(index *f64) GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference <a name="GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRangesInput">IpAddressRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashModeInput">SquashModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRanges">IpAddressRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashMode">SquashMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressRangesInput`<sup>Optional</sup> <a name="IpAddressRangesInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRangesInput"></a>

```go
func IpAddressRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SquashModeInput`<sup>Optional</sup> <a name="SquashModeInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashModeInput"></a>

```go
func SquashModeInput() *string
```

- *Type:* *string

---

##### `IpAddressRanges`<sup>Required</sup> <a name="IpAddressRanges" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.ipAddressRanges"></a>

```go
func IpAddressRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SquashMode`<sup>Required</sup> <a name="SquashMode" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.squashMode"></a>

```go
func SquashMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLustreInstanceAccessRulesOptionsOutputReference <a name="GoogleLustreInstanceAccessRulesOptionsOutputReference" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceAccessRulesOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLustreInstanceAccessRulesOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.putAccessRules">PutAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.resetAccessRules">ResetAccessRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashGid">ResetDefaultSquashGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashUid">ResetDefaultSquashUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessRules` <a name="PutAccessRules" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.putAccessRules"></a>

```go
func PutAccessRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.putAccessRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessRules` <a name="ResetAccessRules" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.resetAccessRules"></a>

```go
func ResetAccessRules()
```

##### `ResetDefaultSquashGid` <a name="ResetDefaultSquashGid" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashGid"></a>

```go
func ResetDefaultSquashGid()
```

##### `ResetDefaultSquashUid` <a name="ResetDefaultSquashUid" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.resetDefaultSquashUid"></a>

```go
func ResetDefaultSquashUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.accessRules">AccessRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList">GoogleLustreInstanceAccessRulesOptionsAccessRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.accessRulesInput">AccessRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGidInput">DefaultSquashGidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashModeInput">DefaultSquashModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUidInput">DefaultSquashUidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGid">DefaultSquashGid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashMode">DefaultSquashMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUid">DefaultSquashUid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions">GoogleLustreInstanceAccessRulesOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessRules`<sup>Required</sup> <a name="AccessRules" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.accessRules"></a>

```go
func AccessRules() GoogleLustreInstanceAccessRulesOptionsAccessRulesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsAccessRulesList">GoogleLustreInstanceAccessRulesOptionsAccessRulesList</a>

---

##### `AccessRulesInput`<sup>Optional</sup> <a name="AccessRulesInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.accessRulesInput"></a>

```go
func AccessRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultSquashGidInput`<sup>Optional</sup> <a name="DefaultSquashGidInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGidInput"></a>

```go
func DefaultSquashGidInput() *f64
```

- *Type:* *f64

---

##### `DefaultSquashModeInput`<sup>Optional</sup> <a name="DefaultSquashModeInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashModeInput"></a>

```go
func DefaultSquashModeInput() *string
```

- *Type:* *string

---

##### `DefaultSquashUidInput`<sup>Optional</sup> <a name="DefaultSquashUidInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUidInput"></a>

```go
func DefaultSquashUidInput() *f64
```

- *Type:* *f64

---

##### `DefaultSquashGid`<sup>Required</sup> <a name="DefaultSquashGid" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashGid"></a>

```go
func DefaultSquashGid() *f64
```

- *Type:* *f64

---

##### `DefaultSquashMode`<sup>Required</sup> <a name="DefaultSquashMode" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashMode"></a>

```go
func DefaultSquashMode() *string
```

- *Type:* *string

---

##### `DefaultSquashUid`<sup>Required</sup> <a name="DefaultSquashUid" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.defaultSquashUid"></a>

```go
func DefaultSquashUid() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLustreInstanceAccessRulesOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceAccessRulesOptions">GoogleLustreInstanceAccessRulesOptions</a>

---


### GoogleLustreInstanceDynamicTierOptionsOutputReference <a name="GoogleLustreInstanceDynamicTierOptionsOutputReference" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceDynamicTierOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLustreInstanceDynamicTierOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptions">GoogleLustreInstanceDynamicTierOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLustreInstanceDynamicTierOptions
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceDynamicTierOptions">GoogleLustreInstanceDynamicTierOptions</a>

---


### GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference <a name="GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetMonth"></a>

```go
func ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.resetYear"></a>

```go
func ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

---


### GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference <a name="GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate">PutEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate">PutStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime">PutTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndDate` <a name="PutEndDate" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate"></a>

```go
func PutEndDate(value GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate"></a>

```go
func PutStartDate(value GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

---

##### `PutTime` <a name="PutTime" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime"></a>

```go
func PutTime(value GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDate">EndDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDate">StartDate</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.time">Time</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.timeInput">TimeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDate"></a>

```go
func EndDate() GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDateOutputReference</a>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDate"></a>

```go
func StartDate() GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference</a>

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.time"></a>

```go
func Time() GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference</a>

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.endDateInput"></a>

```go
func EndDateInput() GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowEndDate</a>

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.startDateInput"></a>

```go
func StartDateInput() GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.timeInput"></a>

```go
func TimeInput() GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

---


### GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference <a name="GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetMonth">ResetMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetYear">ResetYear</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetMonth` <a name="ResetMonth" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetMonth"></a>

```go
func ResetMonth()
```

##### `ResetYear` <a name="ResetYear" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.resetYear"></a>

```go
func ResetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowStartDate</a>

---


### GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference <a name="GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowTime</a>

---


### GoogleLustreInstanceMaintenancePolicyOutputReference <a name="GoogleLustreInstanceMaintenancePolicyOutputReference" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceMaintenancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLustreInstanceMaintenancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow">PutMaintenanceExclusionWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows">PutWeeklyMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.resetMaintenanceExclusionWindow">ResetMaintenanceExclusionWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceExclusionWindow` <a name="PutMaintenanceExclusionWindow" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow"></a>

```go
func PutMaintenanceExclusionWindow(value GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.putMaintenanceExclusionWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

---

##### `PutWeeklyMaintenanceWindows` <a name="PutWeeklyMaintenanceWindows" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows"></a>

```go
func PutWeeklyMaintenanceWindows(value GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.putWeeklyMaintenanceWindows.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

---

##### `ResetMaintenanceExclusionWindow` <a name="ResetMaintenanceExclusionWindow" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.resetMaintenanceExclusionWindow"></a>

```go
func ResetMaintenanceExclusionWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindow">MaintenanceExclusionWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindows">WeeklyMaintenanceWindows</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindowInput">MaintenanceExclusionWindowInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowsInput">WeeklyMaintenanceWindowsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy">GoogleLustreInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaintenanceExclusionWindow`<sup>Required</sup> <a name="MaintenanceExclusionWindow" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindow"></a>

```go
func MaintenanceExclusionWindow() GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindowOutputReference</a>

---

##### `WeeklyMaintenanceWindows`<sup>Required</sup> <a name="WeeklyMaintenanceWindows" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindows"></a>

```go
func WeeklyMaintenanceWindows() GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference</a>

---

##### `MaintenanceExclusionWindowInput`<sup>Optional</sup> <a name="MaintenanceExclusionWindowInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.maintenanceExclusionWindowInput"></a>

```go
func MaintenanceExclusionWindowInput() GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow">GoogleLustreInstanceMaintenancePolicyMaintenanceExclusionWindow</a>

---

##### `WeeklyMaintenanceWindowsInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowsInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindowsInput"></a>

```go
func WeeklyMaintenanceWindowsInput() GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLustreInstanceMaintenancePolicy
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicy">GoogleLustreInstanceMaintenancePolicy</a>

---


### GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference <a name="GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime"></a>

```go
func PutStartTime(value GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTime"></a>

```go
func StartTime() GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference</a>

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeekInput"></a>

```go
func DayOfWeekInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindows</a>

---


### GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference <a name="GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetHours"></a>

```go
func ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetMinutes"></a>

```go
func ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.resetSeconds"></a>

```go
func ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hours">Hours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hoursInput"></a>

```go
func HoursInput() *f64
```

- *Type:* *f64

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutesInput"></a>

```go
func MinutesInput() *f64
```

- *Type:* *f64

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.secondsInput"></a>

```go
func SecondsInput() *f64
```

- *Type:* *f64

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.hours"></a>

```go
func Hours() *f64
```

- *Type:* *f64

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.minutes"></a>

```go
func Minutes() *f64
```

- *Type:* *f64

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime">GoogleLustreInstanceMaintenancePolicyWeeklyMaintenanceWindowsStartTime</a>

---


### GoogleLustreInstanceTimeoutsOutputReference <a name="GoogleLustreInstanceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleLustreInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleLustreInstanceUpcomingMaintenanceScheduleList <a name="GoogleLustreInstanceUpcomingMaintenanceScheduleList" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceUpcomingMaintenanceScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleLustreInstanceUpcomingMaintenanceScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.get"></a>

```go
func Get(index *f64) GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference <a name="GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlelustreinstance"

googlelustreinstance.NewGoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceSchedule">GoogleLustreInstanceUpcomingMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleLustreInstanceUpcomingMaintenanceSchedule
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleLustreInstance.GoogleLustreInstanceUpcomingMaintenanceSchedule">GoogleLustreInstanceUpcomingMaintenanceSchedule</a>

---



