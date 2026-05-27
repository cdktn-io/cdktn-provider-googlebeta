# `googleModelArmorFloorsetting` Submodule <a name="`googleModelArmorFloorsetting` Submodule" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleModelArmorFloorsetting <a name="GoogleModelArmorFloorsetting" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting google_model_armor_floorsetting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsetting(Construct Scope, string Id, GoogleModelArmorFloorsettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig">GoogleModelArmorFloorsettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig">GoogleModelArmorFloorsettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putAiPlatformFloorSetting">PutAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFilterConfig">PutFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFloorSettingMetadata">PutFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putGoogleMcpServerFloorSetting">PutGoogleMcpServerFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetAiPlatformFloorSetting">ResetAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetEnableFloorSettingEnforcement">ResetEnableFloorSettingEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetFloorSettingMetadata">ResetFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetGoogleMcpServerFloorSetting">ResetGoogleMcpServerFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetIntegratedServices">ResetIntegratedServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAiPlatformFloorSetting` <a name="PutAiPlatformFloorSetting" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putAiPlatformFloorSetting"></a>

```csharp
private void PutAiPlatformFloorSetting(GoogleModelArmorFloorsettingAiPlatformFloorSetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putAiPlatformFloorSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

---

##### `PutFilterConfig` <a name="PutFilterConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFilterConfig"></a>

```csharp
private void PutFilterConfig(GoogleModelArmorFloorsettingFilterConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFilterConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

---

##### `PutFloorSettingMetadata` <a name="PutFloorSettingMetadata" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFloorSettingMetadata"></a>

```csharp
private void PutFloorSettingMetadata(GoogleModelArmorFloorsettingFloorSettingMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putFloorSettingMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

---

##### `PutGoogleMcpServerFloorSetting` <a name="PutGoogleMcpServerFloorSetting" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putGoogleMcpServerFloorSetting"></a>

```csharp
private void PutGoogleMcpServerFloorSetting(GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putGoogleMcpServerFloorSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting">GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleModelArmorFloorsettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>

---

##### `ResetAiPlatformFloorSetting` <a name="ResetAiPlatformFloorSetting" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetAiPlatformFloorSetting"></a>

```csharp
private void ResetAiPlatformFloorSetting()
```

##### `ResetEnableFloorSettingEnforcement` <a name="ResetEnableFloorSettingEnforcement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetEnableFloorSettingEnforcement"></a>

```csharp
private void ResetEnableFloorSettingEnforcement()
```

##### `ResetFloorSettingMetadata` <a name="ResetFloorSettingMetadata" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetFloorSettingMetadata"></a>

```csharp
private void ResetFloorSettingMetadata()
```

##### `ResetGoogleMcpServerFloorSetting` <a name="ResetGoogleMcpServerFloorSetting" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetGoogleMcpServerFloorSetting"></a>

```csharp
private void ResetGoogleMcpServerFloorSetting()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntegratedServices` <a name="ResetIntegratedServices" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetIntegratedServices"></a>

```csharp
private void ResetIntegratedServices()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleModelArmorFloorsetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleModelArmorFloorsetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleModelArmorFloorsetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleModelArmorFloorsetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleModelArmorFloorsetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleModelArmorFloorsetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleModelArmorFloorsetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleModelArmorFloorsetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleModelArmorFloorsetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.aiPlatformFloorSetting">AiPlatformFloorSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference">GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.filterConfig">FilterConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.floorSettingMetadata">FloorSettingMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference">GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.googleMcpServerFloorSetting">GoogleMcpServerFloorSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference">GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference">GoogleModelArmorFloorsettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.aiPlatformFloorSettingInput">AiPlatformFloorSettingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.enableFloorSettingEnforcementInput">EnableFloorSettingEnforcementInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.filterConfigInput">FilterConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.floorSettingMetadataInput">FloorSettingMetadataInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.googleMcpServerFloorSettingInput">GoogleMcpServerFloorSettingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting">GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.integratedServicesInput">IntegratedServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.enableFloorSettingEnforcement">EnableFloorSettingEnforcement</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.integratedServices">IntegratedServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AiPlatformFloorSetting`<sup>Required</sup> <a name="AiPlatformFloorSetting" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.aiPlatformFloorSetting"></a>

```csharp
public GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference AiPlatformFloorSetting { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference">GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `FilterConfig`<sup>Required</sup> <a name="FilterConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.filterConfig"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigOutputReference FilterConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigOutputReference</a>

---

##### `FloorSettingMetadata`<sup>Required</sup> <a name="FloorSettingMetadata" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.floorSettingMetadata"></a>

```csharp
public GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference FloorSettingMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference">GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference</a>

---

##### `GoogleMcpServerFloorSetting`<sup>Required</sup> <a name="GoogleMcpServerFloorSetting" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.googleMcpServerFloorSetting"></a>

```csharp
public GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference GoogleMcpServerFloorSetting { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference">GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.timeouts"></a>

```csharp
public GoogleModelArmorFloorsettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference">GoogleModelArmorFloorsettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AiPlatformFloorSettingInput`<sup>Optional</sup> <a name="AiPlatformFloorSettingInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.aiPlatformFloorSettingInput"></a>

```csharp
public GoogleModelArmorFloorsettingAiPlatformFloorSetting AiPlatformFloorSettingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

---

##### `EnableFloorSettingEnforcementInput`<sup>Optional</sup> <a name="EnableFloorSettingEnforcementInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.enableFloorSettingEnforcementInput"></a>

```csharp
public bool|IResolvable EnableFloorSettingEnforcementInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FilterConfigInput`<sup>Optional</sup> <a name="FilterConfigInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.filterConfigInput"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfig FilterConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

---

##### `FloorSettingMetadataInput`<sup>Optional</sup> <a name="FloorSettingMetadataInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.floorSettingMetadataInput"></a>

```csharp
public GoogleModelArmorFloorsettingFloorSettingMetadata FloorSettingMetadataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

---

##### `GoogleMcpServerFloorSettingInput`<sup>Optional</sup> <a name="GoogleMcpServerFloorSettingInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.googleMcpServerFloorSettingInput"></a>

```csharp
public GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting GoogleMcpServerFloorSettingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting">GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegratedServicesInput`<sup>Optional</sup> <a name="IntegratedServicesInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.integratedServicesInput"></a>

```csharp
public string[] IntegratedServicesInput { get; }
```

- *Type:* string[]

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleModelArmorFloorsettingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>

---

##### `EnableFloorSettingEnforcement`<sup>Required</sup> <a name="EnableFloorSettingEnforcement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.enableFloorSettingEnforcement"></a>

```csharp
public bool|IResolvable EnableFloorSettingEnforcement { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegratedServices`<sup>Required</sup> <a name="IntegratedServices" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.integratedServices"></a>

```csharp
public string[] IntegratedServices { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleModelArmorFloorsettingAiPlatformFloorSetting <a name="GoogleModelArmorFloorsettingAiPlatformFloorSetting" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingAiPlatformFloorSetting {
    bool|IResolvable EnableCloudLogging = null,
    bool|IResolvable InspectAndBlock = null,
    bool|IResolvable InspectOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.enableCloudLogging">EnableCloudLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, log Model Armor filter results to Cloud Logging. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.inspectAndBlock">InspectAndBlock</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, Model Armor filters will be run in inspect and block mode. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.inspectOnly">InspectOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request. |

---

##### `EnableCloudLogging`<sup>Optional</sup> <a name="EnableCloudLogging" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.enableCloudLogging"></a>

```csharp
public bool|IResolvable EnableCloudLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, log Model Armor filter results to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#enable_cloud_logging GoogleModelArmorFloorsetting#enable_cloud_logging}

---

##### `InspectAndBlock`<sup>Optional</sup> <a name="InspectAndBlock" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.inspectAndBlock"></a>

```csharp
public bool|IResolvable InspectAndBlock { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, Model Armor filters will be run in inspect and block mode.

Requests that trip Model Armor filters will be blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#inspect_and_block GoogleModelArmorFloorsetting#inspect_and_block}

---

##### `InspectOnly`<sup>Optional</sup> <a name="InspectOnly" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting.property.inspectOnly"></a>

```csharp
public bool|IResolvable InspectOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#inspect_only GoogleModelArmorFloorsetting#inspect_only}

---

### GoogleModelArmorFloorsettingConfig <a name="GoogleModelArmorFloorsettingConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GoogleModelArmorFloorsettingFilterConfig FilterConfig,
    string Location,
    string Parent,
    GoogleModelArmorFloorsettingAiPlatformFloorSetting AiPlatformFloorSetting = null,
    bool|IResolvable EnableFloorSettingEnforcement = null,
    GoogleModelArmorFloorsettingFloorSettingMetadata FloorSettingMetadata = null,
    GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting GoogleMcpServerFloorSetting = null,
    string Id = null,
    string[] IntegratedServices = null,
    GoogleModelArmorFloorsettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.filterConfig">FilterConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.parent">Parent</a></code> | <code>string</code> | Will be any one of these:. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.aiPlatformFloorSetting">AiPlatformFloorSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a></code> | ai_platform_floor_setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.enableFloorSettingEnforcement">EnableFloorSettingEnforcement</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Floor Settings enforcement status. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.floorSettingMetadata">FloorSettingMetadata</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a></code> | floor_setting_metadata block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.googleMcpServerFloorSetting">GoogleMcpServerFloorSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting">GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting</a></code> | google_mcp_server_floor_setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#id GoogleModelArmorFloorsetting#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.integratedServices">IntegratedServices</a></code> | <code>string[]</code> | List of integrated services for which the floor setting is applicable. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FilterConfig`<sup>Required</sup> <a name="FilterConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.filterConfig"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfig FilterConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#filter_config GoogleModelArmorFloorsetting#filter_config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#location GoogleModelArmorFloorsetting#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Will be any one of these:.

* 'projects/{project}'
* 'folders/{folder}'
* 'organizations/{organizationId}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#parent GoogleModelArmorFloorsetting#parent}

---

##### `AiPlatformFloorSetting`<sup>Optional</sup> <a name="AiPlatformFloorSetting" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.aiPlatformFloorSetting"></a>

```csharp
public GoogleModelArmorFloorsettingAiPlatformFloorSetting AiPlatformFloorSetting { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

ai_platform_floor_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#ai_platform_floor_setting GoogleModelArmorFloorsetting#ai_platform_floor_setting}

---

##### `EnableFloorSettingEnforcement`<sup>Optional</sup> <a name="EnableFloorSettingEnforcement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.enableFloorSettingEnforcement"></a>

```csharp
public bool|IResolvable EnableFloorSettingEnforcement { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Floor Settings enforcement status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#enable_floor_setting_enforcement GoogleModelArmorFloorsetting#enable_floor_setting_enforcement}

---

##### `FloorSettingMetadata`<sup>Optional</sup> <a name="FloorSettingMetadata" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.floorSettingMetadata"></a>

```csharp
public GoogleModelArmorFloorsettingFloorSettingMetadata FloorSettingMetadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

floor_setting_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#floor_setting_metadata GoogleModelArmorFloorsetting#floor_setting_metadata}

---

##### `GoogleMcpServerFloorSetting`<sup>Optional</sup> <a name="GoogleMcpServerFloorSetting" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.googleMcpServerFloorSetting"></a>

```csharp
public GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting GoogleMcpServerFloorSetting { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting">GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting</a>

google_mcp_server_floor_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#google_mcp_server_floor_setting GoogleModelArmorFloorsetting#google_mcp_server_floor_setting}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#id GoogleModelArmorFloorsetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegratedServices`<sup>Optional</sup> <a name="IntegratedServices" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.integratedServices"></a>

```csharp
public string[] IntegratedServices { get; set; }
```

- *Type:* string[]

List of integrated services for which the floor setting is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#integrated_services GoogleModelArmorFloorsetting#integrated_services}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingConfig.property.timeouts"></a>

```csharp
public GoogleModelArmorFloorsettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#timeouts GoogleModelArmorFloorsetting#timeouts}

---

### GoogleModelArmorFloorsettingFilterConfig <a name="GoogleModelArmorFloorsettingFilterConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfig {
    GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings MaliciousUriFilterSettings = null,
    GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings PiAndJailbreakFilterSettings = null,
    GoogleModelArmorFloorsettingFilterConfigRaiSettings RaiSettings = null,
    GoogleModelArmorFloorsettingFilterConfigSdpSettings SdpSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.maliciousUriFilterSettings">MaliciousUriFilterSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | malicious_uri_filter_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.piAndJailbreakFilterSettings">PiAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | pi_and_jailbreak_filter_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.raiSettings">RaiSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a></code> | rai_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.sdpSettings">SdpSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a></code> | sdp_settings block. |

---

##### `MaliciousUriFilterSettings`<sup>Optional</sup> <a name="MaliciousUriFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.maliciousUriFilterSettings"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings MaliciousUriFilterSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#malicious_uri_filter_settings GoogleModelArmorFloorsetting#malicious_uri_filter_settings}

---

##### `PiAndJailbreakFilterSettings`<sup>Optional</sup> <a name="PiAndJailbreakFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.piAndJailbreakFilterSettings"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings PiAndJailbreakFilterSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#pi_and_jailbreak_filter_settings GoogleModelArmorFloorsetting#pi_and_jailbreak_filter_settings}

---

##### `RaiSettings`<sup>Optional</sup> <a name="RaiSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.raiSettings"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigRaiSettings RaiSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#rai_settings GoogleModelArmorFloorsetting#rai_settings}

---

##### `SdpSettings`<sup>Optional</sup> <a name="SdpSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig.property.sdpSettings"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigSdpSettings SdpSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#sdp_settings GoogleModelArmorFloorsetting#sdp_settings}

---

### GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings <a name="GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings {
    string FilterEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `FilterEnforcement`<sup>Optional</sup> <a name="FilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; set; }
```

- *Type:* string

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#filter_enforcement GoogleModelArmorFloorsetting#filter_enforcement}

---

### GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings <a name="GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings {
    string ConfidenceLevel = null,
    string FilterEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `ConfidenceLevel`<sup>Optional</sup> <a name="ConfidenceLevel" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; set; }
```

- *Type:* string

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#confidence_level GoogleModelArmorFloorsetting#confidence_level}

---

##### `FilterEnforcement`<sup>Optional</sup> <a name="FilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; set; }
```

- *Type:* string

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#filter_enforcement GoogleModelArmorFloorsetting#filter_enforcement}

---

### GoogleModelArmorFloorsettingFilterConfigRaiSettings <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigRaiSettings {
    IResolvable|GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] RaiFilters
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings.property.raiFilters">RaiFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]</code> | rai_filters block. |

---

##### `RaiFilters`<sup>Required</sup> <a name="RaiFilters" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings.property.raiFilters"></a>

```csharp
public IResolvable|GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] RaiFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#rai_filters GoogleModelArmorFloorsetting#rai_filters}

---

### GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters {
    string FilterType,
    string ConfidenceLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.filterType">FilterType</a></code> | <code>string</code> | Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.filterType"></a>

```csharp
public string FilterType { get; set; }
```

- *Type:* string

Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#filter_type GoogleModelArmorFloorsetting#filter_type}

---

##### `ConfidenceLevel`<sup>Optional</sup> <a name="ConfidenceLevel" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; set; }
```

- *Type:* string

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#confidence_level GoogleModelArmorFloorsetting#confidence_level}

---

### GoogleModelArmorFloorsettingFilterConfigSdpSettings <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigSdpSettings {
    GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig AdvancedConfig = null,
    GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig BasicConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.property.advancedConfig">AdvancedConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | advanced_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.property.basicConfig">BasicConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | basic_config block. |

---

##### `AdvancedConfig`<sup>Optional</sup> <a name="AdvancedConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.property.advancedConfig"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig AdvancedConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#advanced_config GoogleModelArmorFloorsetting#advanced_config}

---

##### `BasicConfig`<sup>Optional</sup> <a name="BasicConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings.property.basicConfig"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig BasicConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#basic_config GoogleModelArmorFloorsetting#basic_config}

---

### GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig {
    string DeidentifyTemplate = null,
    string InspectTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | Optional Sensitive Data Protection Deidentify template resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | Sensitive Data Protection inspect template resource name. |

---

##### `DeidentifyTemplate`<sup>Optional</sup> <a name="DeidentifyTemplate" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; set; }
```

- *Type:* string

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.

e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#deidentify_template GoogleModelArmorFloorsetting#deidentify_template}

---

##### `InspectTemplate`<sup>Optional</sup> <a name="InspectTemplate" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; set; }
```

- *Type:* string

Sensitive Data Protection inspect template resource name.

If only inspect template is provided (de-identify template not provided),
then Sensitive Data Protection InspectContent action is performed during
Sanitization. All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.

e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#inspect_template GoogleModelArmorFloorsetting#inspect_template}

---

### GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig {
    string FilterEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `FilterEnforcement`<sup>Optional</sup> <a name="FilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; set; }
```

- *Type:* string

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#filter_enforcement GoogleModelArmorFloorsetting#filter_enforcement}

---

### GoogleModelArmorFloorsettingFloorSettingMetadata <a name="GoogleModelArmorFloorsettingFloorSettingMetadata" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFloorSettingMetadata {
    GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection MultiLanguageDetection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata.property.multiLanguageDetection">MultiLanguageDetection</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | multi_language_detection block. |

---

##### `MultiLanguageDetection`<sup>Optional</sup> <a name="MultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata.property.multiLanguageDetection"></a>

```csharp
public GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection MultiLanguageDetection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#multi_language_detection GoogleModelArmorFloorsetting#multi_language_detection}

---

### GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection <a name="GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection {
    bool|IResolvable EnableMultiLanguageDetection
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.property.enableMultiLanguageDetection">EnableMultiLanguageDetection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, multi language detection will be enabled. |

---

##### `EnableMultiLanguageDetection`<sup>Required</sup> <a name="EnableMultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.property.enableMultiLanguageDetection"></a>

```csharp
public bool|IResolvable EnableMultiLanguageDetection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#enable_multi_language_detection GoogleModelArmorFloorsetting#enable_multi_language_detection}

---

### GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting <a name="GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting {
    bool|IResolvable EnableCloudLogging = null,
    bool|IResolvable InspectAndBlock = null,
    bool|IResolvable InspectOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting.property.enableCloudLogging">EnableCloudLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, log Model Armor filter results to Cloud Logging. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting.property.inspectAndBlock">InspectAndBlock</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, Model Armor filters will be run in inspect and block mode. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting.property.inspectOnly">InspectOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request. |

---

##### `EnableCloudLogging`<sup>Optional</sup> <a name="EnableCloudLogging" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting.property.enableCloudLogging"></a>

```csharp
public bool|IResolvable EnableCloudLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, log Model Armor filter results to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#enable_cloud_logging GoogleModelArmorFloorsetting#enable_cloud_logging}

---

##### `InspectAndBlock`<sup>Optional</sup> <a name="InspectAndBlock" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting.property.inspectAndBlock"></a>

```csharp
public bool|IResolvable InspectAndBlock { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, Model Armor filters will be run in inspect and block mode.

Requests that trip Model Armor filters will be blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#inspect_and_block GoogleModelArmorFloorsetting#inspect_and_block}

---

##### `InspectOnly`<sup>Optional</sup> <a name="InspectOnly" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting.property.inspectOnly"></a>

```csharp
public bool|IResolvable InspectOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#inspect_only GoogleModelArmorFloorsetting#inspect_only}

---

### GoogleModelArmorFloorsettingTimeouts <a name="GoogleModelArmorFloorsettingTimeouts" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#create GoogleModelArmorFloorsetting#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#delete GoogleModelArmorFloorsetting#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#update GoogleModelArmorFloorsetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#create GoogleModelArmorFloorsetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#delete GoogleModelArmorFloorsetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/resources/google_model_armor_floorsetting#update GoogleModelArmorFloorsetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference <a name="GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetEnableCloudLogging">ResetEnableCloudLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectAndBlock">ResetInspectAndBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectOnly">ResetInspectOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableCloudLogging` <a name="ResetEnableCloudLogging" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetEnableCloudLogging"></a>

```csharp
private void ResetEnableCloudLogging()
```

##### `ResetInspectAndBlock` <a name="ResetInspectAndBlock" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectAndBlock"></a>

```csharp
private void ResetInspectAndBlock()
```

##### `ResetInspectOnly` <a name="ResetInspectOnly" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectOnly"></a>

```csharp
private void ResetInspectOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLoggingInput">EnableCloudLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlockInput">InspectAndBlockInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnlyInput">InspectOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLogging">EnableCloudLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlock">InspectAndBlock</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnly">InspectOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableCloudLoggingInput`<sup>Optional</sup> <a name="EnableCloudLoggingInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLoggingInput"></a>

```csharp
public bool|IResolvable EnableCloudLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InspectAndBlockInput`<sup>Optional</sup> <a name="InspectAndBlockInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlockInput"></a>

```csharp
public bool|IResolvable InspectAndBlockInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InspectOnlyInput`<sup>Optional</sup> <a name="InspectOnlyInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnlyInput"></a>

```csharp
public bool|IResolvable InspectOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableCloudLogging`<sup>Required</sup> <a name="EnableCloudLogging" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLogging"></a>

```csharp
public bool|IResolvable EnableCloudLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InspectAndBlock`<sup>Required</sup> <a name="InspectAndBlock" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlock"></a>

```csharp
public bool|IResolvable InspectAndBlock { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InspectOnly`<sup>Required</sup> <a name="InspectOnly" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnly"></a>

```csharp
public bool|IResolvable InspectOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorFloorsettingAiPlatformFloorSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingAiPlatformFloorSetting">GoogleModelArmorFloorsettingAiPlatformFloorSetting</a>

---


### GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement">ResetFilterEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterEnforcement` <a name="ResetFilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement"></a>

```csharp
private void ResetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput">FilterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterEnforcementInput`<sup>Optional</sup> <a name="FilterEnforcementInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```csharp
public string FilterEnforcementInput { get; }
```

- *Type:* string

---

##### `FilterEnforcement`<sup>Required</sup> <a name="FilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---


### GoogleModelArmorFloorsettingFilterConfigOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings">PutMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings">PutPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings">PutRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings">PutSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetMaliciousUriFilterSettings">ResetMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetPiAndJailbreakFilterSettings">ResetPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetRaiSettings">ResetRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetSdpSettings">ResetSdpSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaliciousUriFilterSettings` <a name="PutMaliciousUriFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings"></a>

```csharp
private void PutMaliciousUriFilterSettings(GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---

##### `PutPiAndJailbreakFilterSettings` <a name="PutPiAndJailbreakFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings"></a>

```csharp
private void PutPiAndJailbreakFilterSettings(GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `PutRaiSettings` <a name="PutRaiSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings"></a>

```csharp
private void PutRaiSettings(GoogleModelArmorFloorsettingFilterConfigRaiSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a>

---

##### `PutSdpSettings` <a name="PutSdpSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings"></a>

```csharp
private void PutSdpSettings(GoogleModelArmorFloorsettingFilterConfigSdpSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a>

---

##### `ResetMaliciousUriFilterSettings` <a name="ResetMaliciousUriFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetMaliciousUriFilterSettings"></a>

```csharp
private void ResetMaliciousUriFilterSettings()
```

##### `ResetPiAndJailbreakFilterSettings` <a name="ResetPiAndJailbreakFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetPiAndJailbreakFilterSettings"></a>

```csharp
private void ResetPiAndJailbreakFilterSettings()
```

##### `ResetRaiSettings` <a name="ResetRaiSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetRaiSettings"></a>

```csharp
private void ResetRaiSettings()
```

##### `ResetSdpSettings` <a name="ResetSdpSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.resetSdpSettings"></a>

```csharp
private void ResetSdpSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettings">MaliciousUriFilterSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettings">PiAndJailbreakFilterSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.raiSettings">RaiSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettings">SdpSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettingsInput">MaliciousUriFilterSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput">PiAndJailbreakFilterSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.raiSettingsInput">RaiSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettingsInput">SdpSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaliciousUriFilterSettings`<sup>Required</sup> <a name="MaliciousUriFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettings"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference MaliciousUriFilterSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference</a>

---

##### `PiAndJailbreakFilterSettings`<sup>Required</sup> <a name="PiAndJailbreakFilterSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettings"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference PiAndJailbreakFilterSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference</a>

---

##### `RaiSettings`<sup>Required</sup> <a name="RaiSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.raiSettings"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference RaiSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference</a>

---

##### `SdpSettings`<sup>Required</sup> <a name="SdpSettings" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettings"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference SdpSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference</a>

---

##### `MaliciousUriFilterSettingsInput`<sup>Optional</sup> <a name="MaliciousUriFilterSettingsInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettingsInput"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings MaliciousUriFilterSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">GoogleModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---

##### `PiAndJailbreakFilterSettingsInput`<sup>Optional</sup> <a name="PiAndJailbreakFilterSettingsInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings PiAndJailbreakFilterSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `RaiSettingsInput`<sup>Optional</sup> <a name="RaiSettingsInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.raiSettingsInput"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigRaiSettings RaiSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a>

---

##### `SdpSettingsInput`<sup>Optional</sup> <a name="SdpSettingsInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettingsInput"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigSdpSettings SdpSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfig">GoogleModelArmorFloorsettingFilterConfig</a>

---


### GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel">ResetConfidenceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement">ResetFilterEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidenceLevel` <a name="ResetConfidenceLevel" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel"></a>

```csharp
private void ResetConfidenceLevel()
```

##### `ResetFilterEnforcement` <a name="ResetFilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement"></a>

```csharp
private void ResetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput">ConfidenceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput">FilterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfidenceLevelInput`<sup>Optional</sup> <a name="ConfidenceLevelInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput"></a>

```csharp
public string ConfidenceLevelInput { get; }
```

- *Type:* string

---

##### `FilterEnforcementInput`<sup>Optional</sup> <a name="FilterEnforcementInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```csharp
public string FilterEnforcementInput { get; }
```

- *Type:* string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; }
```

- *Type:* string

---

##### `FilterEnforcement`<sup>Required</sup> <a name="FilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">GoogleModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---


### GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters">PutRaiFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRaiFilters` <a name="PutRaiFilters" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters"></a>

```csharp
private void PutRaiFilters(IResolvable|GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFilters">RaiFilters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFiltersInput">RaiFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RaiFilters`<sup>Required</sup> <a name="RaiFilters" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFilters"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList RaiFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList</a>

---

##### `RaiFiltersInput`<sup>Optional</sup> <a name="RaiFiltersInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFiltersInput"></a>

```csharp
public IResolvable|GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] RaiFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigRaiSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettings">GoogleModelArmorFloorsettingFilterConfigRaiSettings</a>

---


### GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get"></a>

```csharp
private GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>[]

---


### GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel">ResetConfidenceLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfidenceLevel` <a name="ResetConfidenceLevel" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel"></a>

```csharp
private void ResetConfidenceLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput">ConfidenceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput">FilterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfidenceLevelInput`<sup>Optional</sup> <a name="ConfidenceLevelInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput"></a>

```csharp
public string ConfidenceLevelInput { get; }
```

- *Type:* string

---

##### `FilterTypeInput`<sup>Optional</sup> <a name="FilterTypeInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput"></a>

```csharp
public string FilterTypeInput { get; }
```

- *Type:* string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel"></a>

```csharp
public string ConfidenceLevel { get; }
```

- *Type:* string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">GoogleModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>

---


### GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate">ResetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate">ResetInspectTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeidentifyTemplate` <a name="ResetDeidentifyTemplate" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate"></a>

```csharp
private void ResetDeidentifyTemplate()
```

##### `ResetInspectTemplate` <a name="ResetInspectTemplate" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate"></a>

```csharp
private void ResetInspectTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput">DeidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput">InspectTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeidentifyTemplateInput`<sup>Optional</sup> <a name="DeidentifyTemplateInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput"></a>

```csharp
public string DeidentifyTemplateInput { get; }
```

- *Type:* string

---

##### `InspectTemplateInput`<sup>Optional</sup> <a name="InspectTemplateInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput"></a>

```csharp
public string InspectTemplateInput { get; }
```

- *Type:* string

---

##### `DeidentifyTemplate`<sup>Required</sup> <a name="DeidentifyTemplate" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; }
```

- *Type:* string

---

##### `InspectTemplate`<sup>Required</sup> <a name="InspectTemplate" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---


### GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement">ResetFilterEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilterEnforcement` <a name="ResetFilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement"></a>

```csharp
private void ResetFilterEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput">FilterEnforcementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement">FilterEnforcement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterEnforcementInput`<sup>Optional</sup> <a name="FilterEnforcementInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput"></a>

```csharp
public string FilterEnforcementInput { get; }
```

- *Type:* string

---

##### `FilterEnforcement`<sup>Required</sup> <a name="FilterEnforcement" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement"></a>

```csharp
public string FilterEnforcement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---


### GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference <a name="GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig">PutAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig">PutBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetAdvancedConfig">ResetAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetBasicConfig">ResetBasicConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedConfig` <a name="PutAdvancedConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig"></a>

```csharp
private void PutAdvancedConfig(GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `PutBasicConfig` <a name="PutBasicConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig"></a>

```csharp
private void PutBasicConfig(GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---

##### `ResetAdvancedConfig` <a name="ResetAdvancedConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetAdvancedConfig"></a>

```csharp
private void ResetAdvancedConfig()
```

##### `ResetBasicConfig` <a name="ResetBasicConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetBasicConfig"></a>

```csharp
private void ResetBasicConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfig">AdvancedConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfig">BasicConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfigInput">AdvancedConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfigInput">BasicConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedConfig`<sup>Required</sup> <a name="AdvancedConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfig"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference AdvancedConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference</a>

---

##### `BasicConfig`<sup>Required</sup> <a name="BasicConfig" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfig"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference BasicConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference</a>

---

##### `AdvancedConfigInput`<sup>Optional</sup> <a name="AdvancedConfigInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfigInput"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig AdvancedConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `BasicConfigInput`<sup>Optional</sup> <a name="BasicConfigInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfigInput"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig BasicConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">GoogleModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorFloorsettingFilterConfigSdpSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFilterConfigSdpSettings">GoogleModelArmorFloorsettingFilterConfigSdpSettings</a>

---


### GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference <a name="GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput">EnableMultiLanguageDetectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection">EnableMultiLanguageDetection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableMultiLanguageDetectionInput`<sup>Optional</sup> <a name="EnableMultiLanguageDetectionInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput"></a>

```csharp
public bool|IResolvable EnableMultiLanguageDetectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableMultiLanguageDetection`<sup>Required</sup> <a name="EnableMultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection"></a>

```csharp
public bool|IResolvable EnableMultiLanguageDetection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---


### GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference <a name="GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection">PutMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resetMultiLanguageDetection">ResetMultiLanguageDetection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiLanguageDetection` <a name="PutMultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection"></a>

```csharp
private void PutMultiLanguageDetection(GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---

##### `ResetMultiLanguageDetection` <a name="ResetMultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.resetMultiLanguageDetection"></a>

```csharp
private void ResetMultiLanguageDetection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetection">MultiLanguageDetection</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetectionInput">MultiLanguageDetectionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MultiLanguageDetection`<sup>Required</sup> <a name="MultiLanguageDetection" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetection"></a>

```csharp
public GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference MultiLanguageDetection { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference</a>

---

##### `MultiLanguageDetectionInput`<sup>Optional</sup> <a name="MultiLanguageDetectionInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetectionInput"></a>

```csharp
public GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection MultiLanguageDetectionInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">GoogleModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadataOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorFloorsettingFloorSettingMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingFloorSettingMetadata">GoogleModelArmorFloorsettingFloorSettingMetadata</a>

---


### GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference <a name="GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.resetEnableCloudLogging">ResetEnableCloudLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.resetInspectAndBlock">ResetInspectAndBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.resetInspectOnly">ResetInspectOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableCloudLogging` <a name="ResetEnableCloudLogging" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.resetEnableCloudLogging"></a>

```csharp
private void ResetEnableCloudLogging()
```

##### `ResetInspectAndBlock` <a name="ResetInspectAndBlock" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.resetInspectAndBlock"></a>

```csharp
private void ResetInspectAndBlock()
```

##### `ResetInspectOnly` <a name="ResetInspectOnly" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.resetInspectOnly"></a>

```csharp
private void ResetInspectOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.enableCloudLoggingInput">EnableCloudLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.inspectAndBlockInput">InspectAndBlockInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.inspectOnlyInput">InspectOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.enableCloudLogging">EnableCloudLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.inspectAndBlock">InspectAndBlock</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.inspectOnly">InspectOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting">GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableCloudLoggingInput`<sup>Optional</sup> <a name="EnableCloudLoggingInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.enableCloudLoggingInput"></a>

```csharp
public bool|IResolvable EnableCloudLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InspectAndBlockInput`<sup>Optional</sup> <a name="InspectAndBlockInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.inspectAndBlockInput"></a>

```csharp
public bool|IResolvable InspectAndBlockInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InspectOnlyInput`<sup>Optional</sup> <a name="InspectOnlyInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.inspectOnlyInput"></a>

```csharp
public bool|IResolvable InspectOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableCloudLogging`<sup>Required</sup> <a name="EnableCloudLogging" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.enableCloudLogging"></a>

```csharp
public bool|IResolvable EnableCloudLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InspectAndBlock`<sup>Required</sup> <a name="InspectAndBlock" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.inspectAndBlock"></a>

```csharp
public bool|IResolvable InspectAndBlock { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InspectOnly`<sup>Required</sup> <a name="InspectOnly" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.inspectOnly"></a>

```csharp
public bool|IResolvable InspectOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSettingOutputReference.property.internalValue"></a>

```csharp
public GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting">GoogleModelArmorFloorsettingGoogleMcpServerFloorSetting</a>

---


### GoogleModelArmorFloorsettingTimeoutsOutputReference <a name="GoogleModelArmorFloorsettingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleModelArmorFloorsettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleModelArmorFloorsettingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleModelArmorFloorsetting.GoogleModelArmorFloorsettingTimeouts">GoogleModelArmorFloorsettingTimeouts</a>

---



