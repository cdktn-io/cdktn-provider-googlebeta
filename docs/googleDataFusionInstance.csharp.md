# `googleDataFusionInstance` Submodule <a name="`googleDataFusionInstance` Submodule" id="@cdktn/provider-google-beta.googleDataFusionInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataFusionInstance <a name="GoogleDataFusionInstance" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance google_data_fusion_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstance(Construct Scope, string Id, GoogleDataFusionInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig">GoogleDataFusionInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig">GoogleDataFusionInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putAccelerators">PutAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putCryptoKeyConfig">PutCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putEventPublishConfig">PutEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putMaintenancePolicy">PutMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetAccelerators">ResetAccelerators</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetCryptoKeyConfig">ResetCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDataprocServiceAccount">ResetDataprocServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableRbac">ResetEnableRbac</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverLogging">ResetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverMonitoring">ResetEnableStackdriverMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEventPublishConfig">ResetEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetPatchRevision">ResetPatchRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetPrivateInstance">ResetPrivateInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccelerators` <a name="PutAccelerators" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putAccelerators"></a>

```csharp
private void PutAccelerators(IResolvable|GoogleDataFusionInstanceAccelerators[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putAccelerators.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]

---

##### `PutCryptoKeyConfig` <a name="PutCryptoKeyConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putCryptoKeyConfig"></a>

```csharp
private void PutCryptoKeyConfig(GoogleDataFusionInstanceCryptoKeyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putCryptoKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

---

##### `PutEventPublishConfig` <a name="PutEventPublishConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putEventPublishConfig"></a>

```csharp
private void PutEventPublishConfig(GoogleDataFusionInstanceEventPublishConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putEventPublishConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

---

##### `PutMaintenancePolicy` <a name="PutMaintenancePolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putMaintenancePolicy"></a>

```csharp
private void PutMaintenancePolicy(GoogleDataFusionInstanceMaintenancePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putMaintenancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(GoogleDataFusionInstanceNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataFusionInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

---

##### `ResetAccelerators` <a name="ResetAccelerators" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetAccelerators"></a>

```csharp
private void ResetAccelerators()
```

##### `ResetCryptoKeyConfig` <a name="ResetCryptoKeyConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetCryptoKeyConfig"></a>

```csharp
private void ResetCryptoKeyConfig()
```

##### `ResetDataprocServiceAccount` <a name="ResetDataprocServiceAccount" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDataprocServiceAccount"></a>

```csharp
private void ResetDataprocServiceAccount()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnableRbac` <a name="ResetEnableRbac" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableRbac"></a>

```csharp
private void ResetEnableRbac()
```

##### `ResetEnableStackdriverLogging` <a name="ResetEnableStackdriverLogging" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverLogging"></a>

```csharp
private void ResetEnableStackdriverLogging()
```

##### `ResetEnableStackdriverMonitoring` <a name="ResetEnableStackdriverMonitoring" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEnableStackdriverMonitoring"></a>

```csharp
private void ResetEnableStackdriverMonitoring()
```

##### `ResetEventPublishConfig` <a name="ResetEventPublishConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetEventPublishConfig"></a>

```csharp
private void ResetEventPublishConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetMaintenancePolicy"></a>

```csharp
private void ResetMaintenancePolicy()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetNetworkConfig"></a>

```csharp
private void ResetNetworkConfig()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetPatchRevision` <a name="ResetPatchRevision" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetPatchRevision"></a>

```csharp
private void ResetPatchRevision()
```

##### `ResetPrivateInstance` <a name="ResetPrivateInstance" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetPrivateInstance"></a>

```csharp
private void ResetPrivateInstance()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDataFusionInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataFusionInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataFusionInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataFusionInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleDataFusionInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleDataFusionInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataFusionInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataFusionInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDataFusionInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.accelerators">Accelerators</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList">GoogleDataFusionInstanceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.apiEndpoint">ApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfig">CryptoKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference">GoogleDataFusionInstanceCryptoKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfig">EventPublishConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference">GoogleDataFusionInstanceEventPublishConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.gcsBucket">GcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.maintenanceEvents">MaintenanceEvents</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList">GoogleDataFusionInstanceMaintenanceEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference">GoogleDataFusionInstanceMaintenancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference">GoogleDataFusionInstanceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.p4ServiceAccount">P4ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceEndpoint">ServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tenantProjectId">TenantProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference">GoogleDataFusionInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.acceleratorsInput">AcceleratorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfigInput">CryptoKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccountInput">DataprocServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbacInput">EnableRbacInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLoggingInput">EnableStackdriverLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoringInput">EnableStackdriverMonitoringInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfigInput">EventPublishConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.optionsInput">OptionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.patchRevisionInput">PatchRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstanceInput">PrivateInstanceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccount">DataprocServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbac">EnableRbac</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoring">EnableStackdriverMonitoring</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.patchRevision">PatchRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstance">PrivateInstance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.accelerators"></a>

```csharp
public GoogleDataFusionInstanceAcceleratorsList Accelerators { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList">GoogleDataFusionInstanceAcceleratorsList</a>

---

##### `ApiEndpoint`<sup>Required</sup> <a name="ApiEndpoint" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.apiEndpoint"></a>

```csharp
public string ApiEndpoint { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CryptoKeyConfig`<sup>Required</sup> <a name="CryptoKeyConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfig"></a>

```csharp
public GoogleDataFusionInstanceCryptoKeyConfigOutputReference CryptoKeyConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference">GoogleDataFusionInstanceCryptoKeyConfigOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EventPublishConfig`<sup>Required</sup> <a name="EventPublishConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfig"></a>

```csharp
public GoogleDataFusionInstanceEventPublishConfigOutputReference EventPublishConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference">GoogleDataFusionInstanceEventPublishConfigOutputReference</a>

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.gcsBucket"></a>

```csharp
public string GcsBucket { get; }
```

- *Type:* string

---

##### `MaintenanceEvents`<sup>Required</sup> <a name="MaintenanceEvents" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.maintenanceEvents"></a>

```csharp
public GoogleDataFusionInstanceMaintenanceEventsList MaintenanceEvents { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList">GoogleDataFusionInstanceMaintenanceEventsList</a>

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.maintenancePolicy"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyOutputReference MaintenancePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference">GoogleDataFusionInstanceMaintenancePolicyOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfig"></a>

```csharp
public GoogleDataFusionInstanceNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference">GoogleDataFusionInstanceNetworkConfigOutputReference</a>

---

##### `P4ServiceAccount`<sup>Required</sup> <a name="P4ServiceAccount" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.p4ServiceAccount"></a>

```csharp
public string P4ServiceAccount { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `ServiceEndpoint`<sup>Required</sup> <a name="ServiceEndpoint" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.serviceEndpoint"></a>

```csharp
public string ServiceEndpoint { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `TenantProjectId`<sup>Required</sup> <a name="TenantProjectId" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tenantProjectId"></a>

```csharp
public string TenantProjectId { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeouts"></a>

```csharp
public GoogleDataFusionInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference">GoogleDataFusionInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AcceleratorsInput`<sup>Optional</sup> <a name="AcceleratorsInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.acceleratorsInput"></a>

```csharp
public IResolvable|GoogleDataFusionInstanceAccelerators[] AcceleratorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]

---

##### `CryptoKeyConfigInput`<sup>Optional</sup> <a name="CryptoKeyConfigInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.cryptoKeyConfigInput"></a>

```csharp
public GoogleDataFusionInstanceCryptoKeyConfig CryptoKeyConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

---

##### `DataprocServiceAccountInput`<sup>Optional</sup> <a name="DataprocServiceAccountInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccountInput"></a>

```csharp
public string DataprocServiceAccountInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableRbacInput`<sup>Optional</sup> <a name="EnableRbacInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbacInput"></a>

```csharp
public bool|IResolvable EnableRbacInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableStackdriverLoggingInput`<sup>Optional</sup> <a name="EnableStackdriverLoggingInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLoggingInput"></a>

```csharp
public bool|IResolvable EnableStackdriverLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableStackdriverMonitoringInput`<sup>Optional</sup> <a name="EnableStackdriverMonitoringInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoringInput"></a>

```csharp
public bool|IResolvable EnableStackdriverMonitoringInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EventPublishConfigInput`<sup>Optional</sup> <a name="EventPublishConfigInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.eventPublishConfigInput"></a>

```csharp
public GoogleDataFusionInstanceEventPublishConfig EventPublishConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.maintenancePolicyInput"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicy MaintenancePolicyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.networkConfigInput"></a>

```csharp
public GoogleDataFusionInstanceNetworkConfig NetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.optionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OptionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PatchRevisionInput`<sup>Optional</sup> <a name="PatchRevisionInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.patchRevisionInput"></a>

```csharp
public string PatchRevisionInput { get; }
```

- *Type:* string

---

##### `PrivateInstanceInput`<sup>Optional</sup> <a name="PrivateInstanceInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstanceInput"></a>

```csharp
public bool|IResolvable PrivateInstanceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleDataFusionInstanceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `DataprocServiceAccount`<sup>Required</sup> <a name="DataprocServiceAccount" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.dataprocServiceAccount"></a>

```csharp
public string DataprocServiceAccount { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableRbac`<sup>Required</sup> <a name="EnableRbac" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableRbac"></a>

```csharp
public bool|IResolvable EnableRbac { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableStackdriverLogging`<sup>Required</sup> <a name="EnableStackdriverLogging" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverLogging"></a>

```csharp
public bool|IResolvable EnableStackdriverLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableStackdriverMonitoring`<sup>Required</sup> <a name="EnableStackdriverMonitoring" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.enableStackdriverMonitoring"></a>

```csharp
public bool|IResolvable EnableStackdriverMonitoring { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PatchRevision`<sup>Required</sup> <a name="PatchRevision" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.patchRevision"></a>

```csharp
public string PatchRevision { get; }
```

- *Type:* string

---

##### `PrivateInstance`<sup>Required</sup> <a name="PrivateInstance" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.privateInstance"></a>

```csharp
public bool|IResolvable PrivateInstance { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataFusionInstanceAccelerators <a name="GoogleDataFusionInstanceAccelerators" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceAccelerators {
    string AcceleratorType,
    string State
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.state">State</a></code> | <code>string</code> | The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"]. |

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#accelerator_type GoogleDataFusionInstance#accelerator_type}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#state GoogleDataFusionInstance#state}

---

### GoogleDataFusionInstanceConfig <a name="GoogleDataFusionInstanceConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Type,
    IResolvable|GoogleDataFusionInstanceAccelerators[] Accelerators = null,
    GoogleDataFusionInstanceCryptoKeyConfig CryptoKeyConfig = null,
    string DataprocServiceAccount = null,
    string DeletionPolicy = null,
    string Description = null,
    string DisplayName = null,
    bool|IResolvable EnableRbac = null,
    bool|IResolvable EnableStackdriverLogging = null,
    bool|IResolvable EnableStackdriverMonitoring = null,
    GoogleDataFusionInstanceEventPublishConfig EventPublishConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleDataFusionInstanceMaintenancePolicy MaintenancePolicy = null,
    GoogleDataFusionInstanceNetworkConfig NetworkConfig = null,
    System.Collections.Generic.IDictionary<string, string> Options = null,
    string PatchRevision = null,
    bool|IResolvable PrivateInstance = null,
    string Project = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    GoogleDataFusionInstanceTimeouts Timeouts = null,
    string Version = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.name">Name</a></code> | <code>string</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.type">Type</a></code> | <code>string</code> | Represents the type of Data Fusion instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.accelerators">Accelerators</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]</code> | accelerators block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.cryptoKeyConfig">CryptoKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | crypto_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dataprocServiceAccount">DataprocServiceAccount</a></code> | <code>string</code> | User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.description">Description</a></code> | <code>string</code> | An optional description of the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name for an instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableRbac">EnableRbac</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Option to enable granular role-based access control. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Option to enable Stackdriver Logging. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverMonitoring">EnableStackdriverMonitoring</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Option to enable Stackdriver Monitoring. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.eventPublishConfig">EventPublishConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | event_publish_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#id GoogleDataFusionInstance#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a></code> | maintenance_policy block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.options">Options</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of additional options used to configure the behavior of Data Fusion instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.patchRevision">PatchRevision</a></code> | <code>string</code> | Current patch revision of the Data Fusion. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.privateInstance">PrivateInstance</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the Data Fusion instance should be private. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#project GoogleDataFusionInstance#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.region">Region</a></code> | <code>string</code> | The region of the Data Fusion instance. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of resource manager tags. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.version">Version</a></code> | <code>string</code> | Current version of the Data Fusion. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.zone">Zone</a></code> | <code>string</code> | Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#name GoogleDataFusionInstance#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Represents the type of Data Fusion instance.

Each type is configured with
the default settings for processing and memory.

* BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
  using point and click UI. However, there are certain limitations, such as fewer number
  of concurrent pipelines, no support for streaming pipelines, etc.
* ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
  available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
* DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
  with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
  pipelines at low cost. Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#type GoogleDataFusionInstance#type}

---

##### `Accelerators`<sup>Optional</sup> <a name="Accelerators" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.accelerators"></a>

```csharp
public IResolvable|GoogleDataFusionInstanceAccelerators[] Accelerators { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]

accelerators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#accelerators GoogleDataFusionInstance#accelerators}

---

##### `CryptoKeyConfig`<sup>Optional</sup> <a name="CryptoKeyConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.cryptoKeyConfig"></a>

```csharp
public GoogleDataFusionInstanceCryptoKeyConfig CryptoKeyConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

crypto_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#crypto_key_config GoogleDataFusionInstance#crypto_key_config}

---

##### `DataprocServiceAccount`<sup>Optional</sup> <a name="DataprocServiceAccount" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.dataprocServiceAccount"></a>

```csharp
public string DataprocServiceAccount { get; set; }
```

- *Type:* string

User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#dataproc_service_account GoogleDataFusionInstance#dataproc_service_account}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#deletion_policy GoogleDataFusionInstance#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#description GoogleDataFusionInstance#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name for an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#display_name GoogleDataFusionInstance#display_name}

---

##### `EnableRbac`<sup>Optional</sup> <a name="EnableRbac" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableRbac"></a>

```csharp
public bool|IResolvable EnableRbac { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Option to enable granular role-based access control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#enable_rbac GoogleDataFusionInstance#enable_rbac}

---

##### `EnableStackdriverLogging`<sup>Optional</sup> <a name="EnableStackdriverLogging" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverLogging"></a>

```csharp
public bool|IResolvable EnableStackdriverLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Option to enable Stackdriver Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#enable_stackdriver_logging GoogleDataFusionInstance#enable_stackdriver_logging}

---

##### `EnableStackdriverMonitoring`<sup>Optional</sup> <a name="EnableStackdriverMonitoring" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.enableStackdriverMonitoring"></a>

```csharp
public bool|IResolvable EnableStackdriverMonitoring { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Option to enable Stackdriver Monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#enable_stackdriver_monitoring GoogleDataFusionInstance#enable_stackdriver_monitoring}

---

##### `EventPublishConfig`<sup>Optional</sup> <a name="EventPublishConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.eventPublishConfig"></a>

```csharp
public GoogleDataFusionInstanceEventPublishConfig EventPublishConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

event_publish_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#event_publish_config GoogleDataFusionInstance#event_publish_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#id GoogleDataFusionInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The resource labels for instance to use to annotate any related underlying resources, such as Compute Engine VMs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#labels GoogleDataFusionInstance#labels}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.maintenancePolicy"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicy MaintenancePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a>

maintenance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#maintenance_policy GoogleDataFusionInstance#maintenance_policy}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.networkConfig"></a>

```csharp
public GoogleDataFusionInstanceNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#network_config GoogleDataFusionInstance#network_config}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.options"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Options { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of additional options used to configure the behavior of Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#options GoogleDataFusionInstance#options}

---

##### `PatchRevision`<sup>Optional</sup> <a name="PatchRevision" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.patchRevision"></a>

```csharp
public string PatchRevision { get; set; }
```

- *Type:* string

Current patch revision of the Data Fusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#patch_revision GoogleDataFusionInstance#patch_revision}

---

##### `PrivateInstance`<sup>Optional</sup> <a name="PrivateInstance" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.privateInstance"></a>

```csharp
public bool|IResolvable PrivateInstance { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the Data Fusion instance should be private.

If set to
true, all Data Fusion nodes will have private IP addresses and will not be
able to access the public internet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#private_instance GoogleDataFusionInstance#private_instance}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#project GoogleDataFusionInstance#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the Data Fusion instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#region GoogleDataFusionInstance#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of resource manager tags.

Resource manager tag keys and values have the same definition as resource manager tags.
Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/{tag_value_id}.
The field is ignored (both PUT & PATCH) when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#tags GoogleDataFusionInstance#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.timeouts"></a>

```csharp
public GoogleDataFusionInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#timeouts GoogleDataFusionInstance#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Current version of the Data Fusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#version GoogleDataFusionInstance#version}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#zone GoogleDataFusionInstance#zone}

---

### GoogleDataFusionInstanceCryptoKeyConfig <a name="GoogleDataFusionInstanceCryptoKeyConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceCryptoKeyConfig {
    string KeyReference
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig.property.keyReference">KeyReference</a></code> | <code>string</code> | The name of the key which is used to encrypt/decrypt customer data. |

---

##### `KeyReference`<sup>Required</sup> <a name="KeyReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig.property.keyReference"></a>

```csharp
public string KeyReference { get; set; }
```

- *Type:* string

The name of the key which is used to encrypt/decrypt customer data.

For key in Cloud KMS, the key should be in the format of projects/* /locations/* /keyRings/* /cryptoKeys/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#key_reference GoogleDataFusionInstance#key_reference}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### GoogleDataFusionInstanceEventPublishConfig <a name="GoogleDataFusionInstanceEventPublishConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceEventPublishConfig {
    bool|IResolvable Enabled,
    string Topic
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Option to enable Event Publishing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.topic">Topic</a></code> | <code>string</code> | The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Option to enable Event Publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#enabled GoogleDataFusionInstance#enabled}

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#topic GoogleDataFusionInstance#topic}

---

### GoogleDataFusionInstanceMaintenanceEvents <a name="GoogleDataFusionInstanceMaintenanceEvents" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEvents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceMaintenanceEvents {

};
```


### GoogleDataFusionInstanceMaintenancePolicy <a name="GoogleDataFusionInstanceMaintenancePolicy" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceMaintenancePolicy {
    GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow MaintenanceWindow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a></code> | maintenance_window block. |

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy.property.maintenanceWindow"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#maintenance_window GoogleDataFusionInstance#maintenance_window}

---

### GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow <a name="GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow {
    GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow RecurringTimeWindow
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow.property.recurringTimeWindow">RecurringTimeWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a></code> | recurring_time_window block. |

---

##### `RecurringTimeWindow`<sup>Required</sup> <a name="RecurringTimeWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow.property.recurringTimeWindow"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow RecurringTimeWindow { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a>

recurring_time_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#recurring_time_window GoogleDataFusionInstance#recurring_time_window}

---

### GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow <a name="GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow {
    string Recurrence,
    GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow Window
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow.property.recurrence">Recurrence</a></code> | <code>string</code> | An RRULE with format RFC-5545 for how this window reccurs. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow.property.window">Window</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a></code> | window block. |

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow.property.recurrence"></a>

```csharp
public string Recurrence { get; set; }
```

- *Type:* string

An RRULE with format RFC-5545 for how this window reccurs.

They go on for the span of time between the start and end time. The only supported FREQ value is "WEEKLY". To have something repeat every weekday, use: "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#recurrence GoogleDataFusionInstance#recurrence}

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow.property.window"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow Window { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a>

window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#window GoogleDataFusionInstance#window}

---

### GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow <a name="GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow {
    string EndTime,
    string StartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow.property.endTime">EndTime</a></code> | <code>string</code> | The end time of the time window provided in RFC 3339 format. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow.property.startTime">StartTime</a></code> | <code>string</code> | The start time of the time window provided in RFC 3339 format. |

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The end time of the time window provided in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#end_time GoogleDataFusionInstance#end_time}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The start time of the time window provided in RFC 3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#start_time GoogleDataFusionInstance#start_time}

---

### GoogleDataFusionInstanceNetworkConfig <a name="GoogleDataFusionInstanceNetworkConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceNetworkConfig {
    string ConnectionType = null,
    string IpAllocation = null,
    string Network = null,
    GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig PrivateServiceConnectConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.connectionType">ConnectionType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.ipAllocation">IpAllocation</a></code> | <code>string</code> | The IP range in CIDR notation to use for the managed Data Fusion instance nodes. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.network">Network</a></code> | <code>string</code> | Name of the network in the project with which the tenant project will be peered for executing pipelines. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |

---

##### `ConnectionType`<sup>Optional</sup> <a name="ConnectionType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

Optional.

Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and
the corresponding tenant project from a predefined list of available connection modes.
If this field is unspecified for a private instance, VPC peering is used. Possible values: ["VPC_PEERING", "PRIVATE_SERVICE_CONNECT_INTERFACES"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#connection_type GoogleDataFusionInstance#connection_type}

---

##### `IpAllocation`<sup>Optional</sup> <a name="IpAllocation" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.ipAllocation"></a>

```csharp
public string IpAllocation { get; set; }
```

- *Type:* string

The IP range in CIDR notation to use for the managed Data Fusion instance nodes.

This range must not overlap with any other ranges used in the Data Fusion instance network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#ip_allocation GoogleDataFusionInstance#ip_allocation}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Name of the network in the project with which the tenant project will be peered for executing pipelines.

In case of shared VPC where the network resides in another host
project the network should specified in the form of projects/{host-project-id}/global/networks/{network}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#network GoogleDataFusionInstance#network}

---

##### `PrivateServiceConnectConfig`<sup>Optional</sup> <a name="PrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig.property.privateServiceConnectConfig"></a>

```csharp
public GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig PrivateServiceConnectConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#private_service_connect_config GoogleDataFusionInstance#private_service_connect_config}

---

### GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig <a name="GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig {
    string NetworkAttachment = null,
    string UnreachableCidrBlock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock">UnreachableCidrBlock</a></code> | <code>string</code> | Optional. |

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

Optional.

The reference to the network attachment used to establish private connectivity.
It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}.
This is required only when using connection type PRIVATE_SERVICE_CONNECT_INTERFACES.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#network_attachment GoogleDataFusionInstance#network_attachment}

---

##### `UnreachableCidrBlock`<sup>Optional</sup> <a name="UnreachableCidrBlock" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig.property.unreachableCidrBlock"></a>

```csharp
public string UnreachableCidrBlock { get; set; }
```

- *Type:* string

Optional.

Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC.
The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment.
This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses.
If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#unreachable_cidr_block GoogleDataFusionInstance#unreachable_cidr_block}

---

### GoogleDataFusionInstanceTimeouts <a name="GoogleDataFusionInstanceTimeouts" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#create GoogleDataFusionInstance#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#delete GoogleDataFusionInstance#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#update GoogleDataFusionInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#create GoogleDataFusionInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#delete GoogleDataFusionInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_data_fusion_instance#update GoogleDataFusionInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataFusionInstanceAcceleratorsList <a name="GoogleDataFusionInstanceAcceleratorsList" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceAcceleratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.get"></a>

```csharp
private GoogleDataFusionInstanceAcceleratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataFusionInstanceAccelerators[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>[]

---


### GoogleDataFusionInstanceAcceleratorsOutputReference <a name="GoogleDataFusionInstanceAcceleratorsOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceAcceleratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAcceleratorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataFusionInstanceAccelerators InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceAccelerators">GoogleDataFusionInstanceAccelerators</a>

---


### GoogleDataFusionInstanceCryptoKeyConfigOutputReference <a name="GoogleDataFusionInstanceCryptoKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceCryptoKeyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput">KeyReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference">KeyReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyReferenceInput`<sup>Optional</sup> <a name="KeyReferenceInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReferenceInput"></a>

```csharp
public string KeyReferenceInput { get; }
```

- *Type:* string

---

##### `KeyReference`<sup>Required</sup> <a name="KeyReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.keyReference"></a>

```csharp
public string KeyReference { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataFusionInstanceCryptoKeyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceCryptoKeyConfig">GoogleDataFusionInstanceCryptoKeyConfig</a>

---


### GoogleDataFusionInstanceEventPublishConfigOutputReference <a name="GoogleDataFusionInstanceEventPublishConfigOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceEventPublishConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataFusionInstanceEventPublishConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceEventPublishConfig">GoogleDataFusionInstanceEventPublishConfig</a>

---


### GoogleDataFusionInstanceMaintenanceEventsList <a name="GoogleDataFusionInstanceMaintenanceEventsList" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceMaintenanceEventsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.get"></a>

```csharp
private GoogleDataFusionInstanceMaintenanceEventsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDataFusionInstanceMaintenanceEventsOutputReference <a name="GoogleDataFusionInstanceMaintenanceEventsOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceMaintenanceEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEvents">GoogleDataFusionInstanceMaintenanceEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEventsOutputReference.property.internalValue"></a>

```csharp
public GoogleDataFusionInstanceMaintenanceEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenanceEvents">GoogleDataFusionInstanceMaintenanceEvents</a>

---


### GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference <a name="GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.putRecurringTimeWindow">PutRecurringTimeWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecurringTimeWindow` <a name="PutRecurringTimeWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.putRecurringTimeWindow"></a>

```csharp
private void PutRecurringTimeWindow(GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.putRecurringTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.recurringTimeWindow">RecurringTimeWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.recurringTimeWindowInput">RecurringTimeWindowInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RecurringTimeWindow`<sup>Required</sup> <a name="RecurringTimeWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.recurringTimeWindow"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference RecurringTimeWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference</a>

---

##### `RecurringTimeWindowInput`<sup>Optional</sup> <a name="RecurringTimeWindowInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.recurringTimeWindowInput"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow RecurringTimeWindowInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a>

---


### GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference <a name="GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.putWindow">PutWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWindow` <a name="PutWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.putWindow"></a>

```csharp
private void PutWindow(GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.putWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.window">Window</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.recurrenceInput">RecurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.windowInput">WindowInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.recurrence">Recurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Window`<sup>Required</sup> <a name="Window" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.window"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference Window { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference</a>

---

##### `RecurrenceInput`<sup>Optional</sup> <a name="RecurrenceInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.recurrenceInput"></a>

```csharp
public string RecurrenceInput { get; }
```

- *Type:* string

---

##### `WindowInput`<sup>Optional</sup> <a name="WindowInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.windowInput"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow WindowInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a>

---

##### `Recurrence`<sup>Required</sup> <a name="Recurrence" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.recurrence"></a>

```csharp
public string Recurrence { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowOutputReference.property.internalValue"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindow</a>

---


### GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference <a name="GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindowOutputReference.property.internalValue"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowRecurringTimeWindowWindow</a>

---


### GoogleDataFusionInstanceMaintenancePolicyOutputReference <a name="GoogleDataFusionInstanceMaintenancePolicyOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceMaintenancePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a>

---

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.maintenanceWindow"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindowOutputReference</a>

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.maintenanceWindowInput"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow">GoogleDataFusionInstanceMaintenancePolicyMaintenanceWindow</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleDataFusionInstanceMaintenancePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceMaintenancePolicy">GoogleDataFusionInstanceMaintenancePolicy</a>

---


### GoogleDataFusionInstanceNetworkConfigOutputReference <a name="GoogleDataFusionInstanceNetworkConfigOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig">PutPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetConnectionType">ResetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetIpAllocation">ResetIpAllocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig">ResetPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrivateServiceConnectConfig` <a name="PutPrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig"></a>

```csharp
private void PutPrivateServiceConnectConfig(GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `ResetConnectionType` <a name="ResetConnectionType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetConnectionType"></a>

```csharp
private void ResetConnectionType()
```

##### `ResetIpAllocation` <a name="ResetIpAllocation" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetIpAllocation"></a>

```csharp
private void ResetIpAllocation()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPrivateServiceConnectConfig` <a name="ResetPrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.resetPrivateServiceConnectConfig"></a>

```csharp
private void ResetPrivateServiceConnectConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput">IpAllocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput">PrivateServiceConnectConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocation">IpAllocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateServiceConnectConfig`<sup>Required</sup> <a name="PrivateServiceConnectConfig" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfig"></a>

```csharp
public GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference PrivateServiceConnectConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference</a>

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `IpAllocationInput`<sup>Optional</sup> <a name="IpAllocationInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocationInput"></a>

```csharp
public string IpAllocationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PrivateServiceConnectConfigInput`<sup>Optional</sup> <a name="PrivateServiceConnectConfigInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.privateServiceConnectConfigInput"></a>

```csharp
public GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig PrivateServiceConnectConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `IpAllocation`<sup>Required</sup> <a name="IpAllocation" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.ipAllocation"></a>

```csharp
public string IpAllocation { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataFusionInstanceNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfig">GoogleDataFusionInstanceNetworkConfig</a>

---


### GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference <a name="GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock">ResetUnreachableCidrBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```

##### `ResetUnreachableCidrBlock` <a name="ResetUnreachableCidrBlock" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.resetUnreachableCidrBlock"></a>

```csharp
private void ResetUnreachableCidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock">EffectiveUnreachableCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput">UnreachableCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock">UnreachableCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveUnreachableCidrBlock`<sup>Required</sup> <a name="EffectiveUnreachableCidrBlock" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.effectiveUnreachableCidrBlock"></a>

```csharp
public string EffectiveUnreachableCidrBlock { get; }
```

- *Type:* string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `UnreachableCidrBlockInput`<sup>Optional</sup> <a name="UnreachableCidrBlockInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlockInput"></a>

```csharp
public string UnreachableCidrBlockInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `UnreachableCidrBlock`<sup>Required</sup> <a name="UnreachableCidrBlock" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.unreachableCidrBlock"></a>

```csharp
public string UnreachableCidrBlock { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig">GoogleDataFusionInstanceNetworkConfigPrivateServiceConnectConfig</a>

---


### GoogleDataFusionInstanceTimeoutsOutputReference <a name="GoogleDataFusionInstanceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleDataFusionInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleDataFusionInstanceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleDataFusionInstance.GoogleDataFusionInstanceTimeouts">GoogleDataFusionInstanceTimeouts</a>

---



