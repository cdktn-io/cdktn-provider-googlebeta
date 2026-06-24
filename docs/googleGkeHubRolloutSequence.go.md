# `googleGkeHubRolloutSequence` Submodule <a name="`googleGkeHubRolloutSequence` Submodule" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubRolloutSequence <a name="GoogleGkeHubRolloutSequence" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence google_gke_hub_rollout_sequence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

googlegkehubrolloutsequence.NewGoogleGkeHubRolloutSequence(scope Construct, id *string, config GoogleGkeHubRolloutSequenceConfig) GoogleGkeHubRolloutSequence
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig">GoogleGkeHubRolloutSequenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig">GoogleGkeHubRolloutSequenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig">PutAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector">PutIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages">PutStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetAutoUpgradeConfig">ResetAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetIgnoredClustersSelector">ResetIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoUpgradeConfig` <a name="PutAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig"></a>

```go
func PutAutoUpgradeConfig(value GoogleGkeHubRolloutSequenceAutoUpgradeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `PutIgnoredClustersSelector` <a name="PutIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector"></a>

```go
func PutIgnoredClustersSelector(value GoogleGkeHubRolloutSequenceIgnoredClustersSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `PutStages` <a name="PutStages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages"></a>

```go
func PutStages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts"></a>

```go
func PutTimeouts(value GoogleGkeHubRolloutSequenceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

---

##### `ResetAutoUpgradeConfig` <a name="ResetAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetAutoUpgradeConfig"></a>

```go
func ResetAutoUpgradeConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoredClustersSelector` <a name="ResetIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetIgnoredClustersSelector"></a>

```go
func ResetIgnoredClustersSelector()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGkeHubRolloutSequence resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

googlegkehubrolloutsequence.GoogleGkeHubRolloutSequence_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

googlegkehubrolloutsequence.GoogleGkeHubRolloutSequence_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

googlegkehubrolloutsequence.GoogleGkeHubRolloutSequence_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

googlegkehubrolloutsequence.GoogleGkeHubRolloutSequence_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleGkeHubRolloutSequence resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleGkeHubRolloutSequence to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleGkeHubRolloutSequence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubRolloutSequence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfig">AutoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelector">IgnoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stages">Stages</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList">GoogleGkeHubRolloutSequenceStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference">GoogleGkeHubRolloutSequenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfigInput">AutoUpgradeConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelectorInput">IgnoredClustersSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceIdInput">RolloutSequenceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stagesInput">StagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceId">RolloutSequenceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoUpgradeConfig`<sup>Required</sup> <a name="AutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfig"></a>

```go
func AutoUpgradeConfig() GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `IgnoredClustersSelector`<sup>Required</sup> <a name="IgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelector"></a>

```go
func IgnoredClustersSelector() GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stages"></a>

```go
func Stages() GoogleGkeHubRolloutSequenceStagesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList">GoogleGkeHubRolloutSequenceStagesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeouts"></a>

```go
func Timeouts() GoogleGkeHubRolloutSequenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference">GoogleGkeHubRolloutSequenceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AutoUpgradeConfigInput`<sup>Optional</sup> <a name="AutoUpgradeConfigInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfigInput"></a>

```go
func AutoUpgradeConfigInput() GoogleGkeHubRolloutSequenceAutoUpgradeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoredClustersSelectorInput`<sup>Optional</sup> <a name="IgnoredClustersSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelectorInput"></a>

```go
func IgnoredClustersSelectorInput() GoogleGkeHubRolloutSequenceIgnoredClustersSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RolloutSequenceIdInput`<sup>Optional</sup> <a name="RolloutSequenceIdInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceIdInput"></a>

```go
func RolloutSequenceIdInput() *string
```

- *Type:* *string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stagesInput"></a>

```go
func StagesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RolloutSequenceId`<sup>Required</sup> <a name="RolloutSequenceId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceId"></a>

```go
func RolloutSequenceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubRolloutSequenceAutoUpgradeConfig <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

&googlegkehubrolloutsequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig {
	RolloutCreationScope: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope">RolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | rollout_creation_scope block. |

---

##### `RolloutCreationScope`<sup>Optional</sup> <a name="RolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope"></a>

```go
RolloutCreationScope GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

rollout_creation_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#rollout_creation_scope GoogleGkeHubRolloutSequence#rollout_creation_scope}

---

### GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

&googlegkehubrolloutsequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope {
	UpgradeTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes">UpgradeTypes</a></code> | <code>*[]*string</code> | The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'. |

---

##### `UpgradeTypes`<sup>Optional</sup> <a name="UpgradeTypes" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes"></a>

```go
UpgradeTypes *[]*string
```

- *Type:* *[]*string

The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#upgrade_types GoogleGkeHubRolloutSequence#upgrade_types}

---

### GoogleGkeHubRolloutSequenceConfig <a name="GoogleGkeHubRolloutSequenceConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

&googlegkehubrolloutsequence.GoogleGkeHubRolloutSequenceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	RolloutSequenceId: *string,
	Stages: interface{},
	AutoUpgradeConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig,
	DeletionPolicy: *string,
	DisplayName: *string,
	Id: *string,
	IgnoredClustersSelector: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.rolloutSequenceId">RolloutSequenceId</a></code> | <code>*string</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.stages">Stages</a></code> | <code>interface{}</code> | stages block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.autoUpgradeConfig">AutoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.ignoredClustersSelector">IgnoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `RolloutSequenceId`<sup>Required</sup> <a name="RolloutSequenceId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.rolloutSequenceId"></a>

```go
RolloutSequenceId *string
```

- *Type:* *string

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#rollout_sequence_id GoogleGkeHubRolloutSequence#rollout_sequence_id}

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.stages"></a>

```go
Stages interface{}
```

- *Type:* interface{}

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#stages GoogleGkeHubRolloutSequence#stages}

---

##### `AutoUpgradeConfig`<sup>Optional</sup> <a name="AutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.autoUpgradeConfig"></a>

```go
AutoUpgradeConfig GoogleGkeHubRolloutSequenceAutoUpgradeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#auto_upgrade_config GoogleGkeHubRolloutSequence#auto_upgrade_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#deletion_policy GoogleGkeHubRolloutSequence#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#display_name GoogleGkeHubRolloutSequence#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoredClustersSelector`<sup>Optional</sup> <a name="IgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.ignoredClustersSelector"></a>

```go
IgnoredClustersSelector GoogleGkeHubRolloutSequenceIgnoredClustersSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#ignored_clusters_selector GoogleGkeHubRolloutSequence#ignored_clusters_selector}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#labels GoogleGkeHubRolloutSequence#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.timeouts"></a>

```go
Timeouts GoogleGkeHubRolloutSequenceTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#timeouts GoogleGkeHubRolloutSequence#timeouts}

---

### GoogleGkeHubRolloutSequenceIgnoredClustersSelector <a name="GoogleGkeHubRolloutSequenceIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

&googlegkehubrolloutsequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector {
	LabelSelector: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector">LabelSelector</a></code> | <code>*string</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector"></a>

```go
LabelSelector *string
```

- *Type:* *string

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#label_selector GoogleGkeHubRolloutSequence#label_selector}

---

### GoogleGkeHubRolloutSequenceStages <a name="GoogleGkeHubRolloutSequenceStages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

&googlegkehubrolloutsequence.GoogleGkeHubRolloutSequenceStages {
	FleetProjects: *[]*string,
	ClusterSelector: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector,
	SoakDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.fleetProjects">FleetProjects</a></code> | <code>*[]*string</code> | List of Fleet projects to select the clusters from. Expected format: projects/{project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.clusterSelector">ClusterSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | cluster_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.soakDuration">SoakDuration</a></code> | <code>*string</code> | Soak time after upgrading all the clusters in the stage. Has to be specified in seconds, minutes, hours or days. |

---

##### `FleetProjects`<sup>Required</sup> <a name="FleetProjects" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.fleetProjects"></a>

```go
FleetProjects *[]*string
```

- *Type:* *[]*string

List of Fleet projects to select the clusters from. Expected format: projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#fleet_projects GoogleGkeHubRolloutSequence#fleet_projects}

---

##### `ClusterSelector`<sup>Optional</sup> <a name="ClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.clusterSelector"></a>

```go
ClusterSelector GoogleGkeHubRolloutSequenceStagesClusterSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

cluster_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#cluster_selector GoogleGkeHubRolloutSequence#cluster_selector}

---

##### `SoakDuration`<sup>Optional</sup> <a name="SoakDuration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.soakDuration"></a>

```go
SoakDuration *string
```

- *Type:* *string

Soak time after upgrading all the clusters in the stage. Has to be specified in seconds, minutes, hours or days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#soak_duration GoogleGkeHubRolloutSequence#soak_duration}

---

### GoogleGkeHubRolloutSequenceStagesClusterSelector <a name="GoogleGkeHubRolloutSequenceStagesClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

&googlegkehubrolloutsequence.GoogleGkeHubRolloutSequenceStagesClusterSelector {
	LabelSelector: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.property.labelSelector">LabelSelector</a></code> | <code>*string</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.property.labelSelector"></a>

```go
LabelSelector *string
```

- *Type:* *string

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#label_selector GoogleGkeHubRolloutSequence#label_selector}

---

### GoogleGkeHubRolloutSequenceTimeouts <a name="GoogleGkeHubRolloutSequenceTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

&googlegkehubrolloutsequence.GoogleGkeHubRolloutSequenceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#create GoogleGkeHubRolloutSequence#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#delete GoogleGkeHubRolloutSequence#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#update GoogleGkeHubRolloutSequence#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#create GoogleGkeHubRolloutSequence#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#delete GoogleGkeHubRolloutSequence#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_gke_hub_rollout_sequence#update GoogleGkeHubRolloutSequence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

googlegkehubrolloutsequence.NewGoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope">PutRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope">ResetRolloutCreationScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRolloutCreationScope` <a name="PutRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope"></a>

```go
func PutRolloutCreationScope(value GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `ResetRolloutCreationScope` <a name="ResetRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope"></a>

```go
func ResetRolloutCreationScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope">RolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput">RolloutCreationScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RolloutCreationScope`<sup>Required</sup> <a name="RolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope"></a>

```go
func RolloutCreationScope() GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a>

---

##### `RolloutCreationScopeInput`<sup>Optional</sup> <a name="RolloutCreationScopeInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput"></a>

```go
func RolloutCreationScopeInput() GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubRolloutSequenceAutoUpgradeConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---


### GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

googlegkehubrolloutsequence.NewGoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes">ResetUpgradeTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpgradeTypes` <a name="ResetUpgradeTypes" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes"></a>

```go
func ResetUpgradeTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput">UpgradeTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes">UpgradeTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpgradeTypesInput`<sup>Optional</sup> <a name="UpgradeTypesInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput"></a>

```go
func UpgradeTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UpgradeTypes`<sup>Required</sup> <a name="UpgradeTypes" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes"></a>

```go
func UpgradeTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---


### GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference <a name="GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

googlegkehubrolloutsequence.NewGoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput">LabelSelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector">LabelSelector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput"></a>

```go
func LabelSelectorInput() *string
```

- *Type:* *string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector"></a>

```go
func LabelSelector() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubRolloutSequenceIgnoredClustersSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---


### GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference <a name="GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

googlegkehubrolloutsequence.NewGoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput">LabelSelectorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector">LabelSelector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput"></a>

```go
func LabelSelectorInput() *string
```

- *Type:* *string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector"></a>

```go
func LabelSelector() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleGkeHubRolloutSequenceStagesClusterSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---


### GoogleGkeHubRolloutSequenceStagesList <a name="GoogleGkeHubRolloutSequenceStagesList" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

googlegkehubrolloutsequence.NewGoogleGkeHubRolloutSequenceStagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleGkeHubRolloutSequenceStagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get"></a>

```go
func Get(index *f64) GoogleGkeHubRolloutSequenceStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeHubRolloutSequenceStagesOutputReference <a name="GoogleGkeHubRolloutSequenceStagesOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

googlegkehubrolloutsequence.NewGoogleGkeHubRolloutSequenceStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleGkeHubRolloutSequenceStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector">PutClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetClusterSelector">ResetClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetSoakDuration">ResetSoakDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterSelector` <a name="PutClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector"></a>

```go
func PutClusterSelector(value GoogleGkeHubRolloutSequenceStagesClusterSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `ResetClusterSelector` <a name="ResetClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetClusterSelector"></a>

```go
func ResetClusterSelector()
```

##### `ResetSoakDuration` <a name="ResetSoakDuration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetSoakDuration"></a>

```go
func ResetSoakDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelector">ClusterSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference">GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput">ClusterSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput">FleetProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput">SoakDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjects">FleetProjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDuration">SoakDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterSelector`<sup>Required</sup> <a name="ClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelector"></a>

```go
func ClusterSelector() GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference">GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference</a>

---

##### `ClusterSelectorInput`<sup>Optional</sup> <a name="ClusterSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput"></a>

```go
func ClusterSelectorInput() GoogleGkeHubRolloutSequenceStagesClusterSelector
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `FleetProjectsInput`<sup>Optional</sup> <a name="FleetProjectsInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput"></a>

```go
func FleetProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SoakDurationInput`<sup>Optional</sup> <a name="SoakDurationInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput"></a>

```go
func SoakDurationInput() *string
```

- *Type:* *string

---

##### `FleetProjects`<sup>Required</sup> <a name="FleetProjects" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjects"></a>

```go
func FleetProjects() *[]*string
```

- *Type:* *[]*string

---

##### `SoakDuration`<sup>Required</sup> <a name="SoakDuration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDuration"></a>

```go
func SoakDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleGkeHubRolloutSequenceTimeoutsOutputReference <a name="GoogleGkeHubRolloutSequenceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlegkehubrolloutsequence"

googlegkehubrolloutsequence.NewGoogleGkeHubRolloutSequenceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleGkeHubRolloutSequenceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



