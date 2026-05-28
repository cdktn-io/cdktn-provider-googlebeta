# `googleDiscoveryEngineDataConnector` Submodule <a name="`googleDiscoveryEngineDataConnector` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineDataConnector <a name="GoogleDiscoveryEngineDataConnector" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector google_discovery_engine_data_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.NewGoogleDiscoveryEngineDataConnector(scope Construct, id *string, config GoogleDiscoveryEngineDataConnectorConfig) GoogleDiscoveryEngineDataConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig">GoogleDiscoveryEngineDataConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig">GoogleDiscoveryEngineDataConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putActionConfig">PutActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putBapConfig">PutBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putDestinationConfigs">PutDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putEntities">PutEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetActionConfig">ResetActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetAutoRunDisabled">ResetAutoRunDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetBapConfig">ResetBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetConnectorModes">ResetConnectorModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDataSourceVersion">ResetDataSourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDestinationConfigs">ResetDestinationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetEntities">ResetEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetIncrementalRefreshInterval">ResetIncrementalRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetIncrementalSyncDisabled">ResetIncrementalSyncDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetJsonParams">ResetJsonParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetStaticIpEnabled">ResetStaticIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetSyncMode">ResetSyncMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionConfig` <a name="PutActionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putActionConfig"></a>

```go
func PutActionConfig(value GoogleDiscoveryEngineDataConnectorActionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putActionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a>

---

##### `PutBapConfig` <a name="PutBapConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putBapConfig"></a>

```go
func PutBapConfig(value GoogleDiscoveryEngineDataConnectorBapConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putBapConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a>

---

##### `PutDestinationConfigs` <a name="PutDestinationConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putDestinationConfigs"></a>

```go
func PutDestinationConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putDestinationConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEntities` <a name="PutEntities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putEntities"></a>

```go
func PutEntities(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putEntities.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDiscoveryEngineDataConnectorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a>

---

##### `ResetActionConfig` <a name="ResetActionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetActionConfig"></a>

```go
func ResetActionConfig()
```

##### `ResetAutoRunDisabled` <a name="ResetAutoRunDisabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetAutoRunDisabled"></a>

```go
func ResetAutoRunDisabled()
```

##### `ResetBapConfig` <a name="ResetBapConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetBapConfig"></a>

```go
func ResetBapConfig()
```

##### `ResetConnectorModes` <a name="ResetConnectorModes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetConnectorModes"></a>

```go
func ResetConnectorModes()
```

##### `ResetDataSourceVersion` <a name="ResetDataSourceVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDataSourceVersion"></a>

```go
func ResetDataSourceVersion()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetDestinationConfigs` <a name="ResetDestinationConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDestinationConfigs"></a>

```go
func ResetDestinationConfigs()
```

##### `ResetEntities` <a name="ResetEntities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetEntities"></a>

```go
func ResetEntities()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetId"></a>

```go
func ResetId()
```

##### `ResetIncrementalRefreshInterval` <a name="ResetIncrementalRefreshInterval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetIncrementalRefreshInterval"></a>

```go
func ResetIncrementalRefreshInterval()
```

##### `ResetIncrementalSyncDisabled` <a name="ResetIncrementalSyncDisabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetIncrementalSyncDisabled"></a>

```go
func ResetIncrementalSyncDisabled()
```

##### `ResetJsonParams` <a name="ResetJsonParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetJsonParams"></a>

```go
func ResetJsonParams()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetKmsKeyName"></a>

```go
func ResetKmsKeyName()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetParams"></a>

```go
func ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetProject"></a>

```go
func ResetProject()
```

##### `ResetStaticIpEnabled` <a name="ResetStaticIpEnabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetStaticIpEnabled"></a>

```go
func ResetStaticIpEnabled()
```

##### `ResetSyncMode` <a name="ResetSyncMode" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetSyncMode"></a>

```go
func ResetSyncMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.GoogleDiscoveryEngineDataConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.GoogleDiscoveryEngineDataConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.GoogleDiscoveryEngineDataConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.GoogleDiscoveryEngineDataConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GoogleDiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleDiscoveryEngineDataConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleDiscoveryEngineDataConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineDataConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionConfig">ActionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference">GoogleDiscoveryEngineDataConnectorActionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionState">ActionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.bapConfig">BapConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference">GoogleDiscoveryEngineDataConnectorBapConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.blockingReasons">BlockingReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorType">ConnectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.destinationConfigs">DestinationConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList">GoogleDiscoveryEngineDataConnectorDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.entities">Entities</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList">GoogleDiscoveryEngineDataConnectorEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList">GoogleDiscoveryEngineDataConnectorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.lastSyncTime">LastSyncTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.latestPauseTime">LatestPauseTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.privateConnectivityProjectId">PrivateConnectivityProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.realtimeState">RealtimeState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpAddresses">StaticIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference">GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionConfigInput">ActionConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.autoRunDisabledInput">AutoRunDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.bapConfigInput">BapConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionDisplayNameInput">CollectionDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorModesInput">ConnectorModesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceInput">DataSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceVersionInput">DataSourceVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.destinationConfigsInput">DestinationConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.entitiesInput">EntitiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput">IncrementalRefreshIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalSyncDisabledInput">IncrementalSyncDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.jsonParamsInput">JsonParamsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.paramsInput">ParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.refreshIntervalInput">RefreshIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpEnabledInput">StaticIpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.syncModeInput">SyncModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.autoRunDisabled">AutoRunDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionDisplayName">CollectionDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorModes">ConnectorModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceVersion">DataSourceVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalRefreshInterval">IncrementalRefreshInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalSyncDisabled">IncrementalSyncDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.jsonParams">JsonParams</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.params">Params</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.refreshInterval">RefreshInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpEnabled">StaticIpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.syncMode">SyncMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionConfig`<sup>Required</sup> <a name="ActionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionConfig"></a>

```go
func ActionConfig() GoogleDiscoveryEngineDataConnectorActionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference">GoogleDiscoveryEngineDataConnectorActionConfigOutputReference</a>

---

##### `ActionState`<sup>Required</sup> <a name="ActionState" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionState"></a>

```go
func ActionState() *string
```

- *Type:* *string

---

##### `BapConfig`<sup>Required</sup> <a name="BapConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.bapConfig"></a>

```go
func BapConfig() GoogleDiscoveryEngineDataConnectorBapConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference">GoogleDiscoveryEngineDataConnectorBapConfigOutputReference</a>

---

##### `BlockingReasons`<sup>Required</sup> <a name="BlockingReasons" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.blockingReasons"></a>

```go
func BlockingReasons() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorType"></a>

```go
func ConnectorType() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DestinationConfigs`<sup>Required</sup> <a name="DestinationConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.destinationConfigs"></a>

```go
func DestinationConfigs() GoogleDiscoveryEngineDataConnectorDestinationConfigsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList">GoogleDiscoveryEngineDataConnectorDestinationConfigsList</a>

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.entities"></a>

```go
func Entities() GoogleDiscoveryEngineDataConnectorEntitiesList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList">GoogleDiscoveryEngineDataConnectorEntitiesList</a>

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.errors"></a>

```go
func Errors() GoogleDiscoveryEngineDataConnectorErrorsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList">GoogleDiscoveryEngineDataConnectorErrorsList</a>

---

##### `LastSyncTime`<sup>Required</sup> <a name="LastSyncTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.lastSyncTime"></a>

```go
func LastSyncTime() *string
```

- *Type:* *string

---

##### `LatestPauseTime`<sup>Required</sup> <a name="LatestPauseTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.latestPauseTime"></a>

```go
func LatestPauseTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateConnectivityProjectId`<sup>Required</sup> <a name="PrivateConnectivityProjectId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.privateConnectivityProjectId"></a>

```go
func PrivateConnectivityProjectId() *string
```

- *Type:* *string

---

##### `RealtimeState`<sup>Required</sup> <a name="RealtimeState" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.realtimeState"></a>

```go
func RealtimeState() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StaticIpAddresses`<sup>Required</sup> <a name="StaticIpAddresses" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpAddresses"></a>

```go
func StaticIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.timeouts"></a>

```go
func Timeouts() GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference">GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActionConfigInput`<sup>Optional</sup> <a name="ActionConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionConfigInput"></a>

```go
func ActionConfigInput() GoogleDiscoveryEngineDataConnectorActionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a>

---

##### `AutoRunDisabledInput`<sup>Optional</sup> <a name="AutoRunDisabledInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.autoRunDisabledInput"></a>

```go
func AutoRunDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `BapConfigInput`<sup>Optional</sup> <a name="BapConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.bapConfigInput"></a>

```go
func BapConfigInput() GoogleDiscoveryEngineDataConnectorBapConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a>

---

##### `CollectionDisplayNameInput`<sup>Optional</sup> <a name="CollectionDisplayNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionDisplayNameInput"></a>

```go
func CollectionDisplayNameInput() *string
```

- *Type:* *string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `ConnectorModesInput`<sup>Optional</sup> <a name="ConnectorModesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorModesInput"></a>

```go
func ConnectorModesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceInput"></a>

```go
func DataSourceInput() *string
```

- *Type:* *string

---

##### `DataSourceVersionInput`<sup>Optional</sup> <a name="DataSourceVersionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceVersionInput"></a>

```go
func DataSourceVersionInput() *f64
```

- *Type:* *f64

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `DestinationConfigsInput`<sup>Optional</sup> <a name="DestinationConfigsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.destinationConfigsInput"></a>

```go
func DestinationConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.entitiesInput"></a>

```go
func EntitiesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncrementalRefreshIntervalInput`<sup>Optional</sup> <a name="IncrementalRefreshIntervalInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput"></a>

```go
func IncrementalRefreshIntervalInput() *string
```

- *Type:* *string

---

##### `IncrementalSyncDisabledInput`<sup>Optional</sup> <a name="IncrementalSyncDisabledInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalSyncDisabledInput"></a>

```go
func IncrementalSyncDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `JsonParamsInput`<sup>Optional</sup> <a name="JsonParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.jsonParamsInput"></a>

```go
func JsonParamsInput() *string
```

- *Type:* *string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.kmsKeyNameInput"></a>

```go
func KmsKeyNameInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.paramsInput"></a>

```go
func ParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RefreshIntervalInput`<sup>Optional</sup> <a name="RefreshIntervalInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.refreshIntervalInput"></a>

```go
func RefreshIntervalInput() *string
```

- *Type:* *string

---

##### `StaticIpEnabledInput`<sup>Optional</sup> <a name="StaticIpEnabledInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpEnabledInput"></a>

```go
func StaticIpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SyncModeInput`<sup>Optional</sup> <a name="SyncModeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.syncModeInput"></a>

```go
func SyncModeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoRunDisabled`<sup>Required</sup> <a name="AutoRunDisabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.autoRunDisabled"></a>

```go
func AutoRunDisabled() interface{}
```

- *Type:* interface{}

---

##### `CollectionDisplayName`<sup>Required</sup> <a name="CollectionDisplayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionDisplayName"></a>

```go
func CollectionDisplayName() *string
```

- *Type:* *string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `ConnectorModes`<sup>Required</sup> <a name="ConnectorModes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorModes"></a>

```go
func ConnectorModes() *[]*string
```

- *Type:* *[]*string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `DataSourceVersion`<sup>Required</sup> <a name="DataSourceVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceVersion"></a>

```go
func DataSourceVersion() *f64
```

- *Type:* *f64

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncrementalRefreshInterval`<sup>Required</sup> <a name="IncrementalRefreshInterval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalRefreshInterval"></a>

```go
func IncrementalRefreshInterval() *string
```

- *Type:* *string

---

##### `IncrementalSyncDisabled`<sup>Required</sup> <a name="IncrementalSyncDisabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalSyncDisabled"></a>

```go
func IncrementalSyncDisabled() interface{}
```

- *Type:* interface{}

---

##### `JsonParams`<sup>Required</sup> <a name="JsonParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.jsonParams"></a>

```go
func JsonParams() *string
```

- *Type:* *string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.params"></a>

```go
func Params() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.refreshInterval"></a>

```go
func RefreshInterval() *string
```

- *Type:* *string

---

##### `StaticIpEnabled`<sup>Required</sup> <a name="StaticIpEnabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpEnabled"></a>

```go
func StaticIpEnabled() interface{}
```

- *Type:* interface{}

---

##### `SyncMode`<sup>Required</sup> <a name="SyncMode" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.syncMode"></a>

```go
func SyncMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineDataConnectorActionConfig <a name="GoogleDiscoveryEngineDataConnectorActionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

&googlediscoveryenginedataconnector.GoogleDiscoveryEngineDataConnectorActionConfig {
	ActionParams: *map[string]*string,
	CreateBapConnection: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.property.actionParams">ActionParams</a></code> | <code>*map[string]*string</code> | Params needed to configure the actions in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.property.createBapConnection">CreateBapConnection</a></code> | <code>interface{}</code> | Whether to create a BAP (Business Application Platform) connection for this action connector. |

---

##### `ActionParams`<sup>Optional</sup> <a name="ActionParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.property.actionParams"></a>

```go
ActionParams *map[string]*string
```

- *Type:* *map[string]*string

Params needed to configure the actions in the format of String-to-String (Key, Value) pairs.

Contains connection
credentials and configuration for the action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#action_params GoogleDiscoveryEngineDataConnector#action_params}

---

##### `CreateBapConnection`<sup>Optional</sup> <a name="CreateBapConnection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.property.createBapConnection"></a>

```go
CreateBapConnection interface{}
```

- *Type:* interface{}

Whether to create a BAP (Business Application Platform) connection for this action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#create_bap_connection GoogleDiscoveryEngineDataConnector#create_bap_connection}

---

### GoogleDiscoveryEngineDataConnectorBapConfig <a name="GoogleDiscoveryEngineDataConnectorBapConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

&googlediscoveryenginedataconnector.GoogleDiscoveryEngineDataConnectorBapConfig {
	EnabledActions: *[]*string,
	SupportedConnectorModes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.property.enabledActions">EnabledActions</a></code> | <code>*[]*string</code> | The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes">SupportedConnectorModes</a></code> | <code>*[]*string</code> | The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'. |

---

##### `EnabledActions`<sup>Optional</sup> <a name="EnabledActions" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.property.enabledActions"></a>

```go
EnabledActions *[]*string
```

- *Type:* *[]*string

The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#enabled_actions GoogleDiscoveryEngineDataConnector#enabled_actions}

---

##### `SupportedConnectorModes`<sup>Optional</sup> <a name="SupportedConnectorModes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes"></a>

```go
SupportedConnectorModes *[]*string
```

- *Type:* *[]*string

The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#supported_connector_modes GoogleDiscoveryEngineDataConnector#supported_connector_modes}

---

### GoogleDiscoveryEngineDataConnectorConfig <a name="GoogleDiscoveryEngineDataConnectorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

&googlediscoveryenginedataconnector.GoogleDiscoveryEngineDataConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CollectionDisplayName: *string,
	CollectionId: *string,
	DataSource: *string,
	Location: *string,
	RefreshInterval: *string,
	ActionConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig,
	AutoRunDisabled: interface{},
	BapConfig: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig,
	ConnectorModes: *[]*string,
	DataSourceVersion: *f64,
	DeletionPolicy: *string,
	DestinationConfigs: interface{},
	Entities: interface{},
	Id: *string,
	IncrementalRefreshInterval: *string,
	IncrementalSyncDisabled: interface{},
	JsonParams: *string,
	KmsKeyName: *string,
	Params: *map[string]*string,
	Project: *string,
	StaticIpEnabled: interface{},
	SyncMode: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.collectionDisplayName">CollectionDisplayName</a></code> | <code>*string</code> | The display name of the Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | The ID to use for the Collection, which will become the final component of the Collection's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dataSource">DataSource</a></code> | <code>*string</code> | The identifier for the data source. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.refreshInterval">RefreshInterval</a></code> | <code>*string</code> | The refresh interval for data sync. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.actionConfig">ActionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a></code> | action_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.autoRunDisabled">AutoRunDisabled</a></code> | <code>interface{}</code> | Indicates whether full syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.bapConfig">BapConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a></code> | bap_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.connectorModes">ConnectorModes</a></code> | <code>*[]*string</code> | The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dataSourceVersion">DataSourceVersion</a></code> | <code>*f64</code> | The version of the data source. For example, '3' for Jira v3. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.destinationConfigs">DestinationConfigs</a></code> | <code>interface{}</code> | destination_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.entities">Entities</a></code> | <code>interface{}</code> | entities block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#id GoogleDiscoveryEngineDataConnector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval">IncrementalRefreshInterval</a></code> | <code>*string</code> | The refresh interval specifically for incremental data syncs. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled">IncrementalSyncDisabled</a></code> | <code>interface{}</code> | Indicates whether incremental syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.jsonParams">JsonParams</a></code> | <code>*string</code> | Params needed to access the source in the format of json string. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | The KMS key to be used to protect the DataStores managed by this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.params">Params</a></code> | <code>*map[string]*string</code> | Params needed to access the source in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#project GoogleDiscoveryEngineDataConnector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.staticIpEnabled">StaticIpEnabled</a></code> | <code>interface{}</code> | Whether customer has enabled static IP addresses for this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.syncMode">SyncMode</a></code> | <code>*string</code> | The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectionDisplayName`<sup>Required</sup> <a name="CollectionDisplayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.collectionDisplayName"></a>

```go
CollectionDisplayName *string
```

- *Type:* *string

The display name of the Collection.

Should be human readable, used to display collections in the Console
Dashboard. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#collection_display_name GoogleDiscoveryEngineDataConnector#collection_display_name}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

The ID to use for the Collection, which will become the final component of the Collection's resource name.

A new Collection is created as
part of the DataConnector setup. DataConnector is a singleton
resource under Collection, managing all DataStores of the Collection.
This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
standard with a length limit of 63 characters. Otherwise, an
INVALID_ARGUMENT error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#collection_id GoogleDiscoveryEngineDataConnector#collection_id}

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dataSource"></a>

```go
DataSource *string
```

- *Type:* *string

The identifier for the data source.

This is a partial list of supported connectors. Please refer to the
[documentation](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/introduction-to-connectors-and-data-stores)
for the full list of connectors.

Supported first-party connectors include:

* 'bigquery'
* 'gcp_fhir'
* 'google_mail'
* 'google_drive'
* 'google_calendar'
* 'google_chat'

Supported third-party connectors include:
Generally available (GA) connectors:

* 'onedrive'
* 'outlook'
* 'confluence'
* 'jira'
* 'servicenow'
* 'sharepoint'

Preview connectors:

* 'asana'
* 'azure_active_directory'
* 'box'
* 'canva'
* 'confluence_server'
* 'custom_connector'
* 'docusign'
* 'dropbox'
* 'dynamics365'
* 'github'
* 'gitlab'
* 'hubspot'
* 'jira_server'
* 'linear'
* 'native_cloud_identity'
* 'notion'
* 'okta'
* 'pagerduty'
* 'peoplesoft'
* 'salesforce'
* 'shopify'
* 'slack'
* 'snowflake'
* 'teams'
* 'trello'
* 'workday'
* 'zendesk'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#data_source GoogleDiscoveryEngineDataConnector#data_source}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#location GoogleDiscoveryEngineDataConnector#location}

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.refreshInterval"></a>

```go
RefreshInterval *string
```

- *Type:* *string

The refresh interval for data sync.

If duration is set to 0, the data will
be synced in real time. The streaming feature is not supported yet. The
minimum is 30 minutes and maximum is 7 days. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#refresh_interval GoogleDiscoveryEngineDataConnector#refresh_interval}

---

##### `ActionConfig`<sup>Optional</sup> <a name="ActionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.actionConfig"></a>

```go
ActionConfig GoogleDiscoveryEngineDataConnectorActionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a>

action_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#action_config GoogleDiscoveryEngineDataConnector#action_config}

---

##### `AutoRunDisabled`<sup>Optional</sup> <a name="AutoRunDisabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.autoRunDisabled"></a>

```go
AutoRunDisabled interface{}
```

- *Type:* interface{}

Indicates whether full syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#auto_run_disabled GoogleDiscoveryEngineDataConnector#auto_run_disabled}

---

##### `BapConfig`<sup>Optional</sup> <a name="BapConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.bapConfig"></a>

```go
BapConfig GoogleDiscoveryEngineDataConnectorBapConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a>

bap_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#bap_config GoogleDiscoveryEngineDataConnector#bap_config}

---

##### `ConnectorModes`<sup>Optional</sup> <a name="ConnectorModes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.connectorModes"></a>

```go
ConnectorModes *[]*string
```

- *Type:* *[]*string

The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#connector_modes GoogleDiscoveryEngineDataConnector#connector_modes}

---

##### `DataSourceVersion`<sup>Optional</sup> <a name="DataSourceVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dataSourceVersion"></a>

```go
DataSourceVersion *f64
```

- *Type:* *f64

The version of the data source. For example, '3' for Jira v3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#data_source_version GoogleDiscoveryEngineDataConnector#data_source_version}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#deletion_policy GoogleDiscoveryEngineDataConnector#deletion_policy}

---

##### `DestinationConfigs`<sup>Optional</sup> <a name="DestinationConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.destinationConfigs"></a>

```go
DestinationConfigs interface{}
```

- *Type:* interface{}

destination_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#destination_configs GoogleDiscoveryEngineDataConnector#destination_configs}

---

##### `Entities`<sup>Optional</sup> <a name="Entities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.entities"></a>

```go
Entities interface{}
```

- *Type:* interface{}

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#entities GoogleDiscoveryEngineDataConnector#entities}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#id GoogleDiscoveryEngineDataConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncrementalRefreshInterval`<sup>Optional</sup> <a name="IncrementalRefreshInterval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval"></a>

```go
IncrementalRefreshInterval *string
```

- *Type:* *string

The refresh interval specifically for incremental data syncs.

If unset,
incremental syncs will use the default from env, set to 3hrs.
The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P
connectors. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#incremental_refresh_interval GoogleDiscoveryEngineDataConnector#incremental_refresh_interval}

---

##### `IncrementalSyncDisabled`<sup>Optional</sup> <a name="IncrementalSyncDisabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled"></a>

```go
IncrementalSyncDisabled interface{}
```

- *Type:* interface{}

Indicates whether incremental syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#incremental_sync_disabled GoogleDiscoveryEngineDataConnector#incremental_sync_disabled}

---

##### `JsonParams`<sup>Optional</sup> <a name="JsonParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.jsonParams"></a>

```go
JsonParams *string
```

- *Type:* *string

Params needed to access the source in the format of json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#json_params GoogleDiscoveryEngineDataConnector#json_params}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.kmsKeyName"></a>

```go
KmsKeyName *string
```

- *Type:* *string

The KMS key to be used to protect the DataStores managed by this connector.

Must be set for requests that need to comply with CMEK Org Policy
protections.
If this field is set and processed successfully, the DataStores created by
this connector will be protected by the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#kms_key_name GoogleDiscoveryEngineDataConnector#kms_key_name}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.params"></a>

```go
Params *map[string]*string
```

- *Type:* *map[string]*string

Params needed to access the source in the format of String-to-String (Key, Value) pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#params GoogleDiscoveryEngineDataConnector#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#project GoogleDiscoveryEngineDataConnector#project}.

---

##### `StaticIpEnabled`<sup>Optional</sup> <a name="StaticIpEnabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.staticIpEnabled"></a>

```go
StaticIpEnabled interface{}
```

- *Type:* interface{}

Whether customer has enabled static IP addresses for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#static_ip_enabled GoogleDiscoveryEngineDataConnector#static_ip_enabled}

---

##### `SyncMode`<sup>Optional</sup> <a name="SyncMode" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.syncMode"></a>

```go
SyncMode *string
```

- *Type:* *string

The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#sync_mode GoogleDiscoveryEngineDataConnector#sync_mode}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.timeouts"></a>

```go
Timeouts GoogleDiscoveryEngineDataConnectorTimeouts
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#timeouts GoogleDiscoveryEngineDataConnector#timeouts}

---

### GoogleDiscoveryEngineDataConnectorDestinationConfigs <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

&googlediscoveryenginedataconnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs {
	Destinations: interface{},
	Key: *string,
	Params: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.destinations">Destinations</a></code> | <code>interface{}</code> | destinations block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.key">Key</a></code> | <code>*string</code> | The key of the destination configuration, for example 'url'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.params">Params</a></code> | <code>*string</code> | Additional parameters for this destination config in structured json format. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#destinations GoogleDiscoveryEngineDataConnector#destinations}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the destination configuration, for example 'url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#key GoogleDiscoveryEngineDataConnector#key}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.params"></a>

```go
Params *string
```

- *Type:* *string

Additional parameters for this destination config in structured json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#params GoogleDiscoveryEngineDataConnector#params}

---

### GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

&googlediscoveryenginedataconnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations {
	Host: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host">Host</a></code> | <code>*string</code> | The host of the destination, for example 'https://example.atlassian.net'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port">Port</a></code> | <code>*f64</code> | Target port number accepted by the destination. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host"></a>

```go
Host *string
```

- *Type:* *string

The host of the destination, for example 'https://example.atlassian.net'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#host GoogleDiscoveryEngineDataConnector#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Target port number accepted by the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#port GoogleDiscoveryEngineDataConnector#port}

---

### GoogleDiscoveryEngineDataConnectorEntities <a name="GoogleDiscoveryEngineDataConnectorEntities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

&googlediscoveryenginedataconnector.GoogleDiscoveryEngineDataConnectorEntities {
	EntityName: *string,
	KeyPropertyMappings: *map[string]*string,
	Params: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.entityName">EntityName</a></code> | <code>*string</code> | The name of the entity. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.keyPropertyMappings">KeyPropertyMappings</a></code> | <code>*map[string]*string</code> | Attributes for indexing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.params">Params</a></code> | <code>*string</code> | The parameters for the entity to facilitate data ingestion. |

---

##### `EntityName`<sup>Optional</sup> <a name="EntityName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.entityName"></a>

```go
EntityName *string
```

- *Type:* *string

The name of the entity.

Supported values by data source:

* Salesforce: 'Lead', 'Opportunity', 'Contact', 'Account', 'Case', 'Contract', 'Campaign'
* Jira: project, issue, attachment, comment, worklog
* Confluence: 'Content', 'Space'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#entity_name GoogleDiscoveryEngineDataConnector#entity_name}

---

##### `KeyPropertyMappings`<sup>Optional</sup> <a name="KeyPropertyMappings" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.keyPropertyMappings"></a>

```go
KeyPropertyMappings *map[string]*string
```

- *Type:* *map[string]*string

Attributes for indexing.

Key: Field name.
Value: The key property to map a field to, such as 'title', and
'description'. Supported key properties:

* 'title': The title for data record. This would be displayed on search
  results.
* 'description': The description for data record. This would be displayed
  on search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#key_property_mappings GoogleDiscoveryEngineDataConnector#key_property_mappings}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.params"></a>

```go
Params *string
```

- *Type:* *string

The parameters for the entity to facilitate data ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#params GoogleDiscoveryEngineDataConnector#params}

---

### GoogleDiscoveryEngineDataConnectorErrors <a name="GoogleDiscoveryEngineDataConnectorErrors" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

&googlediscoveryenginedataconnector.GoogleDiscoveryEngineDataConnectorErrors {

}
```


### GoogleDiscoveryEngineDataConnectorTimeouts <a name="GoogleDiscoveryEngineDataConnectorTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

&googlediscoveryenginedataconnector.GoogleDiscoveryEngineDataConnectorTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#create GoogleDiscoveryEngineDataConnector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#delete GoogleDiscoveryEngineDataConnector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#update GoogleDiscoveryEngineDataConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#create GoogleDiscoveryEngineDataConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#delete GoogleDiscoveryEngineDataConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_data_connector#update GoogleDiscoveryEngineDataConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineDataConnectorActionConfigOutputReference <a name="GoogleDiscoveryEngineDataConnectorActionConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.NewGoogleDiscoveryEngineDataConnectorActionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineDataConnectorActionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams">ResetActionParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection">ResetCreateBapConnection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionParams` <a name="ResetActionParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams"></a>

```go
func ResetActionParams()
```

##### `ResetCreateBapConnection` <a name="ResetCreateBapConnection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection"></a>

```go
func ResetCreateBapConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured">IsActionConfigured</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput">ActionParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput">CreateBapConnectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams">ActionParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection">CreateBapConnection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsActionConfigured`<sup>Required</sup> <a name="IsActionConfigured" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured"></a>

```go
func IsActionConfigured() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ActionParamsInput`<sup>Optional</sup> <a name="ActionParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput"></a>

```go
func ActionParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CreateBapConnectionInput`<sup>Optional</sup> <a name="CreateBapConnectionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput"></a>

```go
func CreateBapConnectionInput() interface{}
```

- *Type:* interface{}

---

##### `ActionParams`<sup>Required</sup> <a name="ActionParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams"></a>

```go
func ActionParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CreateBapConnection`<sup>Required</sup> <a name="CreateBapConnection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection"></a>

```go
func CreateBapConnection() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineDataConnectorActionConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a>

---


### GoogleDiscoveryEngineDataConnectorBapConfigOutputReference <a name="GoogleDiscoveryEngineDataConnectorBapConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.NewGoogleDiscoveryEngineDataConnectorBapConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineDataConnectorBapConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions">ResetEnabledActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes">ResetSupportedConnectorModes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabledActions` <a name="ResetEnabledActions" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions"></a>

```go
func ResetEnabledActions()
```

##### `ResetSupportedConnectorModes` <a name="ResetSupportedConnectorModes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes"></a>

```go
func ResetSupportedConnectorModes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput">EnabledActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput">SupportedConnectorModesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions">EnabledActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes">SupportedConnectorModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledActionsInput`<sup>Optional</sup> <a name="EnabledActionsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput"></a>

```go
func EnabledActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedConnectorModesInput`<sup>Optional</sup> <a name="SupportedConnectorModesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput"></a>

```go
func SupportedConnectorModesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledActions`<sup>Required</sup> <a name="EnabledActions" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions"></a>

```go
func EnabledActions() *[]*string
```

- *Type:* *[]*string

---

##### `SupportedConnectorModes`<sup>Required</sup> <a name="SupportedConnectorModes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes"></a>

```go
func SupportedConnectorModes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineDataConnectorBapConfig
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a>

---


### GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.NewGoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get"></a>

```go
func Get(index *f64) GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.NewGoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineDataConnectorDestinationConfigsList <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.NewGoogleDiscoveryEngineDataConnectorDestinationConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDiscoveryEngineDataConnectorDestinationConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.get"></a>

```go
func Get(index *f64) GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.NewGoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams">ResetParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams"></a>

```go
func ResetParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput">ParamsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params">Params</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations"></a>

```go
func Destinations() GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput"></a>

```go
func ParamsInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params"></a>

```go
func Params() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineDataConnectorEntitiesList <a name="GoogleDiscoveryEngineDataConnectorEntitiesList" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.NewGoogleDiscoveryEngineDataConnectorEntitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDiscoveryEngineDataConnectorEntitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.get"></a>

```go
func Get(index *f64) GoogleDiscoveryEngineDataConnectorEntitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineDataConnectorEntitiesOutputReference <a name="GoogleDiscoveryEngineDataConnectorEntitiesOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.NewGoogleDiscoveryEngineDataConnectorEntitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDiscoveryEngineDataConnectorEntitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName">ResetEntityName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings">ResetKeyPropertyMappings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetParams">ResetParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityName` <a name="ResetEntityName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName"></a>

```go
func ResetEntityName()
```

##### `ResetKeyPropertyMappings` <a name="ResetKeyPropertyMappings" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings"></a>

```go
func ResetKeyPropertyMappings()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetParams"></a>

```go
func ResetParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore">DataStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput">EntityNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput">KeyPropertyMappingsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput">ParamsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName">EntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings">KeyPropertyMappings</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.params">Params</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore"></a>

```go
func DataStore() *string
```

- *Type:* *string

---

##### `EntityNameInput`<sup>Optional</sup> <a name="EntityNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput"></a>

```go
func EntityNameInput() *string
```

- *Type:* *string

---

##### `KeyPropertyMappingsInput`<sup>Optional</sup> <a name="KeyPropertyMappingsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput"></a>

```go
func KeyPropertyMappingsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput"></a>

```go
func ParamsInput() *string
```

- *Type:* *string

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName"></a>

```go
func EntityName() *string
```

- *Type:* *string

---

##### `KeyPropertyMappings`<sup>Required</sup> <a name="KeyPropertyMappings" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings"></a>

```go
func KeyPropertyMappings() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.params"></a>

```go
func Params() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDiscoveryEngineDataConnectorErrorsList <a name="GoogleDiscoveryEngineDataConnectorErrorsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.NewGoogleDiscoveryEngineDataConnectorErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDiscoveryEngineDataConnectorErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.get"></a>

```go
func Get(index *f64) GoogleDiscoveryEngineDataConnectorErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleDiscoveryEngineDataConnectorErrorsOutputReference <a name="GoogleDiscoveryEngineDataConnectorErrorsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.NewGoogleDiscoveryEngineDataConnectorErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDiscoveryEngineDataConnectorErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors">GoogleDiscoveryEngineDataConnectorErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDiscoveryEngineDataConnectorErrors
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors">GoogleDiscoveryEngineDataConnectorErrors</a>

---


### GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference <a name="GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-googlebeta-go/googlebeta/v19/googlediscoveryenginedataconnector"

googlediscoveryenginedataconnector.NewGoogleDiscoveryEngineDataConnectorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



