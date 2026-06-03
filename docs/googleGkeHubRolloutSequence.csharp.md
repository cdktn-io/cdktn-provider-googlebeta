# `googleGkeHubRolloutSequence` Submodule <a name="`googleGkeHubRolloutSequence` Submodule" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGkeHubRolloutSequence <a name="GoogleGkeHubRolloutSequence" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence google_gke_hub_rollout_sequence}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequence(Construct Scope, string Id, GoogleGkeHubRolloutSequenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig">GoogleGkeHubRolloutSequenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoUpgradeConfig` <a name="PutAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig"></a>

```csharp
private void PutAutoUpgradeConfig(GoogleGkeHubRolloutSequenceAutoUpgradeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putAutoUpgradeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `PutIgnoredClustersSelector` <a name="PutIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector"></a>

```csharp
private void PutIgnoredClustersSelector(GoogleGkeHubRolloutSequenceIgnoredClustersSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putIgnoredClustersSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `PutStages` <a name="PutStages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages"></a>

```csharp
private void PutStages(IResolvable|GoogleGkeHubRolloutSequenceStages[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putStages.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleGkeHubRolloutSequenceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

---

##### `ResetAutoUpgradeConfig` <a name="ResetAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetAutoUpgradeConfig"></a>

```csharp
private void ResetAutoUpgradeConfig()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoredClustersSelector` <a name="ResetIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetIgnoredClustersSelector"></a>

```csharp
private void ResetIgnoredClustersSelector()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
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

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGkeHubRolloutSequence.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGkeHubRolloutSequence.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGkeHubRolloutSequence.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGkeHubRolloutSequence.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleGkeHubRolloutSequence resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGkeHubRolloutSequence to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGkeHubRolloutSequence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGkeHubRolloutSequence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfig">AutoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelector">IgnoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stages">Stages</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList">GoogleGkeHubRolloutSequenceStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference">GoogleGkeHubRolloutSequenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfigInput">AutoUpgradeConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelectorInput">IgnoredClustersSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceIdInput">RolloutSequenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stagesInput">StagesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceId">RolloutSequenceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoUpgradeConfig`<sup>Required</sup> <a name="AutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfig"></a>

```csharp
public GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference AutoUpgradeConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `IgnoredClustersSelector`<sup>Required</sup> <a name="IgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelector"></a>

```csharp
public GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference IgnoredClustersSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference">GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stages"></a>

```csharp
public GoogleGkeHubRolloutSequenceStagesList Stages { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList">GoogleGkeHubRolloutSequenceStagesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeouts"></a>

```csharp
public GoogleGkeHubRolloutSequenceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference">GoogleGkeHubRolloutSequenceTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AutoUpgradeConfigInput`<sup>Optional</sup> <a name="AutoUpgradeConfigInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.autoUpgradeConfigInput"></a>

```csharp
public GoogleGkeHubRolloutSequenceAutoUpgradeConfig AutoUpgradeConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoredClustersSelectorInput`<sup>Optional</sup> <a name="IgnoredClustersSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.ignoredClustersSelectorInput"></a>

```csharp
public GoogleGkeHubRolloutSequenceIgnoredClustersSelector IgnoredClustersSelectorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RolloutSequenceIdInput`<sup>Optional</sup> <a name="RolloutSequenceIdInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceIdInput"></a>

```csharp
public string RolloutSequenceIdInput { get; }
```

- *Type:* string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.stagesInput"></a>

```csharp
public IResolvable|GoogleGkeHubRolloutSequenceStages[] StagesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleGkeHubRolloutSequenceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RolloutSequenceId`<sup>Required</sup> <a name="RolloutSequenceId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.rolloutSequenceId"></a>

```csharp
public string RolloutSequenceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequence.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGkeHubRolloutSequenceAutoUpgradeConfig <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceAutoUpgradeConfig {
    GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope RolloutCreationScope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope">RolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | rollout_creation_scope block. |

---

##### `RolloutCreationScope`<sup>Optional</sup> <a name="RolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig.property.rolloutCreationScope"></a>

```csharp
public GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope RolloutCreationScope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

rollout_creation_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#rollout_creation_scope GoogleGkeHubRolloutSequence#rollout_creation_scope}

---

### GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope {
    string[] UpgradeTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes">UpgradeTypes</a></code> | <code>string[]</code> | The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'. |

---

##### `UpgradeTypes`<sup>Optional</sup> <a name="UpgradeTypes" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope.property.upgradeTypes"></a>

```csharp
public string[] UpgradeTypes { get; set; }
```

- *Type:* string[]

The list of enabled upgrade types. Current valid values are 'CONTROL_PLANE_MINOR', 'CONTROL_PLANE_PATCH', 'NODE_MINOR', and 'NODE_PATCH'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#upgrade_types GoogleGkeHubRolloutSequence#upgrade_types}

---

### GoogleGkeHubRolloutSequenceConfig <a name="GoogleGkeHubRolloutSequenceConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RolloutSequenceId,
    IResolvable|GoogleGkeHubRolloutSequenceStages[] Stages,
    GoogleGkeHubRolloutSequenceAutoUpgradeConfig AutoUpgradeConfig = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    GoogleGkeHubRolloutSequenceIgnoredClustersSelector IgnoredClustersSelector = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleGkeHubRolloutSequenceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.rolloutSequenceId">RolloutSequenceId</a></code> | <code>string</code> | The user-provided identifier of the RolloutSequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.stages">Stages</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]</code> | stages block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.autoUpgradeConfig">AutoUpgradeConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | auto_upgrade_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human readable display name of the Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.ignoredClustersSelector">IgnoredClustersSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | ignored_clusters_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels for this Rollout Sequence. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RolloutSequenceId`<sup>Required</sup> <a name="RolloutSequenceId" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.rolloutSequenceId"></a>

```csharp
public string RolloutSequenceId { get; set; }
```

- *Type:* string

The user-provided identifier of the RolloutSequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#rollout_sequence_id GoogleGkeHubRolloutSequence#rollout_sequence_id}

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.stages"></a>

```csharp
public IResolvable|GoogleGkeHubRolloutSequenceStages[] Stages { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]

stages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#stages GoogleGkeHubRolloutSequence#stages}

---

##### `AutoUpgradeConfig`<sup>Optional</sup> <a name="AutoUpgradeConfig" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.autoUpgradeConfig"></a>

```csharp
public GoogleGkeHubRolloutSequenceAutoUpgradeConfig AutoUpgradeConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

auto_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#auto_upgrade_config GoogleGkeHubRolloutSequence#auto_upgrade_config}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#deletion_policy GoogleGkeHubRolloutSequence#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human readable display name of the Rollout Sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#display_name GoogleGkeHubRolloutSequence#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#id GoogleGkeHubRolloutSequence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoredClustersSelector`<sup>Optional</sup> <a name="IgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.ignoredClustersSelector"></a>

```csharp
public GoogleGkeHubRolloutSequenceIgnoredClustersSelector IgnoredClustersSelector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

ignored_clusters_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#ignored_clusters_selector GoogleGkeHubRolloutSequence#ignored_clusters_selector}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels for this Rollout Sequence.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#labels GoogleGkeHubRolloutSequence#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#project GoogleGkeHubRolloutSequence#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceConfig.property.timeouts"></a>

```csharp
public GoogleGkeHubRolloutSequenceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#timeouts GoogleGkeHubRolloutSequence#timeouts}

---

### GoogleGkeHubRolloutSequenceIgnoredClustersSelector <a name="GoogleGkeHubRolloutSequenceIgnoredClustersSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceIgnoredClustersSelector {
    string LabelSelector
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector">LabelSelector</a></code> | <code>string</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector.property.labelSelector"></a>

```csharp
public string LabelSelector { get; set; }
```

- *Type:* string

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#label_selector GoogleGkeHubRolloutSequence#label_selector}

---

### GoogleGkeHubRolloutSequenceStages <a name="GoogleGkeHubRolloutSequenceStages" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceStages {
    string[] FleetProjects,
    GoogleGkeHubRolloutSequenceStagesClusterSelector ClusterSelector = null,
    string SoakDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.fleetProjects">FleetProjects</a></code> | <code>string[]</code> | List of Fleet projects to select the clusters from. Expected format: projects/{project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.clusterSelector">ClusterSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | cluster_selector block. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.soakDuration">SoakDuration</a></code> | <code>string</code> | Soak time after upgrading all the clusters in the stage, specified in seconds. |

---

##### `FleetProjects`<sup>Required</sup> <a name="FleetProjects" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.fleetProjects"></a>

```csharp
public string[] FleetProjects { get; set; }
```

- *Type:* string[]

List of Fleet projects to select the clusters from. Expected format: projects/{project}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#fleet_projects GoogleGkeHubRolloutSequence#fleet_projects}

---

##### `ClusterSelector`<sup>Optional</sup> <a name="ClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.clusterSelector"></a>

```csharp
public GoogleGkeHubRolloutSequenceStagesClusterSelector ClusterSelector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

cluster_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#cluster_selector GoogleGkeHubRolloutSequence#cluster_selector}

---

##### `SoakDuration`<sup>Optional</sup> <a name="SoakDuration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages.property.soakDuration"></a>

```csharp
public string SoakDuration { get; set; }
```

- *Type:* string

Soak time after upgrading all the clusters in the stage, specified in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#soak_duration GoogleGkeHubRolloutSequence#soak_duration}

---

### GoogleGkeHubRolloutSequenceStagesClusterSelector <a name="GoogleGkeHubRolloutSequenceStagesClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceStagesClusterSelector {
    string LabelSelector
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.property.labelSelector">LabelSelector</a></code> | <code>string</code> | The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels. |

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector.property.labelSelector"></a>

```csharp
public string LabelSelector { get; set; }
```

- *Type:* string

The label selector must be a valid CEL (Common Expression Language) expression which evaluates resource.labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#label_selector GoogleGkeHubRolloutSequence#label_selector}

---

### GoogleGkeHubRolloutSequenceTimeouts <a name="GoogleGkeHubRolloutSequenceTimeouts" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#create GoogleGkeHubRolloutSequence#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#delete GoogleGkeHubRolloutSequence#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#update GoogleGkeHubRolloutSequence#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#create GoogleGkeHubRolloutSequence#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#delete GoogleGkeHubRolloutSequence#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_gke_hub_rollout_sequence#update GoogleGkeHubRolloutSequence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRolloutCreationScope` <a name="PutRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope"></a>

```csharp
private void PutRolloutCreationScope(GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.putRolloutCreationScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `ResetRolloutCreationScope` <a name="ResetRolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.resetRolloutCreationScope"></a>

```csharp
private void ResetRolloutCreationScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope">RolloutCreationScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput">RolloutCreationScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RolloutCreationScope`<sup>Required</sup> <a name="RolloutCreationScope" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScope"></a>

```csharp
public GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference RolloutCreationScope { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference</a>

---

##### `RolloutCreationScopeInput`<sup>Optional</sup> <a name="RolloutCreationScopeInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.rolloutCreationScopeInput"></a>

```csharp
public GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope RolloutCreationScopeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubRolloutSequenceAutoUpgradeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfig">GoogleGkeHubRolloutSequenceAutoUpgradeConfig</a>

---


### GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference <a name="GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUpgradeTypes` <a name="ResetUpgradeTypes" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.resetUpgradeTypes"></a>

```csharp
private void ResetUpgradeTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput">UpgradeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes">UpgradeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UpgradeTypesInput`<sup>Optional</sup> <a name="UpgradeTypesInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypesInput"></a>

```csharp
public string[] UpgradeTypesInput { get; }
```

- *Type:* string[]

---

##### `UpgradeTypes`<sup>Required</sup> <a name="UpgradeTypes" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.upgradeTypes"></a>

```csharp
public string[] UpgradeTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScopeOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope">GoogleGkeHubRolloutSequenceAutoUpgradeConfigRolloutCreationScope</a>

---


### GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference <a name="GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput">LabelSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector">LabelSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelectorInput"></a>

```csharp
public string LabelSelectorInput { get; }
```

- *Type:* string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.labelSelector"></a>

```csharp
public string LabelSelector { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelectorOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubRolloutSequenceIgnoredClustersSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceIgnoredClustersSelector">GoogleGkeHubRolloutSequenceIgnoredClustersSelector</a>

---


### GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference <a name="GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput">LabelSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector">LabelSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelectorInput"></a>

```csharp
public string LabelSelectorInput { get; }
```

- *Type:* string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.labelSelector"></a>

```csharp
public string LabelSelector { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference.property.internalValue"></a>

```csharp
public GoogleGkeHubRolloutSequenceStagesClusterSelector InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---


### GoogleGkeHubRolloutSequenceStagesList <a name="GoogleGkeHubRolloutSequenceStagesList" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceStagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get"></a>

```csharp
private GoogleGkeHubRolloutSequenceStagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleGkeHubRolloutSequenceStages[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>[]

---


### GoogleGkeHubRolloutSequenceStagesOutputReference <a name="GoogleGkeHubRolloutSequenceStagesOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceStagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterSelector` <a name="PutClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector"></a>

```csharp
private void PutClusterSelector(GoogleGkeHubRolloutSequenceStagesClusterSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.putClusterSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `ResetClusterSelector` <a name="ResetClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetClusterSelector"></a>

```csharp
private void ResetClusterSelector()
```

##### `ResetSoakDuration` <a name="ResetSoakDuration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.resetSoakDuration"></a>

```csharp
private void ResetSoakDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelector">ClusterSelector</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference">GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput">ClusterSelectorInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput">FleetProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput">SoakDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjects">FleetProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDuration">SoakDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterSelector`<sup>Required</sup> <a name="ClusterSelector" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelector"></a>

```csharp
public GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference ClusterSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference">GoogleGkeHubRolloutSequenceStagesClusterSelectorOutputReference</a>

---

##### `ClusterSelectorInput`<sup>Optional</sup> <a name="ClusterSelectorInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.clusterSelectorInput"></a>

```csharp
public GoogleGkeHubRolloutSequenceStagesClusterSelector ClusterSelectorInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesClusterSelector">GoogleGkeHubRolloutSequenceStagesClusterSelector</a>

---

##### `FleetProjectsInput`<sup>Optional</sup> <a name="FleetProjectsInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjectsInput"></a>

```csharp
public string[] FleetProjectsInput { get; }
```

- *Type:* string[]

---

##### `SoakDurationInput`<sup>Optional</sup> <a name="SoakDurationInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDurationInput"></a>

```csharp
public string SoakDurationInput { get; }
```

- *Type:* string

---

##### `FleetProjects`<sup>Required</sup> <a name="FleetProjects" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.fleetProjects"></a>

```csharp
public string[] FleetProjects { get; }
```

- *Type:* string[]

---

##### `SoakDuration`<sup>Required</sup> <a name="SoakDuration" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.soakDuration"></a>

```csharp
public string SoakDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStagesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleGkeHubRolloutSequenceStages InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceStages">GoogleGkeHubRolloutSequenceStages</a>

---


### GoogleGkeHubRolloutSequenceTimeoutsOutputReference <a name="GoogleGkeHubRolloutSequenceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGkeHubRolloutSequenceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleGkeHubRolloutSequenceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGkeHubRolloutSequence.GoogleGkeHubRolloutSequenceTimeouts">GoogleGkeHubRolloutSequenceTimeouts</a>

---



