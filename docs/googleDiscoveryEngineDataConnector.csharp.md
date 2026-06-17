# `googleDiscoveryEngineDataConnector` Submodule <a name="`googleDiscoveryEngineDataConnector` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineDataConnector <a name="GoogleDiscoveryEngineDataConnector" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector google_discovery_engine_data_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnector(Construct Scope, string Id, GoogleDiscoveryEngineDataConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig">GoogleDiscoveryEngineDataConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActionConfig` <a name="PutActionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putActionConfig"></a>

```csharp
private void PutActionConfig(GoogleDiscoveryEngineDataConnectorActionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putActionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a>

---

##### `PutBapConfig` <a name="PutBapConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putBapConfig"></a>

```csharp
private void PutBapConfig(GoogleDiscoveryEngineDataConnectorBapConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putBapConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a>

---

##### `PutDestinationConfigs` <a name="PutDestinationConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putDestinationConfigs"></a>

```csharp
private void PutDestinationConfigs(IResolvable|GoogleDiscoveryEngineDataConnectorDestinationConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putDestinationConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>[]

---

##### `PutEntities` <a name="PutEntities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putEntities"></a>

```csharp
private void PutEntities(IResolvable|GoogleDiscoveryEngineDataConnectorEntities[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putEntities.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDiscoveryEngineDataConnectorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a>

---

##### `ResetActionConfig` <a name="ResetActionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetActionConfig"></a>

```csharp
private void ResetActionConfig()
```

##### `ResetAutoRunDisabled` <a name="ResetAutoRunDisabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetAutoRunDisabled"></a>

```csharp
private void ResetAutoRunDisabled()
```

##### `ResetBapConfig` <a name="ResetBapConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetBapConfig"></a>

```csharp
private void ResetBapConfig()
```

##### `ResetConnectorModes` <a name="ResetConnectorModes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetConnectorModes"></a>

```csharp
private void ResetConnectorModes()
```

##### `ResetDataSourceVersion` <a name="ResetDataSourceVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDataSourceVersion"></a>

```csharp
private void ResetDataSourceVersion()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDestinationConfigs` <a name="ResetDestinationConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetDestinationConfigs"></a>

```csharp
private void ResetDestinationConfigs()
```

##### `ResetEntities` <a name="ResetEntities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetEntities"></a>

```csharp
private void ResetEntities()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncrementalRefreshInterval` <a name="ResetIncrementalRefreshInterval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetIncrementalRefreshInterval"></a>

```csharp
private void ResetIncrementalRefreshInterval()
```

##### `ResetIncrementalSyncDisabled` <a name="ResetIncrementalSyncDisabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetIncrementalSyncDisabled"></a>

```csharp
private void ResetIncrementalSyncDisabled()
```

##### `ResetJsonParams` <a name="ResetJsonParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetJsonParams"></a>

```csharp
private void ResetJsonParams()
```

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetStaticIpEnabled` <a name="ResetStaticIpEnabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetStaticIpEnabled"></a>

```csharp
private void ResetStaticIpEnabled()
```

##### `ResetSyncMode` <a name="ResetSyncMode" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetSyncMode"></a>

```csharp
private void ResetSyncMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
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

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineDataConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineDataConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineDataConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDiscoveryEngineDataConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineDataConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineDataConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineDataConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionConfig">ActionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference">GoogleDiscoveryEngineDataConnectorActionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionState">ActionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.bapConfig">BapConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference">GoogleDiscoveryEngineDataConnectorBapConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.blockingReasons">BlockingReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.destinationConfigs">DestinationConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList">GoogleDiscoveryEngineDataConnectorDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.entities">Entities</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList">GoogleDiscoveryEngineDataConnectorEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList">GoogleDiscoveryEngineDataConnectorErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.lastSyncTime">LastSyncTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.latestPauseTime">LatestPauseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.privateConnectivityProjectId">PrivateConnectivityProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.realtimeState">RealtimeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpAddresses">StaticIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference">GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionConfigInput">ActionConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.autoRunDisabledInput">AutoRunDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.bapConfigInput">BapConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionDisplayNameInput">CollectionDisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorModesInput">ConnectorModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceInput">DataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceVersionInput">DataSourceVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.destinationConfigsInput">DestinationConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.entitiesInput">EntitiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput">IncrementalRefreshIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalSyncDisabledInput">IncrementalSyncDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.jsonParamsInput">JsonParamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.paramsInput">ParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.refreshIntervalInput">RefreshIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpEnabledInput">StaticIpEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.syncModeInput">SyncModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.autoRunDisabled">AutoRunDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionDisplayName">CollectionDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorModes">ConnectorModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceVersion">DataSourceVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalRefreshInterval">IncrementalRefreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalSyncDisabled">IncrementalSyncDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.jsonParams">JsonParams</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.params">Params</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.refreshInterval">RefreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpEnabled">StaticIpEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.syncMode">SyncMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActionConfig`<sup>Required</sup> <a name="ActionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionConfig"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorActionConfigOutputReference ActionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference">GoogleDiscoveryEngineDataConnectorActionConfigOutputReference</a>

---

##### `ActionState`<sup>Required</sup> <a name="ActionState" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionState"></a>

```csharp
public string ActionState { get; }
```

- *Type:* string

---

##### `BapConfig`<sup>Required</sup> <a name="BapConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.bapConfig"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorBapConfigOutputReference BapConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference">GoogleDiscoveryEngineDataConnectorBapConfigOutputReference</a>

---

##### `BlockingReasons`<sup>Required</sup> <a name="BlockingReasons" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.blockingReasons"></a>

```csharp
public string[] BlockingReasons { get; }
```

- *Type:* string[]

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DestinationConfigs`<sup>Required</sup> <a name="DestinationConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.destinationConfigs"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorDestinationConfigsList DestinationConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList">GoogleDiscoveryEngineDataConnectorDestinationConfigsList</a>

---

##### `Entities`<sup>Required</sup> <a name="Entities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.entities"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorEntitiesList Entities { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList">GoogleDiscoveryEngineDataConnectorEntitiesList</a>

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.errors"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorErrorsList Errors { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList">GoogleDiscoveryEngineDataConnectorErrorsList</a>

---

##### `LastSyncTime`<sup>Required</sup> <a name="LastSyncTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.lastSyncTime"></a>

```csharp
public string LastSyncTime { get; }
```

- *Type:* string

---

##### `LatestPauseTime`<sup>Required</sup> <a name="LatestPauseTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.latestPauseTime"></a>

```csharp
public string LatestPauseTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateConnectivityProjectId`<sup>Required</sup> <a name="PrivateConnectivityProjectId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.privateConnectivityProjectId"></a>

```csharp
public string PrivateConnectivityProjectId { get; }
```

- *Type:* string

---

##### `RealtimeState`<sup>Required</sup> <a name="RealtimeState" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.realtimeState"></a>

```csharp
public string RealtimeState { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StaticIpAddresses`<sup>Required</sup> <a name="StaticIpAddresses" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpAddresses"></a>

```csharp
public string[] StaticIpAddresses { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference">GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ActionConfigInput`<sup>Optional</sup> <a name="ActionConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.actionConfigInput"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorActionConfig ActionConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a>

---

##### `AutoRunDisabledInput`<sup>Optional</sup> <a name="AutoRunDisabledInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.autoRunDisabledInput"></a>

```csharp
public bool|IResolvable AutoRunDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BapConfigInput`<sup>Optional</sup> <a name="BapConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.bapConfigInput"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorBapConfig BapConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a>

---

##### `CollectionDisplayNameInput`<sup>Optional</sup> <a name="CollectionDisplayNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionDisplayNameInput"></a>

```csharp
public string CollectionDisplayNameInput { get; }
```

- *Type:* string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `ConnectorModesInput`<sup>Optional</sup> <a name="ConnectorModesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorModesInput"></a>

```csharp
public string[] ConnectorModesInput { get; }
```

- *Type:* string[]

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceInput"></a>

```csharp
public string DataSourceInput { get; }
```

- *Type:* string

---

##### `DataSourceVersionInput`<sup>Optional</sup> <a name="DataSourceVersionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceVersionInput"></a>

```csharp
public double DataSourceVersionInput { get; }
```

- *Type:* double

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DestinationConfigsInput`<sup>Optional</sup> <a name="DestinationConfigsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.destinationConfigsInput"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorDestinationConfigs[] DestinationConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>[]

---

##### `EntitiesInput`<sup>Optional</sup> <a name="EntitiesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.entitiesInput"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorEntities[] EntitiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncrementalRefreshIntervalInput`<sup>Optional</sup> <a name="IncrementalRefreshIntervalInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalRefreshIntervalInput"></a>

```csharp
public string IncrementalRefreshIntervalInput { get; }
```

- *Type:* string

---

##### `IncrementalSyncDisabledInput`<sup>Optional</sup> <a name="IncrementalSyncDisabledInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalSyncDisabledInput"></a>

```csharp
public bool|IResolvable IncrementalSyncDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `JsonParamsInput`<sup>Optional</sup> <a name="JsonParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.jsonParamsInput"></a>

```csharp
public string JsonParamsInput { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.paramsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RefreshIntervalInput`<sup>Optional</sup> <a name="RefreshIntervalInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.refreshIntervalInput"></a>

```csharp
public string RefreshIntervalInput { get; }
```

- *Type:* string

---

##### `StaticIpEnabledInput`<sup>Optional</sup> <a name="StaticIpEnabledInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpEnabledInput"></a>

```csharp
public bool|IResolvable StaticIpEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SyncModeInput`<sup>Optional</sup> <a name="SyncModeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.syncModeInput"></a>

```csharp
public string SyncModeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a>

---

##### `AutoRunDisabled`<sup>Required</sup> <a name="AutoRunDisabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.autoRunDisabled"></a>

```csharp
public bool|IResolvable AutoRunDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CollectionDisplayName`<sup>Required</sup> <a name="CollectionDisplayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionDisplayName"></a>

```csharp
public string CollectionDisplayName { get; }
```

- *Type:* string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `ConnectorModes`<sup>Required</sup> <a name="ConnectorModes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.connectorModes"></a>

```csharp
public string[] ConnectorModes { get; }
```

- *Type:* string[]

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `DataSourceVersion`<sup>Required</sup> <a name="DataSourceVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.dataSourceVersion"></a>

```csharp
public double DataSourceVersion { get; }
```

- *Type:* double

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncrementalRefreshInterval`<sup>Required</sup> <a name="IncrementalRefreshInterval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalRefreshInterval"></a>

```csharp
public string IncrementalRefreshInterval { get; }
```

- *Type:* string

---

##### `IncrementalSyncDisabled`<sup>Required</sup> <a name="IncrementalSyncDisabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.incrementalSyncDisabled"></a>

```csharp
public bool|IResolvable IncrementalSyncDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `JsonParams`<sup>Required</sup> <a name="JsonParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.jsonParams"></a>

```csharp
public string JsonParams { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.params"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Params { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.refreshInterval"></a>

```csharp
public string RefreshInterval { get; }
```

- *Type:* string

---

##### `StaticIpEnabled`<sup>Required</sup> <a name="StaticIpEnabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.staticIpEnabled"></a>

```csharp
public bool|IResolvable StaticIpEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SyncMode`<sup>Required</sup> <a name="SyncMode" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.syncMode"></a>

```csharp
public string SyncMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineDataConnectorActionConfig <a name="GoogleDiscoveryEngineDataConnectorActionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorActionConfig {
    System.Collections.Generic.IDictionary<string, string> ActionParams = null,
    bool|IResolvable CreateBapConnection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.property.actionParams">ActionParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Params needed to configure the actions in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.property.createBapConnection">CreateBapConnection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to create a BAP (Business Application Platform) connection for this action connector. |

---

##### `ActionParams`<sup>Optional</sup> <a name="ActionParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.property.actionParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ActionParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Params needed to configure the actions in the format of String-to-String (Key, Value) pairs.

Contains connection
credentials and configuration for the action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#action_params GoogleDiscoveryEngineDataConnector#action_params}

---

##### `CreateBapConnection`<sup>Optional</sup> <a name="CreateBapConnection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig.property.createBapConnection"></a>

```csharp
public bool|IResolvable CreateBapConnection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to create a BAP (Business Application Platform) connection for this action connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#create_bap_connection GoogleDiscoveryEngineDataConnector#create_bap_connection}

---

### GoogleDiscoveryEngineDataConnectorBapConfig <a name="GoogleDiscoveryEngineDataConnectorBapConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorBapConfig {
    string[] EnabledActions = null,
    string[] SupportedConnectorModes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.property.enabledActions">EnabledActions</a></code> | <code>string[]</code> | The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes">SupportedConnectorModes</a></code> | <code>string[]</code> | The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'. |

---

##### `EnabledActions`<sup>Optional</sup> <a name="EnabledActions" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.property.enabledActions"></a>

```csharp
public string[] EnabledActions { get; set; }
```

- *Type:* string[]

The list of enabled actions for this connector. Supported values include: 'create_issue', 'update_issue', 'change_issue_status', 'create_comment', 'update_comment', 'upload_attachment'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#enabled_actions GoogleDiscoveryEngineDataConnector#enabled_actions}

---

##### `SupportedConnectorModes`<sup>Optional</sup> <a name="SupportedConnectorModes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig.property.supportedConnectorModes"></a>

```csharp
public string[] SupportedConnectorModes { get; set; }
```

- *Type:* string[]

The connector modes supported by the BAP configuration. The possible values include: 'ACTIONS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#supported_connector_modes GoogleDiscoveryEngineDataConnector#supported_connector_modes}

---

### GoogleDiscoveryEngineDataConnectorConfig <a name="GoogleDiscoveryEngineDataConnectorConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CollectionDisplayName,
    string CollectionId,
    string DataSource,
    string Location,
    string RefreshInterval,
    GoogleDiscoveryEngineDataConnectorActionConfig ActionConfig = null,
    bool|IResolvable AutoRunDisabled = null,
    GoogleDiscoveryEngineDataConnectorBapConfig BapConfig = null,
    string[] ConnectorModes = null,
    double DataSourceVersion = null,
    string DeletionPolicy = null,
    IResolvable|GoogleDiscoveryEngineDataConnectorDestinationConfigs[] DestinationConfigs = null,
    IResolvable|GoogleDiscoveryEngineDataConnectorEntities[] Entities = null,
    string Id = null,
    string IncrementalRefreshInterval = null,
    bool|IResolvable IncrementalSyncDisabled = null,
    string JsonParams = null,
    string KmsKeyName = null,
    System.Collections.Generic.IDictionary<string, string> Params = null,
    string Project = null,
    bool|IResolvable StaticIpEnabled = null,
    string SyncMode = null,
    GoogleDiscoveryEngineDataConnectorTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.collectionDisplayName">CollectionDisplayName</a></code> | <code>string</code> | The display name of the Collection. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | The ID to use for the Collection, which will become the final component of the Collection's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dataSource">DataSource</a></code> | <code>string</code> | The identifier for the data source. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.refreshInterval">RefreshInterval</a></code> | <code>string</code> | The refresh interval for data sync. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.actionConfig">ActionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a></code> | action_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.autoRunDisabled">AutoRunDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether full syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.bapConfig">BapConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a></code> | bap_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.connectorModes">ConnectorModes</a></code> | <code>string[]</code> | The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dataSourceVersion">DataSourceVersion</a></code> | <code>double</code> | The version of the data source. For example, '3' for Jira v3. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.destinationConfigs">DestinationConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>[]</code> | destination_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.entities">Entities</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>[]</code> | entities block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#id GoogleDiscoveryEngineDataConnector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval">IncrementalRefreshInterval</a></code> | <code>string</code> | The refresh interval specifically for incremental data syncs. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled">IncrementalSyncDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether incremental syncs are paused for this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.jsonParams">JsonParams</a></code> | <code>string</code> | Params needed to access the source in the format of json string. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The KMS key to be used to protect the DataStores managed by this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.params">Params</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Params needed to access the source in the format of String-to-String (Key, Value) pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#project GoogleDiscoveryEngineDataConnector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.staticIpEnabled">StaticIpEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether customer has enabled static IP addresses for this connector. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.syncMode">SyncMode</a></code> | <code>string</code> | The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CollectionDisplayName`<sup>Required</sup> <a name="CollectionDisplayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.collectionDisplayName"></a>

```csharp
public string CollectionDisplayName { get; set; }
```

- *Type:* string

The display name of the Collection.

Should be human readable, used to display collections in the Console
Dashboard. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#collection_display_name GoogleDiscoveryEngineDataConnector#collection_display_name}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

The ID to use for the Collection, which will become the final component of the Collection's resource name.

A new Collection is created as
part of the DataConnector setup. DataConnector is a singleton
resource under Collection, managing all DataStores of the Collection.
This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
standard with a length limit of 63 characters. Otherwise, an
INVALID_ARGUMENT error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#collection_id GoogleDiscoveryEngineDataConnector#collection_id}

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dataSource"></a>

```csharp
public string DataSource { get; set; }
```

- *Type:* string

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#data_source GoogleDiscoveryEngineDataConnector#data_source}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#location GoogleDiscoveryEngineDataConnector#location}

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.refreshInterval"></a>

```csharp
public string RefreshInterval { get; set; }
```

- *Type:* string

The refresh interval for data sync.

If duration is set to 0, the data will
be synced in real time. The streaming feature is not supported yet. The
minimum is 30 minutes and maximum is 7 days. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#refresh_interval GoogleDiscoveryEngineDataConnector#refresh_interval}

---

##### `ActionConfig`<sup>Optional</sup> <a name="ActionConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.actionConfig"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorActionConfig ActionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a>

action_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#action_config GoogleDiscoveryEngineDataConnector#action_config}

---

##### `AutoRunDisabled`<sup>Optional</sup> <a name="AutoRunDisabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.autoRunDisabled"></a>

```csharp
public bool|IResolvable AutoRunDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether full syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#auto_run_disabled GoogleDiscoveryEngineDataConnector#auto_run_disabled}

---

##### `BapConfig`<sup>Optional</sup> <a name="BapConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.bapConfig"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorBapConfig BapConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a>

bap_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#bap_config GoogleDiscoveryEngineDataConnector#bap_config}

---

##### `ConnectorModes`<sup>Optional</sup> <a name="ConnectorModes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.connectorModes"></a>

```csharp
public string[] ConnectorModes { get; set; }
```

- *Type:* string[]

The modes enabled for this connector. The possible value can be: 'DATA_INGESTION', 'ACTIONS', 'FEDERATED' 'EUA', 'FEDERATED_AND_EUA'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#connector_modes GoogleDiscoveryEngineDataConnector#connector_modes}

---

##### `DataSourceVersion`<sup>Optional</sup> <a name="DataSourceVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.dataSourceVersion"></a>

```csharp
public double DataSourceVersion { get; set; }
```

- *Type:* double

The version of the data source. For example, '3' for Jira v3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#data_source_version GoogleDiscoveryEngineDataConnector#data_source_version}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#deletion_policy GoogleDiscoveryEngineDataConnector#deletion_policy}

---

##### `DestinationConfigs`<sup>Optional</sup> <a name="DestinationConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.destinationConfigs"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorDestinationConfigs[] DestinationConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>[]

destination_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#destination_configs GoogleDiscoveryEngineDataConnector#destination_configs}

---

##### `Entities`<sup>Optional</sup> <a name="Entities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.entities"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorEntities[] Entities { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>[]

entities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#entities GoogleDiscoveryEngineDataConnector#entities}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#id GoogleDiscoveryEngineDataConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncrementalRefreshInterval`<sup>Optional</sup> <a name="IncrementalRefreshInterval" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.incrementalRefreshInterval"></a>

```csharp
public string IncrementalRefreshInterval { get; set; }
```

- *Type:* string

The refresh interval specifically for incremental data syncs.

If unset,
incremental syncs will use the default from env, set to 3hrs.
The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P
connectors. When the refresh interval is
set to the same value as the incremental refresh interval, incremental
sync will be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#incremental_refresh_interval GoogleDiscoveryEngineDataConnector#incremental_refresh_interval}

---

##### `IncrementalSyncDisabled`<sup>Optional</sup> <a name="IncrementalSyncDisabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.incrementalSyncDisabled"></a>

```csharp
public bool|IResolvable IncrementalSyncDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether incremental syncs are paused for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#incremental_sync_disabled GoogleDiscoveryEngineDataConnector#incremental_sync_disabled}

---

##### `JsonParams`<sup>Optional</sup> <a name="JsonParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.jsonParams"></a>

```csharp
public string JsonParams { get; set; }
```

- *Type:* string

Params needed to access the source in the format of json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#json_params GoogleDiscoveryEngineDataConnector#json_params}

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The KMS key to be used to protect the DataStores managed by this connector.

Must be set for requests that need to comply with CMEK Org Policy
protections.
If this field is set and processed successfully, the DataStores created by
this connector will be protected by the KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#kms_key_name GoogleDiscoveryEngineDataConnector#kms_key_name}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.params"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Params { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Params needed to access the source in the format of String-to-String (Key, Value) pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#params GoogleDiscoveryEngineDataConnector#params}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#project GoogleDiscoveryEngineDataConnector#project}.

---

##### `StaticIpEnabled`<sup>Optional</sup> <a name="StaticIpEnabled" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.staticIpEnabled"></a>

```csharp
public bool|IResolvable StaticIpEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether customer has enabled static IP addresses for this connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#static_ip_enabled GoogleDiscoveryEngineDataConnector#static_ip_enabled}

---

##### `SyncMode`<sup>Optional</sup> <a name="SyncMode" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.syncMode"></a>

```csharp
public string SyncMode { get; set; }
```

- *Type:* string

The data synchronization mode supported by the data connector. The possible value can be: 'PERIODIC', 'STREAMING'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#sync_mode GoogleDiscoveryEngineDataConnector#sync_mode}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorConfig.property.timeouts"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#timeouts GoogleDiscoveryEngineDataConnector#timeouts}

---

### GoogleDiscoveryEngineDataConnectorDestinationConfigs <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorDestinationConfigs {
    IResolvable|GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations[] Destinations = null,
    string Key = null,
    string Params = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]</code> | destinations block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.key">Key</a></code> | <code>string</code> | The key of the destination configuration, for example 'url'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.params">Params</a></code> | <code>string</code> | Additional parameters for this destination config in structured json format. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.destinations"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#destinations GoogleDiscoveryEngineDataConnector#destinations}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the destination configuration, for example 'url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#key GoogleDiscoveryEngineDataConnector#key}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs.property.params"></a>

```csharp
public string Params { get; set; }
```

- *Type:* string

Additional parameters for this destination config in structured json format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#params GoogleDiscoveryEngineDataConnector#params}

---

### GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations {
    string Host = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host">Host</a></code> | <code>string</code> | The host of the destination, for example 'https://example.atlassian.net'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port">Port</a></code> | <code>double</code> | Target port number accepted by the destination. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The host of the destination, for example 'https://example.atlassian.net'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#host GoogleDiscoveryEngineDataConnector#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Target port number accepted by the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#port GoogleDiscoveryEngineDataConnector#port}

---

### GoogleDiscoveryEngineDataConnectorEntities <a name="GoogleDiscoveryEngineDataConnectorEntities" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorEntities {
    string EntityName = null,
    System.Collections.Generic.IDictionary<string, string> KeyPropertyMappings = null,
    string Params = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.entityName">EntityName</a></code> | <code>string</code> | The name of the entity. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.keyPropertyMappings">KeyPropertyMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Attributes for indexing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.params">Params</a></code> | <code>string</code> | The parameters for the entity to facilitate data ingestion. |

---

##### `EntityName`<sup>Optional</sup> <a name="EntityName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.entityName"></a>

```csharp
public string EntityName { get; set; }
```

- *Type:* string

The name of the entity.

Supported values by data source:

* Salesforce: 'Lead', 'Opportunity', 'Contact', 'Account', 'Case', 'Contract', 'Campaign'
* Jira: project, issue, attachment, comment, worklog
* Confluence: 'Content', 'Space'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#entity_name GoogleDiscoveryEngineDataConnector#entity_name}

---

##### `KeyPropertyMappings`<sup>Optional</sup> <a name="KeyPropertyMappings" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.keyPropertyMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KeyPropertyMappings { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Attributes for indexing.

Key: Field name.
Value: The key property to map a field to, such as 'title', and
'description'. Supported key properties:

* 'title': The title for data record. This would be displayed on search
  results.
* 'description': The description for data record. This would be displayed
  on search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#key_property_mappings GoogleDiscoveryEngineDataConnector#key_property_mappings}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities.property.params"></a>

```csharp
public string Params { get; set; }
```

- *Type:* string

The parameters for the entity to facilitate data ingestion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#params GoogleDiscoveryEngineDataConnector#params}

---

### GoogleDiscoveryEngineDataConnectorErrors <a name="GoogleDiscoveryEngineDataConnectorErrors" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorErrors {

};
```


### GoogleDiscoveryEngineDataConnectorTimeouts <a name="GoogleDiscoveryEngineDataConnectorTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#create GoogleDiscoveryEngineDataConnector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#delete GoogleDiscoveryEngineDataConnector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#update GoogleDiscoveryEngineDataConnector#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#create GoogleDiscoveryEngineDataConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#delete GoogleDiscoveryEngineDataConnector#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_discovery_engine_data_connector#update GoogleDiscoveryEngineDataConnector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineDataConnectorActionConfigOutputReference <a name="GoogleDiscoveryEngineDataConnectorActionConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorActionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionParams` <a name="ResetActionParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resetActionParams"></a>

```csharp
private void ResetActionParams()
```

##### `ResetCreateBapConnection` <a name="ResetCreateBapConnection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.resetCreateBapConnection"></a>

```csharp
private void ResetCreateBapConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured">IsActionConfigured</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput">ActionParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput">CreateBapConnectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams">ActionParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection">CreateBapConnection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsActionConfigured`<sup>Required</sup> <a name="IsActionConfigured" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.isActionConfigured"></a>

```csharp
public IResolvable IsActionConfigured { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ActionParamsInput`<sup>Optional</sup> <a name="ActionParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ActionParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CreateBapConnectionInput`<sup>Optional</sup> <a name="CreateBapConnectionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnectionInput"></a>

```csharp
public bool|IResolvable CreateBapConnectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ActionParams`<sup>Required</sup> <a name="ActionParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.actionParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ActionParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CreateBapConnection`<sup>Required</sup> <a name="CreateBapConnection" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.createBapConnection"></a>

```csharp
public bool|IResolvable CreateBapConnection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorActionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorActionConfig">GoogleDiscoveryEngineDataConnectorActionConfig</a>

---


### GoogleDiscoveryEngineDataConnectorBapConfigOutputReference <a name="GoogleDiscoveryEngineDataConnectorBapConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorBapConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabledActions` <a name="ResetEnabledActions" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resetEnabledActions"></a>

```csharp
private void ResetEnabledActions()
```

##### `ResetSupportedConnectorModes` <a name="ResetSupportedConnectorModes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.resetSupportedConnectorModes"></a>

```csharp
private void ResetSupportedConnectorModes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput">EnabledActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput">SupportedConnectorModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions">EnabledActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes">SupportedConnectorModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledActionsInput`<sup>Optional</sup> <a name="EnabledActionsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActionsInput"></a>

```csharp
public string[] EnabledActionsInput { get; }
```

- *Type:* string[]

---

##### `SupportedConnectorModesInput`<sup>Optional</sup> <a name="SupportedConnectorModesInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModesInput"></a>

```csharp
public string[] SupportedConnectorModesInput { get; }
```

- *Type:* string[]

---

##### `EnabledActions`<sup>Required</sup> <a name="EnabledActions" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.enabledActions"></a>

```csharp
public string[] EnabledActions { get; }
```

- *Type:* string[]

---

##### `SupportedConnectorModes`<sup>Required</sup> <a name="SupportedConnectorModes" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.supportedConnectorModes"></a>

```csharp
public string[] SupportedConnectorModes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorBapConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorBapConfig">GoogleDiscoveryEngineDataConnectorBapConfig</a>

---


### GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get"></a>

```csharp
private GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]

---


### GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>

---


### GoogleDiscoveryEngineDataConnectorDestinationConfigsList <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorDestinationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.get"></a>

```csharp
private GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorDestinationConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>[]

---


### GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference <a name="GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.resetParams"></a>

```csharp
private void ResetParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput">ParamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params">Params</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinations"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.destinationsInput"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations">GoogleDiscoveryEngineDataConnectorDestinationConfigsDestinations</a>[]

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.paramsInput"></a>

```csharp
public string ParamsInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.params"></a>

```csharp
public string Params { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorDestinationConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorDestinationConfigs">GoogleDiscoveryEngineDataConnectorDestinationConfigs</a>

---


### GoogleDiscoveryEngineDataConnectorEntitiesList <a name="GoogleDiscoveryEngineDataConnectorEntitiesList" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorEntitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.get"></a>

```csharp
private GoogleDiscoveryEngineDataConnectorEntitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorEntities[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>[]

---


### GoogleDiscoveryEngineDataConnectorEntitiesOutputReference <a name="GoogleDiscoveryEngineDataConnectorEntitiesOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorEntitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntityName` <a name="ResetEntityName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetEntityName"></a>

```csharp
private void ResetEntityName()
```

##### `ResetKeyPropertyMappings` <a name="ResetKeyPropertyMappings" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetKeyPropertyMappings"></a>

```csharp
private void ResetKeyPropertyMappings()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.resetParams"></a>

```csharp
private void ResetParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore">DataStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput">EntityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput">KeyPropertyMappingsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput">ParamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName">EntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings">KeyPropertyMappings</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.params">Params</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStore`<sup>Required</sup> <a name="DataStore" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.dataStore"></a>

```csharp
public string DataStore { get; }
```

- *Type:* string

---

##### `EntityNameInput`<sup>Optional</sup> <a name="EntityNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.entityNameInput"></a>

```csharp
public string EntityNameInput { get; }
```

- *Type:* string

---

##### `KeyPropertyMappingsInput`<sup>Optional</sup> <a name="KeyPropertyMappingsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappingsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KeyPropertyMappingsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.paramsInput"></a>

```csharp
public string ParamsInput { get; }
```

- *Type:* string

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.entityName"></a>

```csharp
public string EntityName { get; }
```

- *Type:* string

---

##### `KeyPropertyMappings`<sup>Required</sup> <a name="KeyPropertyMappings" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.keyPropertyMappings"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> KeyPropertyMappings { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.params"></a>

```csharp
public string Params { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntitiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorEntities InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorEntities">GoogleDiscoveryEngineDataConnectorEntities</a>

---


### GoogleDiscoveryEngineDataConnectorErrorsList <a name="GoogleDiscoveryEngineDataConnectorErrorsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorErrorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.get"></a>

```csharp
private GoogleDiscoveryEngineDataConnectorErrorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDiscoveryEngineDataConnectorErrorsOutputReference <a name="GoogleDiscoveryEngineDataConnectorErrorsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorErrorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors">GoogleDiscoveryEngineDataConnectorErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrorsOutputReference.property.internalValue"></a>

```csharp
public GoogleDiscoveryEngineDataConnectorErrors InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorErrors">GoogleDiscoveryEngineDataConnectorErrors</a>

---


### GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference <a name="GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDiscoveryEngineDataConnectorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDiscoveryEngineDataConnector.GoogleDiscoveryEngineDataConnectorTimeouts">GoogleDiscoveryEngineDataConnectorTimeouts</a>

---



