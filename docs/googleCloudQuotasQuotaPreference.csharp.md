# `googleCloudQuotasQuotaPreference` Submodule <a name="`googleCloudQuotasQuotaPreference` Submodule" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudQuotasQuotaPreference <a name="GoogleCloudQuotasQuotaPreference" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference google_cloud_quotas_quota_preference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudQuotasQuotaPreference(Construct Scope, string Id, GoogleCloudQuotasQuotaPreferenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig">GoogleCloudQuotasQuotaPreferenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig">GoogleCloudQuotasQuotaPreferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putQuotaConfig">PutQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetContactEmail">ResetContactEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetIgnoreSafetyChecks">ResetIgnoreSafetyChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetJustification">ResetJustification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetQuotaId">ResetQuotaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutQuotaConfig` <a name="PutQuotaConfig" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putQuotaConfig"></a>

```csharp
private void PutQuotaConfig(GoogleCloudQuotasQuotaPreferenceQuotaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putQuotaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCloudQuotasQuotaPreferenceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>

---

##### `ResetContactEmail` <a name="ResetContactEmail" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetContactEmail"></a>

```csharp
private void ResetContactEmail()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreSafetyChecks` <a name="ResetIgnoreSafetyChecks" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetIgnoreSafetyChecks"></a>

```csharp
private void ResetIgnoreSafetyChecks()
```

##### `ResetJustification` <a name="ResetJustification" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetJustification"></a>

```csharp
private void ResetJustification()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetParent` <a name="ResetParent" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetQuotaId` <a name="ResetQuotaId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetQuotaId"></a>

```csharp
private void ResetQuotaId()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCloudQuotasQuotaPreference resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudQuotasQuotaPreference.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudQuotasQuotaPreference.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudQuotasQuotaPreference.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCloudQuotasQuotaPreference.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleCloudQuotasQuotaPreference resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudQuotasQuotaPreference to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudQuotasQuotaPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCloudQuotasQuotaPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaConfig">QuotaConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference">GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.reconciling">Reconciling</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference">GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.contactEmailInput">ContactEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dimensionsInput">DimensionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.ignoreSafetyChecksInput">IgnoreSafetyChecksInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.justificationInput">JustificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaConfigInput">QuotaConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaIdInput">QuotaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.contactEmail">ContactEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.ignoreSafetyChecks">IgnoreSafetyChecks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.justification">Justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaId">QuotaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `QuotaConfig`<sup>Required</sup> <a name="QuotaConfig" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaConfig"></a>

```csharp
public GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference QuotaConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference">GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.timeouts"></a>

```csharp
public GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference">GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ContactEmailInput`<sup>Optional</sup> <a name="ContactEmailInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.contactEmailInput"></a>

```csharp
public string ContactEmailInput { get; }
```

- *Type:* string

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dimensionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DimensionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreSafetyChecksInput`<sup>Optional</sup> <a name="IgnoreSafetyChecksInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.ignoreSafetyChecksInput"></a>

```csharp
public string IgnoreSafetyChecksInput { get; }
```

- *Type:* string

---

##### `JustificationInput`<sup>Optional</sup> <a name="JustificationInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.justificationInput"></a>

```csharp
public string JustificationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `QuotaConfigInput`<sup>Optional</sup> <a name="QuotaConfigInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaConfigInput"></a>

```csharp
public GoogleCloudQuotasQuotaPreferenceQuotaConfig QuotaConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a>

---

##### `QuotaIdInput`<sup>Optional</sup> <a name="QuotaIdInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaIdInput"></a>

```csharp
public string QuotaIdInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleCloudQuotasQuotaPreferenceTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>

---

##### `ContactEmail`<sup>Required</sup> <a name="ContactEmail" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.contactEmail"></a>

```csharp
public string ContactEmail { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreSafetyChecks`<sup>Required</sup> <a name="IgnoreSafetyChecks" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.ignoreSafetyChecks"></a>

```csharp
public string IgnoreSafetyChecks { get; }
```

- *Type:* string

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.justification"></a>

```csharp
public string Justification { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `QuotaId`<sup>Required</sup> <a name="QuotaId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaId"></a>

```csharp
public string QuotaId { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudQuotasQuotaPreferenceConfig <a name="GoogleCloudQuotasQuotaPreferenceConfig" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudQuotasQuotaPreferenceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    GoogleCloudQuotasQuotaPreferenceQuotaConfig QuotaConfig,
    string ContactEmail = null,
    System.Collections.Generic.IDictionary<string, string> Dimensions = null,
    string Id = null,
    string IgnoreSafetyChecks = null,
    string Justification = null,
    string Name = null,
    string Parent = null,
    string QuotaId = null,
    string Service = null,
    GoogleCloudQuotasQuotaPreferenceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.quotaConfig">QuotaConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a></code> | quota_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.contactEmail">ContactEmail</a></code> | <code>string</code> | An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The dimensions that this quota preference applies to. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#id GoogleCloudQuotasQuotaPreference#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks">IgnoreSafetyChecks</a></code> | <code>string</code> | The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.justification">Justification</a></code> | <code>string</code> | The reason / justification for this quota preference. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the quota preference. Required except in the CREATE requests. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of the quota preference. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.quotaId">QuotaId</a></code> | <code>string</code> | The id of the quota to which the quota preference is applied. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.service">Service</a></code> | <code>string</code> | The name of the service to which the quota preference is applied. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `QuotaConfig`<sup>Required</sup> <a name="QuotaConfig" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.quotaConfig"></a>

```csharp
public GoogleCloudQuotasQuotaPreferenceQuotaConfig QuotaConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a>

quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#quota_config GoogleCloudQuotasQuotaPreference#quota_config}

---

##### `ContactEmail`<sup>Optional</sup> <a name="ContactEmail" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.contactEmail"></a>

```csharp
public string ContactEmail { get; set; }
```

- *Type:* string

An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted.

The Google account for the email address must have quota update permission for the project, folder or organization this quota preference is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#contact_email GoogleCloudQuotasQuotaPreference#contact_email}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The dimensions that this quota preference applies to.

The key of the map entry is the name of a dimension, such as "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota preferences configured for the specific value.

NOTE: QuotaPreferences can only be applied across all values of "user" and "resource" dimension. Do not set values for "user" or "resource" in the dimension map.

Example: '{"provider": "Foo Inc"}' where "provider" is a service specific dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#dimensions GoogleCloudQuotasQuotaPreference#dimensions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#id GoogleCloudQuotasQuotaPreference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreSafetyChecks`<sup>Optional</sup> <a name="IgnoreSafetyChecks" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks"></a>

```csharp
public string IgnoreSafetyChecks { get; set; }
```

- *Type:* string

The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#ignore_safety_checks GoogleCloudQuotasQuotaPreference#ignore_safety_checks}

---

##### `Justification`<sup>Optional</sup> <a name="Justification" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.justification"></a>

```csharp
public string Justification { get; set; }
```

- *Type:* string

The reason / justification for this quota preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#justification GoogleCloudQuotasQuotaPreference#justification}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the quota preference. Required except in the CREATE requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#name GoogleCloudQuotasQuotaPreference#name}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of the quota preference.

Allowed parents are "projects/[project-id / number]" or "folders/[folder-id / number]" or "organizations/[org-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#parent GoogleCloudQuotasQuotaPreference#parent}

---

##### `QuotaId`<sup>Optional</sup> <a name="QuotaId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.quotaId"></a>

```csharp
public string QuotaId { get; set; }
```

- *Type:* string

The id of the quota to which the quota preference is applied.

A quota id is unique in the service.
Example: 'CPUS-per-project-region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#quota_id GoogleCloudQuotasQuotaPreference#quota_id}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of the service to which the quota preference is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#service GoogleCloudQuotasQuotaPreference#service}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.timeouts"></a>

```csharp
public GoogleCloudQuotasQuotaPreferenceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#timeouts GoogleCloudQuotasQuotaPreference#timeouts}

---

### GoogleCloudQuotasQuotaPreferenceQuotaConfig <a name="GoogleCloudQuotasQuotaPreferenceQuotaConfig" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudQuotasQuotaPreferenceQuotaConfig {
    string PreferredValue,
    System.Collections.Generic.IDictionary<string, string> Annotations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue">PreferredValue</a></code> | <code>string</code> | The preferred value. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The annotations map for clients to store small amounts of arbitrary data. |

---

##### `PreferredValue`<sup>Required</sup> <a name="PreferredValue" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue"></a>

```csharp
public string PreferredValue { get; set; }
```

- *Type:* string

The preferred value.

Must be greater than or equal to -1. If set to -1, it means the value is "unlimited".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#preferred_value GoogleCloudQuotasQuotaPreference#preferred_value}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The annotations map for clients to store small amounts of arbitrary data.

Do not put PII or other sensitive information here. See https://google.aip.dev/128#annotations.

An object containing a list of "key: value" pairs. Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#annotations GoogleCloudQuotasQuotaPreference#annotations}

---

### GoogleCloudQuotasQuotaPreferenceTimeouts <a name="GoogleCloudQuotasQuotaPreferenceTimeouts" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudQuotasQuotaPreferenceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#create GoogleCloudQuotasQuotaPreference#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#delete GoogleCloudQuotasQuotaPreference#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#update GoogleCloudQuotasQuotaPreference#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#create GoogleCloudQuotasQuotaPreference#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#delete GoogleCloudQuotasQuotaPreference#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_cloud_quotas_quota_preference#update GoogleCloudQuotasQuotaPreference#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference <a name="GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue">GrantedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin">RequestOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail">StateDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId">TraceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput">PreferredValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue">PreferredValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GrantedValue`<sup>Required</sup> <a name="GrantedValue" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue"></a>

```csharp
public string GrantedValue { get; }
```

- *Type:* string

---

##### `RequestOrigin`<sup>Required</sup> <a name="RequestOrigin" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin"></a>

```csharp
public string RequestOrigin { get; }
```

- *Type:* string

---

##### `StateDetail`<sup>Required</sup> <a name="StateDetail" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail"></a>

```csharp
public string StateDetail { get; }
```

- *Type:* string

---

##### `TraceId`<sup>Required</sup> <a name="TraceId" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId"></a>

```csharp
public string TraceId { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PreferredValueInput`<sup>Optional</sup> <a name="PreferredValueInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput"></a>

```csharp
public string PreferredValueInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PreferredValue`<sup>Required</sup> <a name="PreferredValue" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue"></a>

```csharp
public string PreferredValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCloudQuotasQuotaPreferenceQuotaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a>

---


### GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference <a name="GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCloudQuotasQuotaPreferenceTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>

---



