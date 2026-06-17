# `googleCesApp` Submodule <a name="`googleCesApp` Submodule" id="@cdktn/provider-google-beta.googleCesApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesApp <a name="GoogleCesApp" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app google_ces_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesApp(Construct Scope, string Id, GoogleCesAppConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig">GoogleCesAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig">GoogleCesAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putAudioProcessingConfig">PutAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putClientCertificateSettings">PutClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDataStoreSettings">PutDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile">PutDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putEvaluationMetricsThresholds">PutEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLanguageSettings">PutLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings">PutLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putModelSettings">PutModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeZoneSettings">PutTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putVariableDeclarations">PutVariableDeclarations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetAudioProcessingConfig">ResetAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetClientCertificateSettings">ResetClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDataStoreSettings">ResetDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDefaultChannelProfile">ResetDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetEvaluationMetricsThresholds">ResetEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetGlobalInstruction">ResetGlobalInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetGuardrails">ResetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetLanguageSettings">ResetLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetLoggingSettings">ResetLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetModelSettings">ResetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetPinned">ResetPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetRootAgent">ResetRootAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetTimeZoneSettings">ResetTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetToolExecutionMode">ResetToolExecutionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetVariableDeclarations">ResetVariableDeclarations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAudioProcessingConfig` <a name="PutAudioProcessingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putAudioProcessingConfig"></a>

```csharp
private void PutAudioProcessingConfig(GoogleCesAppAudioProcessingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putAudioProcessingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

---

##### `PutClientCertificateSettings` <a name="PutClientCertificateSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putClientCertificateSettings"></a>

```csharp
private void PutClientCertificateSettings(GoogleCesAppClientCertificateSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putClientCertificateSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

---

##### `PutDataStoreSettings` <a name="PutDataStoreSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDataStoreSettings"></a>

```csharp
private void PutDataStoreSettings(GoogleCesAppDataStoreSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDataStoreSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

---

##### `PutDefaultChannelProfile` <a name="PutDefaultChannelProfile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile"></a>

```csharp
private void PutDefaultChannelProfile(GoogleCesAppDefaultChannelProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putDefaultChannelProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

---

##### `PutEvaluationMetricsThresholds` <a name="PutEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putEvaluationMetricsThresholds"></a>

```csharp
private void PutEvaluationMetricsThresholds(GoogleCesAppEvaluationMetricsThresholds Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putEvaluationMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

---

##### `PutLanguageSettings` <a name="PutLanguageSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLanguageSettings"></a>

```csharp
private void PutLanguageSettings(GoogleCesAppLanguageSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLanguageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

---

##### `PutLoggingSettings` <a name="PutLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings"></a>

```csharp
private void PutLoggingSettings(GoogleCesAppLoggingSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

---

##### `PutModelSettings` <a name="PutModelSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putModelSettings"></a>

```csharp
private void PutModelSettings(GoogleCesAppModelSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCesAppTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

---

##### `PutTimeZoneSettings` <a name="PutTimeZoneSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeZoneSettings"></a>

```csharp
private void PutTimeZoneSettings(GoogleCesAppTimeZoneSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putTimeZoneSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

---

##### `PutVariableDeclarations` <a name="PutVariableDeclarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putVariableDeclarations"></a>

```csharp
private void PutVariableDeclarations(IResolvable|GoogleCesAppVariableDeclarations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.putVariableDeclarations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>[]

---

##### `ResetAudioProcessingConfig` <a name="ResetAudioProcessingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetAudioProcessingConfig"></a>

```csharp
private void ResetAudioProcessingConfig()
```

##### `ResetClientCertificateSettings` <a name="ResetClientCertificateSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetClientCertificateSettings"></a>

```csharp
private void ResetClientCertificateSettings()
```

##### `ResetDataStoreSettings` <a name="ResetDataStoreSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDataStoreSettings"></a>

```csharp
private void ResetDataStoreSettings()
```

##### `ResetDefaultChannelProfile` <a name="ResetDefaultChannelProfile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDefaultChannelProfile"></a>

```csharp
private void ResetDefaultChannelProfile()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEvaluationMetricsThresholds` <a name="ResetEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetEvaluationMetricsThresholds"></a>

```csharp
private void ResetEvaluationMetricsThresholds()
```

##### `ResetGlobalInstruction` <a name="ResetGlobalInstruction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetGlobalInstruction"></a>

```csharp
private void ResetGlobalInstruction()
```

##### `ResetGuardrails` <a name="ResetGuardrails" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetGuardrails"></a>

```csharp
private void ResetGuardrails()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLanguageSettings` <a name="ResetLanguageSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetLanguageSettings"></a>

```csharp
private void ResetLanguageSettings()
```

##### `ResetLoggingSettings` <a name="ResetLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetLoggingSettings"></a>

```csharp
private void ResetLoggingSettings()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetModelSettings` <a name="ResetModelSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetModelSettings"></a>

```csharp
private void ResetModelSettings()
```

##### `ResetPinned` <a name="ResetPinned" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetPinned"></a>

```csharp
private void ResetPinned()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRootAgent` <a name="ResetRootAgent" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetRootAgent"></a>

```csharp
private void ResetRootAgent()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZoneSettings` <a name="ResetTimeZoneSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetTimeZoneSettings"></a>

```csharp
private void ResetTimeZoneSettings()
```

##### `ResetToolExecutionMode` <a name="ResetToolExecutionMode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetToolExecutionMode"></a>

```csharp
private void ResetToolExecutionMode()
```

##### `ResetVariableDeclarations` <a name="ResetVariableDeclarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.resetVariableDeclarations"></a>

```csharp
private void ResetVariableDeclarations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesApp resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleCesApp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleCesApp resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCesApp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCesApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.audioProcessingConfig">AudioProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference">GoogleCesAppAudioProcessingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.clientCertificateSettings">ClientCertificateSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference">GoogleCesAppClientCertificateSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dataStoreSettings">DataStoreSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference">GoogleCesAppDataStoreSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.defaultChannelProfile">DefaultChannelProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference">GoogleCesAppDefaultChannelProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deploymentCount">DeploymentCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.evaluationMetricsThresholds">EvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.languageSettings">LanguageSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference">GoogleCesAppLanguageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.loggingSettings">LoggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference">GoogleCesAppModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference">GoogleCesAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeZoneSettings">TimeZoneSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference">GoogleCesAppTimeZoneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.variableDeclarations">VariableDeclarations</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList">GoogleCesAppVariableDeclarationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.audioProcessingConfigInput">AudioProcessingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.clientCertificateSettingsInput">ClientCertificateSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dataStoreSettingsInput">DataStoreSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.defaultChannelProfileInput">DefaultChannelProfileInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.evaluationMetricsThresholdsInput">EvaluationMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.globalInstructionInput">GlobalInstructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.guardrailsInput">GuardrailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.languageSettingsInput">LanguageSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.loggingSettingsInput">LoggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.modelSettingsInput">ModelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.pinnedInput">PinnedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.rootAgentInput">RootAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeZoneSettingsInput">TimeZoneSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.toolExecutionModeInput">ToolExecutionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.variableDeclarationsInput">VariableDeclarationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.globalInstruction">GlobalInstruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.guardrails">Guardrails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.pinned">Pinned</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.rootAgent">RootAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.toolExecutionMode">ToolExecutionMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AudioProcessingConfig`<sup>Required</sup> <a name="AudioProcessingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.audioProcessingConfig"></a>

```csharp
public GoogleCesAppAudioProcessingConfigOutputReference AudioProcessingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference">GoogleCesAppAudioProcessingConfigOutputReference</a>

---

##### `ClientCertificateSettings`<sup>Required</sup> <a name="ClientCertificateSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.clientCertificateSettings"></a>

```csharp
public GoogleCesAppClientCertificateSettingsOutputReference ClientCertificateSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference">GoogleCesAppClientCertificateSettingsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DataStoreSettings`<sup>Required</sup> <a name="DataStoreSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dataStoreSettings"></a>

```csharp
public GoogleCesAppDataStoreSettingsOutputReference DataStoreSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference">GoogleCesAppDataStoreSettingsOutputReference</a>

---

##### `DefaultChannelProfile`<sup>Required</sup> <a name="DefaultChannelProfile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.defaultChannelProfile"></a>

```csharp
public GoogleCesAppDefaultChannelProfileOutputReference DefaultChannelProfile { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference">GoogleCesAppDefaultChannelProfileOutputReference</a>

---

##### `DeploymentCount`<sup>Required</sup> <a name="DeploymentCount" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deploymentCount"></a>

```csharp
public double DeploymentCount { get; }
```

- *Type:* double

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `EvaluationMetricsThresholds`<sup>Required</sup> <a name="EvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.evaluationMetricsThresholds"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsOutputReference EvaluationMetricsThresholds { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsOutputReference</a>

---

##### `LanguageSettings`<sup>Required</sup> <a name="LanguageSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.languageSettings"></a>

```csharp
public GoogleCesAppLanguageSettingsOutputReference LanguageSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference">GoogleCesAppLanguageSettingsOutputReference</a>

---

##### `LoggingSettings`<sup>Required</sup> <a name="LoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.loggingSettings"></a>

```csharp
public GoogleCesAppLoggingSettingsOutputReference LoggingSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsOutputReference</a>

---

##### `ModelSettings`<sup>Required</sup> <a name="ModelSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.modelSettings"></a>

```csharp
public GoogleCesAppModelSettingsOutputReference ModelSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference">GoogleCesAppModelSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeouts"></a>

```csharp
public GoogleCesAppTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference">GoogleCesAppTimeoutsOutputReference</a>

---

##### `TimeZoneSettings`<sup>Required</sup> <a name="TimeZoneSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeZoneSettings"></a>

```csharp
public GoogleCesAppTimeZoneSettingsOutputReference TimeZoneSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference">GoogleCesAppTimeZoneSettingsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `VariableDeclarations`<sup>Required</sup> <a name="VariableDeclarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.variableDeclarations"></a>

```csharp
public GoogleCesAppVariableDeclarationsList VariableDeclarations { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList">GoogleCesAppVariableDeclarationsList</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `AudioProcessingConfigInput`<sup>Optional</sup> <a name="AudioProcessingConfigInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.audioProcessingConfigInput"></a>

```csharp
public GoogleCesAppAudioProcessingConfig AudioProcessingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

---

##### `ClientCertificateSettingsInput`<sup>Optional</sup> <a name="ClientCertificateSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.clientCertificateSettingsInput"></a>

```csharp
public GoogleCesAppClientCertificateSettings ClientCertificateSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

---

##### `DataStoreSettingsInput`<sup>Optional</sup> <a name="DataStoreSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.dataStoreSettingsInput"></a>

```csharp
public GoogleCesAppDataStoreSettings DataStoreSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

---

##### `DefaultChannelProfileInput`<sup>Optional</sup> <a name="DefaultChannelProfileInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.defaultChannelProfileInput"></a>

```csharp
public GoogleCesAppDefaultChannelProfile DefaultChannelProfileInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EvaluationMetricsThresholdsInput`<sup>Optional</sup> <a name="EvaluationMetricsThresholdsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.evaluationMetricsThresholdsInput"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholds EvaluationMetricsThresholdsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

---

##### `GlobalInstructionInput`<sup>Optional</sup> <a name="GlobalInstructionInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.globalInstructionInput"></a>

```csharp
public string GlobalInstructionInput { get; }
```

- *Type:* string

---

##### `GuardrailsInput`<sup>Optional</sup> <a name="GuardrailsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.guardrailsInput"></a>

```csharp
public string[] GuardrailsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LanguageSettingsInput`<sup>Optional</sup> <a name="LanguageSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.languageSettingsInput"></a>

```csharp
public GoogleCesAppLanguageSettings LanguageSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LoggingSettingsInput`<sup>Optional</sup> <a name="LoggingSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.loggingSettingsInput"></a>

```csharp
public GoogleCesAppLoggingSettings LoggingSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ModelSettingsInput`<sup>Optional</sup> <a name="ModelSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.modelSettingsInput"></a>

```csharp
public GoogleCesAppModelSettings ModelSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

---

##### `PinnedInput`<sup>Optional</sup> <a name="PinnedInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.pinnedInput"></a>

```csharp
public bool|IResolvable PinnedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RootAgentInput`<sup>Optional</sup> <a name="RootAgentInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.rootAgentInput"></a>

```csharp
public string RootAgentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleCesAppTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

---

##### `TimeZoneSettingsInput`<sup>Optional</sup> <a name="TimeZoneSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.timeZoneSettingsInput"></a>

```csharp
public GoogleCesAppTimeZoneSettings TimeZoneSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

---

##### `ToolExecutionModeInput`<sup>Optional</sup> <a name="ToolExecutionModeInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.toolExecutionModeInput"></a>

```csharp
public string ToolExecutionModeInput { get; }
```

- *Type:* string

---

##### `VariableDeclarationsInput`<sup>Optional</sup> <a name="VariableDeclarationsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.variableDeclarationsInput"></a>

```csharp
public IResolvable|GoogleCesAppVariableDeclarations[] VariableDeclarationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GlobalInstruction`<sup>Required</sup> <a name="GlobalInstruction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.globalInstruction"></a>

```csharp
public string GlobalInstruction { get; }
```

- *Type:* string

---

##### `Guardrails`<sup>Required</sup> <a name="Guardrails" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.guardrails"></a>

```csharp
public string[] Guardrails { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Pinned`<sup>Required</sup> <a name="Pinned" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.pinned"></a>

```csharp
public bool|IResolvable Pinned { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RootAgent`<sup>Required</sup> <a name="RootAgent" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.rootAgent"></a>

```csharp
public string RootAgent { get; }
```

- *Type:* string

---

##### `ToolExecutionMode`<sup>Required</sup> <a name="ToolExecutionMode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.toolExecutionMode"></a>

```csharp
public string ToolExecutionMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesAppAudioProcessingConfig <a name="GoogleCesAppAudioProcessingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppAudioProcessingConfig {
    GoogleCesAppAudioProcessingConfigAmbientSoundConfig AmbientSoundConfig = null,
    GoogleCesAppAudioProcessingConfigBargeInConfig BargeInConfig = null,
    string InactivityTimeout = null,
    IResolvable|GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs[] SynthesizeSpeechConfigs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.ambientSoundConfig">AmbientSoundConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a></code> | ambient_sound_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.bargeInConfig">BargeInConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a></code> | barge_in_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.inactivityTimeout">InactivityTimeout</a></code> | <code>string</code> | The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.synthesizeSpeechConfigs">SynthesizeSpeechConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]</code> | synthesize_speech_configs block. |

---

##### `AmbientSoundConfig`<sup>Optional</sup> <a name="AmbientSoundConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.ambientSoundConfig"></a>

```csharp
public GoogleCesAppAudioProcessingConfigAmbientSoundConfig AmbientSoundConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a>

ambient_sound_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#ambient_sound_config GoogleCesApp#ambient_sound_config}

---

##### `BargeInConfig`<sup>Optional</sup> <a name="BargeInConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.bargeInConfig"></a>

```csharp
public GoogleCesAppAudioProcessingConfigBargeInConfig BargeInConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a>

barge_in_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#barge_in_config GoogleCesApp#barge_in_config}

---

##### `InactivityTimeout`<sup>Optional</sup> <a name="InactivityTimeout" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.inactivityTimeout"></a>

```csharp
public string InactivityTimeout { get; set; }
```

- *Type:* string

The duration of user inactivity (no speech or interaction) before the agent prompts the user for reengagement.

If not set, the agent will not prompt
the user for reengagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#inactivity_timeout GoogleCesApp#inactivity_timeout}

---

##### `SynthesizeSpeechConfigs`<sup>Optional</sup> <a name="SynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig.property.synthesizeSpeechConfigs"></a>

```csharp
public IResolvable|GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs[] SynthesizeSpeechConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#synthesize_speech_configs GoogleCesApp#synthesize_speech_configs}

---

### GoogleCesAppAudioProcessingConfigAmbientSoundConfig <a name="GoogleCesAppAudioProcessingConfigAmbientSoundConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppAudioProcessingConfigAmbientSoundConfig {
    string GcsUri = null,
    string PrebuiltAmbientSound = null,
    double VolumeGainDb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri">GcsUri</a></code> | <code>string</code> | Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound">PrebuiltAmbientSound</a></code> | <code>string</code> | Name of the prebuilt ambient sound. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb">VolumeGainDb</a></code> | <code>double</code> | Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that. |

---

##### `GcsUri`<sup>Optional</sup> <a name="GcsUri" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.gcsUri"></a>

```csharp
public string GcsUri { get; set; }
```

- *Type:* string

Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud Storage](https://cloud.google.com/storage). Note: Please make sure the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com' has 'storage.objects.get' permission to the Cloud Storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#gcs_uri GoogleCesApp#gcs_uri}

---

##### `PrebuiltAmbientSound`<sup>Optional</sup> <a name="PrebuiltAmbientSound" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.prebuiltAmbientSound"></a>

```csharp
public string PrebuiltAmbientSound { get; set; }
```

- *Type:* string

Name of the prebuilt ambient sound.

Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum"
-"office_1" - "office_2" - "office_3"
-"room_1" - "room_2" - "room_3"
-"room_4" - "room_5" - "air_conditioner"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#prebuilt_ambient_sound GoogleCesApp#prebuilt_ambient_sound}

---

##### `VolumeGainDb`<sup>Optional</sup> <a name="VolumeGainDb" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig.property.volumeGainDb"></a>

```csharp
public double VolumeGainDb { get; set; }
```

- *Type:* double

Volume gain (in dB) of the normal native volume supported by ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB) will play at approximately half the amplitude of the normal native signal amplitude. A value of +6.0 (dB) will play at approximately twice the amplitude of the normal native signal amplitude. We strongly recommend not to exceed +10 (dB) as there's usually no effective increase in loudness for any value greater than that.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#volume_gain_db GoogleCesApp#volume_gain_db}

---

### GoogleCesAppAudioProcessingConfigBargeInConfig <a name="GoogleCesAppAudioProcessingConfigBargeInConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppAudioProcessingConfigBargeInConfig {
    bool|IResolvable BargeInAwareness = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness">BargeInAwareness</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message. |

---

##### `BargeInAwareness`<sup>Optional</sup> <a name="BargeInAwareness" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig.property.bargeInAwareness"></a>

```csharp
public bool|IResolvable BargeInAwareness { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If enabled, the agent will adapt its next response based on the assumption that the user hasn't heard the full preceding agent message.

This should not be used in scenarios where agent responses are displayed
visually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#barge_in_awareness GoogleCesApp#barge_in_awareness}

---

### GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs <a name="GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs {
    string LanguageCode,
    double SpeakingRate = null,
    string Voice = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode">LanguageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#language_code GoogleCesApp#language_code}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate">SpeakingRate</a></code> | <code>double</code> | The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice">Voice</a></code> | <code>string</code> | The name of the voice. |

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#language_code GoogleCesApp#language_code}.

---

##### `SpeakingRate`<sup>Optional</sup> <a name="SpeakingRate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.speakingRate"></a>

```csharp
public double SpeakingRate { get; set; }
```

- *Type:* double

The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is half as fast. Values outside of the range [0.25, 2.0] will return an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#speaking_rate GoogleCesApp#speaking_rate}

---

##### `Voice`<sup>Optional</sup> <a name="Voice" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs.property.voice"></a>

```csharp
public string Voice { get; set; }
```

- *Type:* string

The name of the voice.

If not set, the service will choose a
voice based on the other parameters such as language_code.
For the list of available voices, please refer to Supported voices and
languages from Cloud Text-to-Speech.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#voice GoogleCesApp#voice}

---

### GoogleCesAppClientCertificateSettings <a name="GoogleCesAppClientCertificateSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppClientCertificateSettings {
    string PrivateKey,
    string TlsCertificate,
    string Passphrase = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.privateKey">PrivateKey</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.tlsCertificate">TlsCertificate</a></code> | <code>string</code> | The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.passphrase">Passphrase</a></code> | <code>string</code> | The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted. |

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: projects/{project}/secrets/{secret}/versions/{version}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#private_key GoogleCesApp#private_key}

---

##### `TlsCertificate`<sup>Required</sup> <a name="TlsCertificate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.tlsCertificate"></a>

```csharp
public string TlsCertificate { get; set; }
```

- *Type:* string

The TLS certificate encoded in PEM format. This string must include the begin header and end footer lines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tls_certificate GoogleCesApp#tls_certificate}

---

##### `Passphrase`<sup>Optional</sup> <a name="Passphrase" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings.property.passphrase"></a>

```csharp
public string Passphrase { get; set; }
```

- *Type:* string

The passphrase to decrypt the private key. Should be left unset if the private key is not encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#passphrase GoogleCesApp#passphrase}

---

### GoogleCesAppConfig <a name="GoogleCesAppConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AppId,
    string DisplayName,
    string Location,
    GoogleCesAppAudioProcessingConfig AudioProcessingConfig = null,
    GoogleCesAppClientCertificateSettings ClientCertificateSettings = null,
    GoogleCesAppDataStoreSettings DataStoreSettings = null,
    GoogleCesAppDefaultChannelProfile DefaultChannelProfile = null,
    string DeletionPolicy = null,
    string Description = null,
    GoogleCesAppEvaluationMetricsThresholds EvaluationMetricsThresholds = null,
    string GlobalInstruction = null,
    string[] Guardrails = null,
    string Id = null,
    GoogleCesAppLanguageSettings LanguageSettings = null,
    GoogleCesAppLoggingSettings LoggingSettings = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    GoogleCesAppModelSettings ModelSettings = null,
    bool|IResolvable Pinned = null,
    string Project = null,
    string RootAgent = null,
    GoogleCesAppTimeouts Timeouts = null,
    GoogleCesAppTimeZoneSettings TimeZoneSettings = null,
    string ToolExecutionMode = null,
    IResolvable|GoogleCesAppVariableDeclarations[] VariableDeclarations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.appId">AppId</a></code> | <code>string</code> | The ID to use for the app, which will become the final component of the app's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.audioProcessingConfig">AudioProcessingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a></code> | audio_processing_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.clientCertificateSettings">ClientCertificateSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a></code> | client_certificate_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.dataStoreSettings">DataStoreSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a></code> | data_store_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.defaultChannelProfile">DefaultChannelProfile</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a></code> | default_channel_profile block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.description">Description</a></code> | <code>string</code> | Human-readable description of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.evaluationMetricsThresholds">EvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a></code> | evaluation_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.globalInstruction">GlobalInstruction</a></code> | <code>string</code> | Instructions for all the agents in the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.guardrails">Guardrails</a></code> | <code>string[]</code> | List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#id GoogleCesApp#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.languageSettings">LanguageSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a></code> | language_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.loggingSettings">LoggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a></code> | logging_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Metadata about the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.modelSettings">ModelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.pinned">Pinned</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the app is pinned in the app list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.rootAgent">RootAgent</a></code> | <code>string</code> | The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.timeZoneSettings">TimeZoneSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a></code> | time_zone_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.toolExecutionMode">ToolExecutionMode</a></code> | <code>string</code> | The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.variableDeclarations">VariableDeclarations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>[]</code> | variable_declarations block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

The ID to use for the app, which will become the final component of the app's resource name.

If not provided, a unique ID will be
automatically assigned for the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#app_id GoogleCesApp#app_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#display_name GoogleCesApp#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#location GoogleCesApp#location}

---

##### `AudioProcessingConfig`<sup>Optional</sup> <a name="AudioProcessingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.audioProcessingConfig"></a>

```csharp
public GoogleCesAppAudioProcessingConfig AudioProcessingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

audio_processing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#audio_processing_config GoogleCesApp#audio_processing_config}

---

##### `ClientCertificateSettings`<sup>Optional</sup> <a name="ClientCertificateSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.clientCertificateSettings"></a>

```csharp
public GoogleCesAppClientCertificateSettings ClientCertificateSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

client_certificate_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#client_certificate_settings GoogleCesApp#client_certificate_settings}

---

##### `DataStoreSettings`<sup>Optional</sup> <a name="DataStoreSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.dataStoreSettings"></a>

```csharp
public GoogleCesAppDataStoreSettings DataStoreSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

data_store_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#data_store_settings GoogleCesApp#data_store_settings}

---

##### `DefaultChannelProfile`<sup>Optional</sup> <a name="DefaultChannelProfile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.defaultChannelProfile"></a>

```csharp
public GoogleCesAppDefaultChannelProfile DefaultChannelProfile { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

default_channel_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default_channel_profile GoogleCesApp#default_channel_profile}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#deletion_policy GoogleCesApp#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Human-readable description of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#description GoogleCesApp#description}

---

##### `EvaluationMetricsThresholds`<sup>Optional</sup> <a name="EvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.evaluationMetricsThresholds"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholds EvaluationMetricsThresholds { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#evaluation_metrics_thresholds GoogleCesApp#evaluation_metrics_thresholds}

---

##### `GlobalInstruction`<sup>Optional</sup> <a name="GlobalInstruction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.globalInstruction"></a>

```csharp
public string GlobalInstruction { get; set; }
```

- *Type:* string

Instructions for all the agents in the app.

You can use this instruction to set up a stable identity or personality
across all the agents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#global_instruction GoogleCesApp#global_instruction}

---

##### `Guardrails`<sup>Optional</sup> <a name="Guardrails" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.guardrails"></a>

```csharp
public string[] Guardrails { get; set; }
```

- *Type:* string[]

List of guardrails for the app. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#guardrails GoogleCesApp#guardrails}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#id GoogleCesApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LanguageSettings`<sup>Optional</sup> <a name="LanguageSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.languageSettings"></a>

```csharp
public GoogleCesAppLanguageSettings LanguageSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

language_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#language_settings GoogleCesApp#language_settings}

---

##### `LoggingSettings`<sup>Optional</sup> <a name="LoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.loggingSettings"></a>

```csharp
public GoogleCesAppLoggingSettings LoggingSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#logging_settings GoogleCesApp#logging_settings}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Metadata about the app.

This field can be used to store additional
information relevant to the app's details or intended usages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#metadata GoogleCesApp#metadata}

---

##### `ModelSettings`<sup>Optional</sup> <a name="ModelSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.modelSettings"></a>

```csharp
public GoogleCesAppModelSettings ModelSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#model_settings GoogleCesApp#model_settings}

---

##### `Pinned`<sup>Optional</sup> <a name="Pinned" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.pinned"></a>

```csharp
public bool|IResolvable Pinned { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the app is pinned in the app list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#pinned GoogleCesApp#pinned}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}.

---

##### `RootAgent`<sup>Optional</sup> <a name="RootAgent" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.rootAgent"></a>

```csharp
public string RootAgent { get; set; }
```

- *Type:* string

The root agent is the entry point of the app. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#root_agent GoogleCesApp#root_agent}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.timeouts"></a>

```csharp
public GoogleCesAppTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#timeouts GoogleCesApp#timeouts}

---

##### `TimeZoneSettings`<sup>Optional</sup> <a name="TimeZoneSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.timeZoneSettings"></a>

```csharp
public GoogleCesAppTimeZoneSettings TimeZoneSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

time_zone_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#time_zone_settings GoogleCesApp#time_zone_settings}

---

##### `ToolExecutionMode`<sup>Optional</sup> <a name="ToolExecutionMode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.toolExecutionMode"></a>

```csharp
public string ToolExecutionMode { get; set; }
```

- *Type:* string

The tool execution mode for the app. See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tool_execution_mode GoogleCesApp#tool_execution_mode}

---

##### `VariableDeclarations`<sup>Optional</sup> <a name="VariableDeclarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppConfig.property.variableDeclarations"></a>

```csharp
public IResolvable|GoogleCesAppVariableDeclarations[] VariableDeclarations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>[]

variable_declarations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#variable_declarations GoogleCesApp#variable_declarations}

---

### GoogleCesAppDataStoreSettings <a name="GoogleCesAppDataStoreSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppDataStoreSettings {

};
```


### GoogleCesAppDataStoreSettingsEngines <a name="GoogleCesAppDataStoreSettingsEngines" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEngines"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEngines.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppDataStoreSettingsEngines {

};
```


### GoogleCesAppDefaultChannelProfile <a name="GoogleCesAppDefaultChannelProfile" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppDefaultChannelProfile {
    string ChannelType = null,
    bool|IResolvable DisableBargeInControl = null,
    bool|IResolvable DisableDtmf = null,
    GoogleCesAppDefaultChannelProfilePersonaProperty PersonaProperty = null,
    string ProfileId = null,
    GoogleCesAppDefaultChannelProfileWebWidgetConfig WebWidgetConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.channelType">ChannelType</a></code> | <code>string</code> | The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.disableBargeInControl">DisableBargeInControl</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to disable user barge-in in the conversation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.disableDtmf">DisableDtmf</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to disable DTMF (dual-tone multi-frequency). |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.personaProperty">PersonaProperty</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a></code> | persona_property block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.profileId">ProfileId</a></code> | <code>string</code> | The unique identifier of the channel profile. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.webWidgetConfig">WebWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a></code> | web_widget_config block. |

---

##### `ChannelType`<sup>Optional</sup> <a name="ChannelType" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.channelType"></a>

```csharp
public string ChannelType { get; set; }
```

- *Type:* string

The type of the channel profile. Possible values: UNKNOWN WEB_UI API TWILIO GOOGLE_TELEPHONY_PLATFORM CONTACT_CENTER_AS_A_SERVICE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#channel_type GoogleCesApp#channel_type}

---

##### `DisableBargeInControl`<sup>Optional</sup> <a name="DisableBargeInControl" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.disableBargeInControl"></a>

```csharp
public bool|IResolvable DisableBargeInControl { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to disable user barge-in in the conversation.

* true: User interruptions are disabled while the agent is speaking.
* false: The agent retains automatic control over when the user can interrupt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#disable_barge_in_control GoogleCesApp#disable_barge_in_control}

---

##### `DisableDtmf`<sup>Optional</sup> <a name="DisableDtmf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.disableDtmf"></a>

```csharp
public bool|IResolvable DisableDtmf { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to disable DTMF (dual-tone multi-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#disable_dtmf GoogleCesApp#disable_dtmf}

---

##### `PersonaProperty`<sup>Optional</sup> <a name="PersonaProperty" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.personaProperty"></a>

```csharp
public GoogleCesAppDefaultChannelProfilePersonaProperty PersonaProperty { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a>

persona_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#persona_property GoogleCesApp#persona_property}

---

##### `ProfileId`<sup>Optional</sup> <a name="ProfileId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.profileId"></a>

```csharp
public string ProfileId { get; set; }
```

- *Type:* string

The unique identifier of the channel profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#profile_id GoogleCesApp#profile_id}

---

##### `WebWidgetConfig`<sup>Optional</sup> <a name="WebWidgetConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile.property.webWidgetConfig"></a>

```csharp
public GoogleCesAppDefaultChannelProfileWebWidgetConfig WebWidgetConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a>

web_widget_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#web_widget_config GoogleCesApp#web_widget_config}

---

### GoogleCesAppDefaultChannelProfilePersonaProperty <a name="GoogleCesAppDefaultChannelProfilePersonaProperty" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppDefaultChannelProfilePersonaProperty {
    string Persona = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty.property.persona">Persona</a></code> | <code>string</code> | The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY. |

---

##### `Persona`<sup>Optional</sup> <a name="Persona" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty.property.persona"></a>

```csharp
public string Persona { get; set; }
```

- *Type:* string

The persona of the channel. Possible values: UNKNOWN CONCISE CHATTY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#persona GoogleCesApp#persona}

---

### GoogleCesAppDefaultChannelProfileWebWidgetConfig <a name="GoogleCesAppDefaultChannelProfileWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppDefaultChannelProfileWebWidgetConfig {
    string Modality = null,
    string Theme = null,
    string WebWidgetTitle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.modality">Modality</a></code> | <code>string</code> | The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.theme">Theme</a></code> | <code>string</code> | The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle">WebWidgetTitle</a></code> | <code>string</code> | The title of the web widget. |

---

##### `Modality`<sup>Optional</sup> <a name="Modality" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.modality"></a>

```csharp
public string Modality { get; set; }
```

- *Type:* string

The modality of the web widget. Possible values: UNKNOWN_MODALITY CHAT_AND_VOICE VOICE_ONLY CHAT_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#modality GoogleCesApp#modality}

---

##### `Theme`<sup>Optional</sup> <a name="Theme" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.theme"></a>

```csharp
public string Theme { get; set; }
```

- *Type:* string

The theme of the web widget. Possible values: UNKNOWN_THEME LIGHT DARK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#theme GoogleCesApp#theme}

---

##### `WebWidgetTitle`<sup>Optional</sup> <a name="WebWidgetTitle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig.property.webWidgetTitle"></a>

```csharp
public string WebWidgetTitle { get; set; }
```

- *Type:* string

The title of the web widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#web_widget_title GoogleCesApp#web_widget_title}

---

### GoogleCesAppEvaluationMetricsThresholds <a name="GoogleCesAppEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppEvaluationMetricsThresholds {
    GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds GoldenEvaluationMetricsThresholds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds">GoldenEvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | golden_evaluation_metrics_thresholds block. |

---

##### `GoldenEvaluationMetricsThresholds`<sup>Optional</sup> <a name="GoldenEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds.property.goldenEvaluationMetricsThresholds"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds GoldenEvaluationMetricsThresholds { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

golden_evaluation_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#golden_evaluation_metrics_thresholds GoogleCesApp#golden_evaluation_metrics_thresholds}

---

### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds {
    GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds ExpectationLevelMetricsThresholds = null,
    GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds TurnLevelMetricsThresholds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds">ExpectationLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | expectation_level_metrics_thresholds block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds">TurnLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | turn_level_metrics_thresholds block. |

---

##### `ExpectationLevelMetricsThresholds`<sup>Optional</sup> <a name="ExpectationLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.expectationLevelMetricsThresholds"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds ExpectationLevelMetricsThresholds { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

expectation_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#expectation_level_metrics_thresholds GoogleCesApp#expectation_level_metrics_thresholds}

---

##### `TurnLevelMetricsThresholds`<sup>Optional</sup> <a name="TurnLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds.property.turnLevelMetricsThresholds"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds TurnLevelMetricsThresholds { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

turn_level_metrics_thresholds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#turn_level_metrics_thresholds GoogleCesApp#turn_level_metrics_thresholds}

---

### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds {
    double ToolInvocationParameterCorrectnessThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold">ToolInvocationParameterCorrectnessThreshold</a></code> | <code>double</code> | The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0. |

---

##### `ToolInvocationParameterCorrectnessThreshold`<sup>Optional</sup> <a name="ToolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds.property.toolInvocationParameterCorrectnessThreshold"></a>

```csharp
public double ToolInvocationParameterCorrectnessThreshold { get; set; }
```

- *Type:* double

The success threshold for individual tool invocation parameter correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#tool_invocation_parameter_correctness_threshold GoogleCesApp#tool_invocation_parameter_correctness_threshold}

---

### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds {
    double OverallToolInvocationCorrectnessThreshold = null,
    double SemanticSimilaritySuccessThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold">OverallToolInvocationCorrectnessThreshold</a></code> | <code>double</code> | The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold">SemanticSimilaritySuccessThreshold</a></code> | <code>double</code> | The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3. |

---

##### `OverallToolInvocationCorrectnessThreshold`<sup>Optional</sup> <a name="OverallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.overallToolInvocationCorrectnessThreshold"></a>

```csharp
public double OverallToolInvocationCorrectnessThreshold { get; set; }
```

- *Type:* double

The success threshold for overall tool invocation correctness. Must be a float between 0 and 1. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#overall_tool_invocation_correctness_threshold GoogleCesApp#overall_tool_invocation_correctness_threshold}

---

##### `SemanticSimilaritySuccessThreshold`<sup>Optional</sup> <a name="SemanticSimilaritySuccessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds.property.semanticSimilaritySuccessThreshold"></a>

```csharp
public double SemanticSimilaritySuccessThreshold { get; set; }
```

- *Type:* double

The success threshold for semantic similarity. Must be an integer between 0 and 4. Default is >= 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#semantic_similarity_success_threshold GoogleCesApp#semantic_similarity_success_threshold}

---

### GoogleCesAppLanguageSettings <a name="GoogleCesAppLanguageSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLanguageSettings {
    string DefaultLanguageCode = null,
    bool|IResolvable EnableMultilingualSupport = null,
    string FallbackAction = null,
    string[] SupportedLanguageCodes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>string</code> | The default language code of the app. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.enableMultilingualSupport">EnableMultilingualSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.fallbackAction">FallbackAction</a></code> | <code>string</code> | The action to perform when an agent receives input in an unsupported language. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.supportedLanguageCodes">SupportedLanguageCodes</a></code> | <code>string[]</code> | List of languages codes supported by the app, in addition to the 'default_language_code'. |

---

##### `DefaultLanguageCode`<sup>Optional</sup> <a name="DefaultLanguageCode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.defaultLanguageCode"></a>

```csharp
public string DefaultLanguageCode { get; set; }
```

- *Type:* string

The default language code of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default_language_code GoogleCesApp#default_language_code}

---

##### `EnableMultilingualSupport`<sup>Optional</sup> <a name="EnableMultilingualSupport" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.enableMultilingualSupport"></a>

```csharp
public bool|IResolvable EnableMultilingualSupport { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables multilingual support. If true, agents in the app will use pre-built instructions to improve handling of multilingual input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enable_multilingual_support GoogleCesApp#enable_multilingual_support}

---

##### `FallbackAction`<sup>Optional</sup> <a name="FallbackAction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.fallbackAction"></a>

```csharp
public string FallbackAction { get; set; }
```

- *Type:* string

The action to perform when an agent receives input in an unsupported language.

This can be a predefined action or a custom tool call.
Valid values are:

* A tool's full resource name, which triggers a specific tool execution.
* A predefined system action, such as "escalate" or "exit", which triggers
  an EndSession signal with corresponding metadata
  to terminate the conversation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#fallback_action GoogleCesApp#fallback_action}

---

##### `SupportedLanguageCodes`<sup>Optional</sup> <a name="SupportedLanguageCodes" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings.property.supportedLanguageCodes"></a>

```csharp
public string[] SupportedLanguageCodes { get; set; }
```

- *Type:* string[]

List of languages codes supported by the app, in addition to the 'default_language_code'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#supported_language_codes GoogleCesApp#supported_language_codes}

---

### GoogleCesAppLoggingSettings <a name="GoogleCesAppLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLoggingSettings {
    GoogleCesAppLoggingSettingsAudioRecordingConfig AudioRecordingConfig = null,
    GoogleCesAppLoggingSettingsBigqueryExportSettings BigqueryExportSettings = null,
    GoogleCesAppLoggingSettingsCloudLoggingSettings CloudLoggingSettings = null,
    GoogleCesAppLoggingSettingsConversationLoggingSettings ConversationLoggingSettings = null,
    GoogleCesAppLoggingSettingsRedactionConfig RedactionConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.audioRecordingConfig">AudioRecordingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a></code> | audio_recording_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.bigqueryExportSettings">BigqueryExportSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a></code> | bigquery_export_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.cloudLoggingSettings">CloudLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a></code> | cloud_logging_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.conversationLoggingSettings">ConversationLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a></code> | conversation_logging_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.redactionConfig">RedactionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a></code> | redaction_config block. |

---

##### `AudioRecordingConfig`<sup>Optional</sup> <a name="AudioRecordingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.audioRecordingConfig"></a>

```csharp
public GoogleCesAppLoggingSettingsAudioRecordingConfig AudioRecordingConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a>

audio_recording_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#audio_recording_config GoogleCesApp#audio_recording_config}

---

##### `BigqueryExportSettings`<sup>Optional</sup> <a name="BigqueryExportSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.bigqueryExportSettings"></a>

```csharp
public GoogleCesAppLoggingSettingsBigqueryExportSettings BigqueryExportSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a>

bigquery_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#bigquery_export_settings GoogleCesApp#bigquery_export_settings}

---

##### `CloudLoggingSettings`<sup>Optional</sup> <a name="CloudLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.cloudLoggingSettings"></a>

```csharp
public GoogleCesAppLoggingSettingsCloudLoggingSettings CloudLoggingSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a>

cloud_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#cloud_logging_settings GoogleCesApp#cloud_logging_settings}

---

##### `ConversationLoggingSettings`<sup>Optional</sup> <a name="ConversationLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.conversationLoggingSettings"></a>

```csharp
public GoogleCesAppLoggingSettingsConversationLoggingSettings ConversationLoggingSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a>

conversation_logging_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#conversation_logging_settings GoogleCesApp#conversation_logging_settings}

---

##### `RedactionConfig`<sup>Optional</sup> <a name="RedactionConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings.property.redactionConfig"></a>

```csharp
public GoogleCesAppLoggingSettingsRedactionConfig RedactionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a>

redaction_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#redaction_config GoogleCesApp#redaction_config}

---

### GoogleCesAppLoggingSettingsAudioRecordingConfig <a name="GoogleCesAppLoggingSettingsAudioRecordingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLoggingSettingsAudioRecordingConfig {
    string GcsBucket = null,
    string GcsPathPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket">GcsBucket</a></code> | <code>string</code> | The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix">GcsPathPrefix</a></code> | <code>string</code> | The Cloud Storage path prefix for audio recordings. |

---

##### `GcsBucket`<sup>Optional</sup> <a name="GcsBucket" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.property.gcsBucket"></a>

```csharp
public string GcsBucket { get; set; }
```

- *Type:* string

The [Cloud Storage](https://cloud.google.com/storage) bucket to store the session audio recordings. The URI must start with "gs://". Note: If the Cloud Storage bucket is in a different project from the app, you should grant 'storage.objects.create' permission to the CES service agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#gcs_bucket GoogleCesApp#gcs_bucket}

---

##### `GcsPathPrefix`<sup>Optional</sup> <a name="GcsPathPrefix" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig.property.gcsPathPrefix"></a>

```csharp
public string GcsPathPrefix { get; set; }
```

- *Type:* string

The Cloud Storage path prefix for audio recordings.

This prefix can include the following placeholders, which will be
dynamically substituted at serving time:

* $project:   project ID
* $location:  app location
* $app:       app ID
* $date:      session date in YYYY-MM-DD format
* $session:   session ID
  If the path prefix is not specified, the default prefix
  '$project/$location/$app/$date/$session/' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#gcs_path_prefix GoogleCesApp#gcs_path_prefix}

---

### GoogleCesAppLoggingSettingsBigqueryExportSettings <a name="GoogleCesAppLoggingSettingsBigqueryExportSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLoggingSettingsBigqueryExportSettings {
    string Dataset = null,
    bool|IResolvable Enabled = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.dataset">Dataset</a></code> | <code>string</code> | The BigQuery dataset to export the data to. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the BigQuery export is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.project">Project</a></code> | <code>string</code> | The project ID of the BigQuery dataset to export the data to. |

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

The BigQuery dataset to export the data to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#dataset GoogleCesApp#dataset}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the BigQuery export is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enabled GoogleCesApp#enabled}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project ID of the BigQuery dataset to export the data to.

Note: If the BigQuery dataset is in a different project from the app, you should grant
roles/bigquery.admin role to the CES service agent service-<PROJECT-
NUMBER>@gcp-sa-ces.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#project GoogleCesApp#project}

---

### GoogleCesAppLoggingSettingsCloudLoggingSettings <a name="GoogleCesAppLoggingSettingsCloudLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLoggingSettingsCloudLoggingSettings {
    bool|IResolvable EnableCloudLogging = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging">EnableCloudLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable Cloud Logging for the sessions. |

---

##### `EnableCloudLogging`<sup>Optional</sup> <a name="EnableCloudLogging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings.property.enableCloudLogging"></a>

```csharp
public bool|IResolvable EnableCloudLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable Cloud Logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enable_cloud_logging GoogleCesApp#enable_cloud_logging}

---

### GoogleCesAppLoggingSettingsConversationLoggingSettings <a name="GoogleCesAppLoggingSettingsConversationLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLoggingSettingsConversationLoggingSettings {
    bool|IResolvable DisableConversationLogging = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging">DisableConversationLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to disable conversation logging for the sessions. |

---

##### `DisableConversationLogging`<sup>Optional</sup> <a name="DisableConversationLogging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings.property.disableConversationLogging"></a>

```csharp
public bool|IResolvable DisableConversationLogging { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to disable conversation logging for the sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#disable_conversation_logging GoogleCesApp#disable_conversation_logging}

---

### GoogleCesAppLoggingSettingsRedactionConfig <a name="GoogleCesAppLoggingSettingsRedactionConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLoggingSettingsRedactionConfig {
    string DeidentifyTemplate = null,
    bool|IResolvable EnableRedaction = null,
    string InspectTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.enableRedaction">EnableRedaction</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'. |

---

##### `DeidentifyTemplate`<sup>Optional</sup> <a name="DeidentifyTemplate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; set; }
```

- *Type:* string

[DLP](https://cloud.google.com/dlp/docs) deidentify template name to instruct on how to de-identify content. Format: 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#deidentify_template GoogleCesApp#deidentify_template}

---

##### `EnableRedaction`<sup>Optional</sup> <a name="EnableRedaction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.enableRedaction"></a>

```csharp
public bool|IResolvable EnableRedaction { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, redaction will be applied in various logging scenarios, including conversation history, Cloud Logging and audio recording.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enable_redaction GoogleCesApp#enable_redaction}

---

##### `InspectTemplate`<sup>Optional</sup> <a name="InspectTemplate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; set; }
```

- *Type:* string

[DLP](https://cloud.google.com/dlp/docs) inspect template name to configure detection of sensitive data types. Format: 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#inspect_template GoogleCesApp#inspect_template}

---

### GoogleCesAppModelSettings <a name="GoogleCesAppModelSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppModelSettings {
    string Model = null,
    double Temperature = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.property.model">Model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.property.temperature">Temperature</a></code> | <code>double</code> | If set, this temperature will be used for the LLM model. |

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#model GoogleCesApp#model}

---

##### `Temperature`<sup>Optional</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings.property.temperature"></a>

```csharp
public double Temperature { get; set; }
```

- *Type:* double

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#temperature GoogleCesApp#temperature}

---

### GoogleCesAppTimeouts <a name="GoogleCesAppTimeouts" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#create GoogleCesApp#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#delete GoogleCesApp#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#update GoogleCesApp#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#create GoogleCesApp#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#delete GoogleCesApp#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#update GoogleCesApp#update}.

---

### GoogleCesAppTimeZoneSettings <a name="GoogleCesAppTimeZoneSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppTimeZoneSettings {
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings.property.timeZone">TimeZone</a></code> | <code>string</code> | The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris. |

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#time_zone GoogleCesApp#time_zone}

---

### GoogleCesAppVariableDeclarations <a name="GoogleCesAppVariableDeclarations" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppVariableDeclarations {
    string Description,
    string Name,
    GoogleCesAppVariableDeclarationsSchema Schema
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.description">Description</a></code> | <code>string</code> | The description of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.name">Name</a></code> | <code>string</code> | The name of the variable. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a></code> | schema block. |

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#description GoogleCesApp#description}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the variable.

The name must start with a letter or underscore
and contain only letters, numbers, or underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#name GoogleCesApp#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations.property.schema"></a>

```csharp
public GoogleCesAppVariableDeclarationsSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#schema GoogleCesApp#schema}

---

### GoogleCesAppVariableDeclarationsSchema <a name="GoogleCesAppVariableDeclarationsSchema" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppVariableDeclarationsSchema {
    string Type,
    string AdditionalProperties = null,
    string AnyOf = null,
    string Default = null,
    string Defs = null,
    string Description = null,
    string[] Enum = null,
    string Items = null,
    bool|IResolvable Nullable = null,
    string PrefixItems = null,
    string Properties = null,
    string Ref = null,
    string[] Required = null,
    string Title = null,
    bool|IResolvable UniqueItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.type">Type</a></code> | <code>string</code> | The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.additionalProperties">AdditionalProperties</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.anyOf">AnyOf</a></code> | <code>string</code> | Optional. The instance value should be valid against at least one of the schemas in this list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.default">Default</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.defs">Defs</a></code> | <code>string</code> | A map of definitions for use by ref. Only allowed at the root of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.description">Description</a></code> | <code>string</code> | The description of the data. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.enum">Enum</a></code> | <code>string[]</code> | Possible values of the element of primitive type with enum format. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.items">Items</a></code> | <code>string</code> | Schema of the elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.nullable">Nullable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if the value may be null. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.prefixItems">PrefixItems</a></code> | <code>string</code> | Optional. Schemas of initial elements of Type.ARRAY. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.properties">Properties</a></code> | <code>string</code> | Properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.ref">Ref</a></code> | <code>string</code> | Allows indirect references between schema nodes. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.required">Required</a></code> | <code>string[]</code> | Required properties of Type.OBJECT. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.title">Title</a></code> | <code>string</code> | The title of the schema. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.uniqueItems">UniqueItems</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicate the items in the array must be unique. Only applies to TYPE.ARRAY. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the data. Possible values: STRING INTEGER NUMBER BOOLEAN OBJECT ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#type GoogleCesApp#type}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.additionalProperties"></a>

```csharp
public string AdditionalProperties { get; set; }
```

- *Type:* string

Optional.

Defines the schema for additional properties allowed in an object.
The value must be a valid JSON string representing the Schema object.
(Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#additional_properties GoogleCesApp#additional_properties}

---

##### `AnyOf`<sup>Optional</sup> <a name="AnyOf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.anyOf"></a>

```csharp
public string AnyOf { get; set; }
```

- *Type:* string

Optional. The instance value should be valid against at least one of the schemas in this list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#any_of GoogleCesApp#any_of}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Optional.

Default value of the data. Represents a dynamically typed value
which can be either null, a number, a string, a boolean, a struct,
or a list of values. The provided default value must be encoded as a JSON string.
Use 'jsonencode' in Terraform HCL to encode the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#default GoogleCesApp#default}

---

##### `Defs`<sup>Optional</sup> <a name="Defs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.defs"></a>

```csharp
public string Defs { get; set; }
```

- *Type:* string

A map of definitions for use by ref. Only allowed at the root of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#defs GoogleCesApp#defs}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#description GoogleCesApp#description}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.enum"></a>

```csharp
public string[] Enum { get; set; }
```

- *Type:* string[]

Possible values of the element of primitive type with enum format.

Examples:

1. We can define direction as :
   {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
2. We can define apartment number as :
   {type:INTEGER, format:enum, enum:["101", "201", "301"]}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#enum GoogleCesApp#enum}

---

##### `Items`<sup>Optional</sup> <a name="Items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.items"></a>

```csharp
public string Items { get; set; }
```

- *Type:* string

Schema of the elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#items GoogleCesApp#items}

---

##### `Nullable`<sup>Optional</sup> <a name="Nullable" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.nullable"></a>

```csharp
public bool|IResolvable Nullable { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if the value may be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#nullable GoogleCesApp#nullable}

---

##### `PrefixItems`<sup>Optional</sup> <a name="PrefixItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.prefixItems"></a>

```csharp
public string PrefixItems { get; set; }
```

- *Type:* string

Optional. Schemas of initial elements of Type.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#prefix_items GoogleCesApp#prefix_items}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.properties"></a>

```csharp
public string Properties { get; set; }
```

- *Type:* string

Properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#properties GoogleCesApp#properties}

---

##### `Ref`<sup>Optional</sup> <a name="Ref" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.ref"></a>

```csharp
public string Ref { get; set; }
```

- *Type:* string

Allows indirect references between schema nodes.

The value should be a
valid reference to a child of the root 'defs'.
For example, the following schema defines a reference to a schema node
named "Pet":
type: object
properties:
pet:
ref: #/defs/Pet
defs:
Pet:
type: object
properties:
name:
type: string
The value of the "pet" property is a reference to the schema node
named "Pet".
See details in
https://json-schema.org/understanding-json-schema/structuring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#ref GoogleCesApp#ref}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.required"></a>

```csharp
public string[] Required { get; set; }
```

- *Type:* string[]

Required properties of Type.OBJECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#required GoogleCesApp#required}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#title GoogleCesApp#title}

---

##### `UniqueItems`<sup>Optional</sup> <a name="UniqueItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema.property.uniqueItems"></a>

```csharp
public bool|IResolvable UniqueItems { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_ces_app#unique_items GoogleCesApp#unique_items}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference <a name="GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri">ResetGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound">ResetPrebuiltAmbientSound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb">ResetVolumeGainDb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcsUri` <a name="ResetGcsUri" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetGcsUri"></a>

```csharp
private void ResetGcsUri()
```

##### `ResetPrebuiltAmbientSound` <a name="ResetPrebuiltAmbientSound" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetPrebuiltAmbientSound"></a>

```csharp
private void ResetPrebuiltAmbientSound()
```

##### `ResetVolumeGainDb` <a name="ResetVolumeGainDb" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.resetVolumeGainDb"></a>

```csharp
private void ResetVolumeGainDb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput">GcsUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput">PrebuiltAmbientSoundInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput">VolumeGainDbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri">GcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound">PrebuiltAmbientSound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb">VolumeGainDb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcsUriInput`<sup>Optional</sup> <a name="GcsUriInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUriInput"></a>

```csharp
public string GcsUriInput { get; }
```

- *Type:* string

---

##### `PrebuiltAmbientSoundInput`<sup>Optional</sup> <a name="PrebuiltAmbientSoundInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSoundInput"></a>

```csharp
public string PrebuiltAmbientSoundInput { get; }
```

- *Type:* string

---

##### `VolumeGainDbInput`<sup>Optional</sup> <a name="VolumeGainDbInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDbInput"></a>

```csharp
public double VolumeGainDbInput { get; }
```

- *Type:* double

---

##### `GcsUri`<sup>Required</sup> <a name="GcsUri" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.gcsUri"></a>

```csharp
public string GcsUri { get; }
```

- *Type:* string

---

##### `PrebuiltAmbientSound`<sup>Required</sup> <a name="PrebuiltAmbientSound" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.prebuiltAmbientSound"></a>

```csharp
public string PrebuiltAmbientSound { get; }
```

- *Type:* string

---

##### `VolumeGainDb`<sup>Required</sup> <a name="VolumeGainDb" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.volumeGainDb"></a>

```csharp
public double VolumeGainDb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppAudioProcessingConfigAmbientSoundConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a>

---


### GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference <a name="GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness">ResetBargeInAwareness</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBargeInAwareness` <a name="ResetBargeInAwareness" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.resetBargeInAwareness"></a>

```csharp
private void ResetBargeInAwareness()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput">BargeInAwarenessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness">BargeInAwareness</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BargeInAwarenessInput`<sup>Optional</sup> <a name="BargeInAwarenessInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwarenessInput"></a>

```csharp
public bool|IResolvable BargeInAwarenessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BargeInAwareness`<sup>Required</sup> <a name="BargeInAwareness" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.bargeInAwareness"></a>

```csharp
public bool|IResolvable BargeInAwareness { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppAudioProcessingConfigBargeInConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a>

---


### GoogleCesAppAudioProcessingConfigOutputReference <a name="GoogleCesAppAudioProcessingConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppAudioProcessingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig">PutAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putBargeInConfig">PutBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs">PutSynthesizeSpeechConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig">ResetAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetBargeInConfig">ResetBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetInactivityTimeout">ResetInactivityTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs">ResetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmbientSoundConfig` <a name="PutAmbientSoundConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig"></a>

```csharp
private void PutAmbientSoundConfig(GoogleCesAppAudioProcessingConfigAmbientSoundConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putAmbientSoundConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a>

---

##### `PutBargeInConfig` <a name="PutBargeInConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putBargeInConfig"></a>

```csharp
private void PutBargeInConfig(GoogleCesAppAudioProcessingConfigBargeInConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putBargeInConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a>

---

##### `PutSynthesizeSpeechConfigs` <a name="PutSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs"></a>

```csharp
private void PutSynthesizeSpeechConfigs(IResolvable|GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]

---

##### `ResetAmbientSoundConfig` <a name="ResetAmbientSoundConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetAmbientSoundConfig"></a>

```csharp
private void ResetAmbientSoundConfig()
```

##### `ResetBargeInConfig` <a name="ResetBargeInConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetBargeInConfig"></a>

```csharp
private void ResetBargeInConfig()
```

##### `ResetInactivityTimeout` <a name="ResetInactivityTimeout" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetInactivityTimeout"></a>

```csharp
private void ResetInactivityTimeout()
```

##### `ResetSynthesizeSpeechConfigs` <a name="ResetSynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.resetSynthesizeSpeechConfigs"></a>

```csharp
private void ResetSynthesizeSpeechConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig">AmbientSoundConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference">GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.bargeInConfig">BargeInConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference">GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs">SynthesizeSpeechConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput">AmbientSoundConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput">BargeInConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput">InactivityTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput">SynthesizeSpeechConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.inactivityTimeout">InactivityTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmbientSoundConfig`<sup>Required</sup> <a name="AmbientSoundConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.ambientSoundConfig"></a>

```csharp
public GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference AmbientSoundConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference">GoogleCesAppAudioProcessingConfigAmbientSoundConfigOutputReference</a>

---

##### `BargeInConfig`<sup>Required</sup> <a name="BargeInConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.bargeInConfig"></a>

```csharp
public GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference BargeInConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference">GoogleCesAppAudioProcessingConfigBargeInConfigOutputReference</a>

---

##### `SynthesizeSpeechConfigs`<sup>Required</sup> <a name="SynthesizeSpeechConfigs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigs"></a>

```csharp
public GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList SynthesizeSpeechConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList</a>

---

##### `AmbientSoundConfigInput`<sup>Optional</sup> <a name="AmbientSoundConfigInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.ambientSoundConfigInput"></a>

```csharp
public GoogleCesAppAudioProcessingConfigAmbientSoundConfig AmbientSoundConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigAmbientSoundConfig">GoogleCesAppAudioProcessingConfigAmbientSoundConfig</a>

---

##### `BargeInConfigInput`<sup>Optional</sup> <a name="BargeInConfigInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.bargeInConfigInput"></a>

```csharp
public GoogleCesAppAudioProcessingConfigBargeInConfig BargeInConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigBargeInConfig">GoogleCesAppAudioProcessingConfigBargeInConfig</a>

---

##### `InactivityTimeoutInput`<sup>Optional</sup> <a name="InactivityTimeoutInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.inactivityTimeoutInput"></a>

```csharp
public string InactivityTimeoutInput { get; }
```

- *Type:* string

---

##### `SynthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="SynthesizeSpeechConfigsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.synthesizeSpeechConfigsInput"></a>

```csharp
public IResolvable|GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs[] SynthesizeSpeechConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]

---

##### `InactivityTimeout`<sup>Required</sup> <a name="InactivityTimeout" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.inactivityTimeout"></a>

```csharp
public string InactivityTimeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppAudioProcessingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfig">GoogleCesAppAudioProcessingConfig</a>

---


### GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList <a name="GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get"></a>

```csharp
private GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>[]

---


### GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference <a name="GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">ResetSpeakingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice">ResetVoice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpeakingRate` <a name="ResetSpeakingRate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```csharp
private void ResetSpeakingRate()
```

##### `ResetVoice` <a name="ResetVoice" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```csharp
private void ResetVoice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">SpeakingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput">VoiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate">SpeakingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice">Voice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `SpeakingRateInput`<sup>Optional</sup> <a name="SpeakingRateInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```csharp
public double SpeakingRateInput { get; }
```

- *Type:* double

---

##### `VoiceInput`<sup>Optional</sup> <a name="VoiceInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```csharp
public string VoiceInput { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `SpeakingRate`<sup>Required</sup> <a name="SpeakingRate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```csharp
public double SpeakingRate { get; }
```

- *Type:* double

---

##### `Voice`<sup>Required</sup> <a name="Voice" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```csharp
public string Voice { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs">GoogleCesAppAudioProcessingConfigSynthesizeSpeechConfigs</a>

---


### GoogleCesAppClientCertificateSettingsOutputReference <a name="GoogleCesAppClientCertificateSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppClientCertificateSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resetPassphrase">ResetPassphrase</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassphrase` <a name="ResetPassphrase" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.resetPassphrase"></a>

```csharp
private void ResetPassphrase()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.passphraseInput">PassphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput">TlsCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.passphrase">Passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.tlsCertificate">TlsCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PassphraseInput`<sup>Optional</sup> <a name="PassphraseInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.passphraseInput"></a>

```csharp
public string PassphraseInput { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `TlsCertificateInput`<sup>Optional</sup> <a name="TlsCertificateInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.tlsCertificateInput"></a>

```csharp
public string TlsCertificateInput { get; }
```

- *Type:* string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.passphrase"></a>

```csharp
public string Passphrase { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `TlsCertificate`<sup>Required</sup> <a name="TlsCertificate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.tlsCertificate"></a>

```csharp
public string TlsCertificate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppClientCertificateSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppClientCertificateSettings">GoogleCesAppClientCertificateSettings</a>

---


### GoogleCesAppDataStoreSettingsEnginesList <a name="GoogleCesAppDataStoreSettingsEnginesList" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppDataStoreSettingsEnginesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.get"></a>

```csharp
private GoogleCesAppDataStoreSettingsEnginesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleCesAppDataStoreSettingsEnginesOutputReference <a name="GoogleCesAppDataStoreSettingsEnginesOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppDataStoreSettingsEnginesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEngines">GoogleCesAppDataStoreSettingsEngines</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppDataStoreSettingsEngines InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEngines">GoogleCesAppDataStoreSettingsEngines</a>

---


### GoogleCesAppDataStoreSettingsOutputReference <a name="GoogleCesAppDataStoreSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppDataStoreSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.engines">Engines</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList">GoogleCesAppDataStoreSettingsEnginesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Engines`<sup>Required</sup> <a name="Engines" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.engines"></a>

```csharp
public GoogleCesAppDataStoreSettingsEnginesList Engines { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsEnginesList">GoogleCesAppDataStoreSettingsEnginesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppDataStoreSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDataStoreSettings">GoogleCesAppDataStoreSettings</a>

---


### GoogleCesAppDefaultChannelProfileOutputReference <a name="GoogleCesAppDefaultChannelProfileOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppDefaultChannelProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putPersonaProperty">PutPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putWebWidgetConfig">PutWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetChannelType">ResetChannelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl">ResetDisableBargeInControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetDisableDtmf">ResetDisableDtmf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetPersonaProperty">ResetPersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetProfileId">ResetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig">ResetWebWidgetConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPersonaProperty` <a name="PutPersonaProperty" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putPersonaProperty"></a>

```csharp
private void PutPersonaProperty(GoogleCesAppDefaultChannelProfilePersonaProperty Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putPersonaProperty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a>

---

##### `PutWebWidgetConfig` <a name="PutWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putWebWidgetConfig"></a>

```csharp
private void PutWebWidgetConfig(GoogleCesAppDefaultChannelProfileWebWidgetConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.putWebWidgetConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a>

---

##### `ResetChannelType` <a name="ResetChannelType" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetChannelType"></a>

```csharp
private void ResetChannelType()
```

##### `ResetDisableBargeInControl` <a name="ResetDisableBargeInControl" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetDisableBargeInControl"></a>

```csharp
private void ResetDisableBargeInControl()
```

##### `ResetDisableDtmf` <a name="ResetDisableDtmf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetDisableDtmf"></a>

```csharp
private void ResetDisableDtmf()
```

##### `ResetPersonaProperty` <a name="ResetPersonaProperty" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetPersonaProperty"></a>

```csharp
private void ResetPersonaProperty()
```

##### `ResetProfileId` <a name="ResetProfileId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetProfileId"></a>

```csharp
private void ResetProfileId()
```

##### `ResetWebWidgetConfig` <a name="ResetWebWidgetConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.resetWebWidgetConfig"></a>

```csharp
private void ResetWebWidgetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.personaProperty">PersonaProperty</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference">GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.webWidgetConfig">WebWidgetConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference">GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.channelTypeInput">ChannelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput">DisableBargeInControlInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableDtmfInput">DisableDtmfInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.personaPropertyInput">PersonaPropertyInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.profileIdInput">ProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput">WebWidgetConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.channelType">ChannelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableBargeInControl">DisableBargeInControl</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableDtmf">DisableDtmf</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PersonaProperty`<sup>Required</sup> <a name="PersonaProperty" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.personaProperty"></a>

```csharp
public GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference PersonaProperty { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference">GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference</a>

---

##### `WebWidgetConfig`<sup>Required</sup> <a name="WebWidgetConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.webWidgetConfig"></a>

```csharp
public GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference WebWidgetConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference">GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference</a>

---

##### `ChannelTypeInput`<sup>Optional</sup> <a name="ChannelTypeInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.channelTypeInput"></a>

```csharp
public string ChannelTypeInput { get; }
```

- *Type:* string

---

##### `DisableBargeInControlInput`<sup>Optional</sup> <a name="DisableBargeInControlInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableBargeInControlInput"></a>

```csharp
public bool|IResolvable DisableBargeInControlInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableDtmfInput`<sup>Optional</sup> <a name="DisableDtmfInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableDtmfInput"></a>

```csharp
public bool|IResolvable DisableDtmfInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PersonaPropertyInput`<sup>Optional</sup> <a name="PersonaPropertyInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.personaPropertyInput"></a>

```csharp
public GoogleCesAppDefaultChannelProfilePersonaProperty PersonaPropertyInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a>

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.profileIdInput"></a>

```csharp
public string ProfileIdInput { get; }
```

- *Type:* string

---

##### `WebWidgetConfigInput`<sup>Optional</sup> <a name="WebWidgetConfigInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.webWidgetConfigInput"></a>

```csharp
public GoogleCesAppDefaultChannelProfileWebWidgetConfig WebWidgetConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a>

---

##### `ChannelType`<sup>Required</sup> <a name="ChannelType" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.channelType"></a>

```csharp
public string ChannelType { get; }
```

- *Type:* string

---

##### `DisableBargeInControl`<sup>Required</sup> <a name="DisableBargeInControl" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableBargeInControl"></a>

```csharp
public bool|IResolvable DisableBargeInControl { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableDtmf`<sup>Required</sup> <a name="DisableDtmf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.disableDtmf"></a>

```csharp
public bool|IResolvable DisableDtmf { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppDefaultChannelProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfile">GoogleCesAppDefaultChannelProfile</a>

---


### GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference <a name="GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona">ResetPersona</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPersona` <a name="ResetPersona" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.resetPersona"></a>

```csharp
private void ResetPersona()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput">PersonaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona">Persona</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PersonaInput`<sup>Optional</sup> <a name="PersonaInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.personaInput"></a>

```csharp
public string PersonaInput { get; }
```

- *Type:* string

---

##### `Persona`<sup>Required</sup> <a name="Persona" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.persona"></a>

```csharp
public string Persona { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaPropertyOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppDefaultChannelProfilePersonaProperty InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfilePersonaProperty">GoogleCesAppDefaultChannelProfilePersonaProperty</a>

---


### GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference <a name="GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality">ResetModality</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme">ResetTheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle">ResetWebWidgetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModality` <a name="ResetModality" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetModality"></a>

```csharp
private void ResetModality()
```

##### `ResetTheme` <a name="ResetTheme" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetTheme"></a>

```csharp
private void ResetTheme()
```

##### `ResetWebWidgetTitle` <a name="ResetWebWidgetTitle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.resetWebWidgetTitle"></a>

```csharp
private void ResetWebWidgetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput">ModalityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput">ThemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput">WebWidgetTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality">Modality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme">Theme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle">WebWidgetTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModalityInput`<sup>Optional</sup> <a name="ModalityInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modalityInput"></a>

```csharp
public string ModalityInput { get; }
```

- *Type:* string

---

##### `ThemeInput`<sup>Optional</sup> <a name="ThemeInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.themeInput"></a>

```csharp
public string ThemeInput { get; }
```

- *Type:* string

---

##### `WebWidgetTitleInput`<sup>Optional</sup> <a name="WebWidgetTitleInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitleInput"></a>

```csharp
public string WebWidgetTitleInput { get; }
```

- *Type:* string

---

##### `Modality`<sup>Required</sup> <a name="Modality" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.modality"></a>

```csharp
public string Modality { get; }
```

- *Type:* string

---

##### `Theme`<sup>Required</sup> <a name="Theme" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.theme"></a>

```csharp
public string Theme { get; }
```

- *Type:* string

---

##### `WebWidgetTitle`<sup>Required</sup> <a name="WebWidgetTitle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.webWidgetTitle"></a>

```csharp
public string WebWidgetTitle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppDefaultChannelProfileWebWidgetConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppDefaultChannelProfileWebWidgetConfig">GoogleCesAppDefaultChannelProfileWebWidgetConfig</a>

---


### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold">ResetToolInvocationParameterCorrectnessThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetToolInvocationParameterCorrectnessThreshold` <a name="ResetToolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.resetToolInvocationParameterCorrectnessThreshold"></a>

```csharp
private void ResetToolInvocationParameterCorrectnessThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput">ToolInvocationParameterCorrectnessThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold">ToolInvocationParameterCorrectnessThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ToolInvocationParameterCorrectnessThresholdInput`<sup>Optional</sup> <a name="ToolInvocationParameterCorrectnessThresholdInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThresholdInput"></a>

```csharp
public double ToolInvocationParameterCorrectnessThresholdInput { get; }
```

- *Type:* double

---

##### `ToolInvocationParameterCorrectnessThreshold`<sup>Required</sup> <a name="ToolInvocationParameterCorrectnessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.toolInvocationParameterCorrectnessThreshold"></a>

```csharp
public double ToolInvocationParameterCorrectnessThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---


### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds">PutExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds">PutTurnLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds">ResetExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds">ResetTurnLevelMetricsThresholds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpectationLevelMetricsThresholds` <a name="PutExpectationLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds"></a>

```csharp
private void PutExpectationLevelMetricsThresholds(GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putExpectationLevelMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---

##### `PutTurnLevelMetricsThresholds` <a name="PutTurnLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds"></a>

```csharp
private void PutTurnLevelMetricsThresholds(GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.putTurnLevelMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---

##### `ResetExpectationLevelMetricsThresholds` <a name="ResetExpectationLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetExpectationLevelMetricsThresholds"></a>

```csharp
private void ResetExpectationLevelMetricsThresholds()
```

##### `ResetTurnLevelMetricsThresholds` <a name="ResetTurnLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.resetTurnLevelMetricsThresholds"></a>

```csharp
private void ResetTurnLevelMetricsThresholds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds">ExpectationLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds">TurnLevelMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput">ExpectationLevelMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput">TurnLevelMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpectationLevelMetricsThresholds`<sup>Required</sup> <a name="ExpectationLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholds"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference ExpectationLevelMetricsThresholds { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference</a>

---

##### `TurnLevelMetricsThresholds`<sup>Required</sup> <a name="TurnLevelMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholds"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference TurnLevelMetricsThresholds { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference</a>

---

##### `ExpectationLevelMetricsThresholdsInput`<sup>Optional</sup> <a name="ExpectationLevelMetricsThresholdsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.expectationLevelMetricsThresholdsInput"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds ExpectationLevelMetricsThresholdsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds</a>

---

##### `TurnLevelMetricsThresholdsInput`<sup>Optional</sup> <a name="TurnLevelMetricsThresholdsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.turnLevelMetricsThresholdsInput"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds TurnLevelMetricsThresholdsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---


### GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference <a name="GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold">ResetOverallToolInvocationCorrectnessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold">ResetSemanticSimilaritySuccessThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOverallToolInvocationCorrectnessThreshold` <a name="ResetOverallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetOverallToolInvocationCorrectnessThreshold"></a>

```csharp
private void ResetOverallToolInvocationCorrectnessThreshold()
```

##### `ResetSemanticSimilaritySuccessThreshold` <a name="ResetSemanticSimilaritySuccessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.resetSemanticSimilaritySuccessThreshold"></a>

```csharp
private void ResetSemanticSimilaritySuccessThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput">OverallToolInvocationCorrectnessThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput">SemanticSimilaritySuccessThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold">OverallToolInvocationCorrectnessThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold">SemanticSimilaritySuccessThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OverallToolInvocationCorrectnessThresholdInput`<sup>Optional</sup> <a name="OverallToolInvocationCorrectnessThresholdInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThresholdInput"></a>

```csharp
public double OverallToolInvocationCorrectnessThresholdInput { get; }
```

- *Type:* double

---

##### `SemanticSimilaritySuccessThresholdInput`<sup>Optional</sup> <a name="SemanticSimilaritySuccessThresholdInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThresholdInput"></a>

```csharp
public double SemanticSimilaritySuccessThresholdInput { get; }
```

- *Type:* double

---

##### `OverallToolInvocationCorrectnessThreshold`<sup>Required</sup> <a name="OverallToolInvocationCorrectnessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.overallToolInvocationCorrectnessThreshold"></a>

```csharp
public double OverallToolInvocationCorrectnessThreshold { get; }
```

- *Type:* double

---

##### `SemanticSimilaritySuccessThreshold`<sup>Required</sup> <a name="SemanticSimilaritySuccessThreshold" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.semanticSimilaritySuccessThreshold"></a>

```csharp
public double SemanticSimilaritySuccessThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds</a>

---


### GoogleCesAppEvaluationMetricsThresholdsOutputReference <a name="GoogleCesAppEvaluationMetricsThresholdsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppEvaluationMetricsThresholdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds">PutGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds">ResetGoldenEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGoldenEvaluationMetricsThresholds` <a name="PutGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds"></a>

```csharp
private void PutGoldenEvaluationMetricsThresholds(GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.putGoldenEvaluationMetricsThresholds.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---

##### `ResetGoldenEvaluationMetricsThresholds` <a name="ResetGoldenEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.resetGoldenEvaluationMetricsThresholds"></a>

```csharp
private void ResetGoldenEvaluationMetricsThresholds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds">GoldenEvaluationMetricsThresholds</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput">GoldenEvaluationMetricsThresholdsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoldenEvaluationMetricsThresholds`<sup>Required</sup> <a name="GoldenEvaluationMetricsThresholds" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholds"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference GoldenEvaluationMetricsThresholds { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference</a>

---

##### `GoldenEvaluationMetricsThresholdsInput`<sup>Optional</sup> <a name="GoldenEvaluationMetricsThresholdsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.goldenEvaluationMetricsThresholdsInput"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds GoldenEvaluationMetricsThresholdsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholdsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppEvaluationMetricsThresholds InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppEvaluationMetricsThresholds">GoogleCesAppEvaluationMetricsThresholds</a>

---


### GoogleCesAppLanguageSettingsOutputReference <a name="GoogleCesAppLanguageSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLanguageSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetDefaultLanguageCode">ResetDefaultLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport">ResetEnableMultilingualSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetFallbackAction">ResetFallbackAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes">ResetSupportedLanguageCodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultLanguageCode` <a name="ResetDefaultLanguageCode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetDefaultLanguageCode"></a>

```csharp
private void ResetDefaultLanguageCode()
```

##### `ResetEnableMultilingualSupport` <a name="ResetEnableMultilingualSupport" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetEnableMultilingualSupport"></a>

```csharp
private void ResetEnableMultilingualSupport()
```

##### `ResetFallbackAction` <a name="ResetFallbackAction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetFallbackAction"></a>

```csharp
private void ResetFallbackAction()
```

##### `ResetSupportedLanguageCodes` <a name="ResetSupportedLanguageCodes" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.resetSupportedLanguageCodes"></a>

```csharp
private void ResetSupportedLanguageCodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput">DefaultLanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput">EnableMultilingualSupportInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fallbackActionInput">FallbackActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput">SupportedLanguageCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.enableMultilingualSupport">EnableMultilingualSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fallbackAction">FallbackAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.supportedLanguageCodes">SupportedLanguageCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultLanguageCodeInput`<sup>Optional</sup> <a name="DefaultLanguageCodeInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.defaultLanguageCodeInput"></a>

```csharp
public string DefaultLanguageCodeInput { get; }
```

- *Type:* string

---

##### `EnableMultilingualSupportInput`<sup>Optional</sup> <a name="EnableMultilingualSupportInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.enableMultilingualSupportInput"></a>

```csharp
public bool|IResolvable EnableMultilingualSupportInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FallbackActionInput`<sup>Optional</sup> <a name="FallbackActionInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fallbackActionInput"></a>

```csharp
public string FallbackActionInput { get; }
```

- *Type:* string

---

##### `SupportedLanguageCodesInput`<sup>Optional</sup> <a name="SupportedLanguageCodesInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.supportedLanguageCodesInput"></a>

```csharp
public string[] SupportedLanguageCodesInput { get; }
```

- *Type:* string[]

---

##### `DefaultLanguageCode`<sup>Required</sup> <a name="DefaultLanguageCode" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.defaultLanguageCode"></a>

```csharp
public string DefaultLanguageCode { get; }
```

- *Type:* string

---

##### `EnableMultilingualSupport`<sup>Required</sup> <a name="EnableMultilingualSupport" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.enableMultilingualSupport"></a>

```csharp
public bool|IResolvable EnableMultilingualSupport { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FallbackAction`<sup>Required</sup> <a name="FallbackAction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.fallbackAction"></a>

```csharp
public string FallbackAction { get; }
```

- *Type:* string

---

##### `SupportedLanguageCodes`<sup>Required</sup> <a name="SupportedLanguageCodes" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.supportedLanguageCodes"></a>

```csharp
public string[] SupportedLanguageCodes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppLanguageSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLanguageSettings">GoogleCesAppLanguageSettings</a>

---


### GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference <a name="GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket">ResetGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix">ResetGcsPathPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcsBucket` <a name="ResetGcsBucket" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsBucket"></a>

```csharp
private void ResetGcsBucket()
```

##### `ResetGcsPathPrefix` <a name="ResetGcsPathPrefix" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.resetGcsPathPrefix"></a>

```csharp
private void ResetGcsPathPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput">GcsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput">GcsPathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket">GcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix">GcsPathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcsBucketInput`<sup>Optional</sup> <a name="GcsBucketInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucketInput"></a>

```csharp
public string GcsBucketInput { get; }
```

- *Type:* string

---

##### `GcsPathPrefixInput`<sup>Optional</sup> <a name="GcsPathPrefixInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefixInput"></a>

```csharp
public string GcsPathPrefixInput { get; }
```

- *Type:* string

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsBucket"></a>

```csharp
public string GcsBucket { get; }
```

- *Type:* string

---

##### `GcsPathPrefix`<sup>Required</sup> <a name="GcsPathPrefix" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.gcsPathPrefix"></a>

```csharp
public string GcsPathPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppLoggingSettingsAudioRecordingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a>

---


### GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference <a name="GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataset` <a name="ResetDataset" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.resetProject"></a>

```csharp
private void ResetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppLoggingSettingsBigqueryExportSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a>

---


### GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference <a name="GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging">ResetEnableCloudLogging</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableCloudLogging` <a name="ResetEnableCloudLogging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.resetEnableCloudLogging"></a>

```csharp
private void ResetEnableCloudLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput">EnableCloudLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging">EnableCloudLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableCloudLoggingInput`<sup>Optional</sup> <a name="EnableCloudLoggingInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLoggingInput"></a>

```csharp
public bool|IResolvable EnableCloudLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableCloudLogging`<sup>Required</sup> <a name="EnableCloudLogging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.enableCloudLogging"></a>

```csharp
public bool|IResolvable EnableCloudLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppLoggingSettingsCloudLoggingSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a>

---


### GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference <a name="GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging">ResetDisableConversationLogging</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableConversationLogging` <a name="ResetDisableConversationLogging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.resetDisableConversationLogging"></a>

```csharp
private void ResetDisableConversationLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput">DisableConversationLoggingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging">DisableConversationLogging</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableConversationLoggingInput`<sup>Optional</sup> <a name="DisableConversationLoggingInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLoggingInput"></a>

```csharp
public bool|IResolvable DisableConversationLoggingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisableConversationLogging`<sup>Required</sup> <a name="DisableConversationLogging" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.disableConversationLogging"></a>

```csharp
public bool|IResolvable DisableConversationLogging { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppLoggingSettingsConversationLoggingSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a>

---


### GoogleCesAppLoggingSettingsOutputReference <a name="GoogleCesAppLoggingSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLoggingSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putAudioRecordingConfig">PutAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putBigqueryExportSettings">PutBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putCloudLoggingSettings">PutCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putConversationLoggingSettings">PutConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putRedactionConfig">PutRedactionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetAudioRecordingConfig">ResetAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetBigqueryExportSettings">ResetBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetCloudLoggingSettings">ResetCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetConversationLoggingSettings">ResetConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetRedactionConfig">ResetRedactionConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioRecordingConfig` <a name="PutAudioRecordingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putAudioRecordingConfig"></a>

```csharp
private void PutAudioRecordingConfig(GoogleCesAppLoggingSettingsAudioRecordingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putAudioRecordingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a>

---

##### `PutBigqueryExportSettings` <a name="PutBigqueryExportSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putBigqueryExportSettings"></a>

```csharp
private void PutBigqueryExportSettings(GoogleCesAppLoggingSettingsBigqueryExportSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putBigqueryExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a>

---

##### `PutCloudLoggingSettings` <a name="PutCloudLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putCloudLoggingSettings"></a>

```csharp
private void PutCloudLoggingSettings(GoogleCesAppLoggingSettingsCloudLoggingSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putCloudLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a>

---

##### `PutConversationLoggingSettings` <a name="PutConversationLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putConversationLoggingSettings"></a>

```csharp
private void PutConversationLoggingSettings(GoogleCesAppLoggingSettingsConversationLoggingSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putConversationLoggingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a>

---

##### `PutRedactionConfig` <a name="PutRedactionConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putRedactionConfig"></a>

```csharp
private void PutRedactionConfig(GoogleCesAppLoggingSettingsRedactionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.putRedactionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a>

---

##### `ResetAudioRecordingConfig` <a name="ResetAudioRecordingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetAudioRecordingConfig"></a>

```csharp
private void ResetAudioRecordingConfig()
```

##### `ResetBigqueryExportSettings` <a name="ResetBigqueryExportSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetBigqueryExportSettings"></a>

```csharp
private void ResetBigqueryExportSettings()
```

##### `ResetCloudLoggingSettings` <a name="ResetCloudLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetCloudLoggingSettings"></a>

```csharp
private void ResetCloudLoggingSettings()
```

##### `ResetConversationLoggingSettings` <a name="ResetConversationLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetConversationLoggingSettings"></a>

```csharp
private void ResetConversationLoggingSettings()
```

##### `ResetRedactionConfig` <a name="ResetRedactionConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.resetRedactionConfig"></a>

```csharp
private void ResetRedactionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.audioRecordingConfig">AudioRecordingConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference">GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.bigqueryExportSettings">BigqueryExportSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference">GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.cloudLoggingSettings">CloudLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.conversationLoggingSettings">ConversationLoggingSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.redactionConfig">RedactionConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference">GoogleCesAppLoggingSettingsRedactionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput">AudioRecordingConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput">BigqueryExportSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput">CloudLoggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput">ConversationLoggingSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.redactionConfigInput">RedactionConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioRecordingConfig`<sup>Required</sup> <a name="AudioRecordingConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.audioRecordingConfig"></a>

```csharp
public GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference AudioRecordingConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference">GoogleCesAppLoggingSettingsAudioRecordingConfigOutputReference</a>

---

##### `BigqueryExportSettings`<sup>Required</sup> <a name="BigqueryExportSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.bigqueryExportSettings"></a>

```csharp
public GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference BigqueryExportSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference">GoogleCesAppLoggingSettingsBigqueryExportSettingsOutputReference</a>

---

##### `CloudLoggingSettings`<sup>Required</sup> <a name="CloudLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.cloudLoggingSettings"></a>

```csharp
public GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference CloudLoggingSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsCloudLoggingSettingsOutputReference</a>

---

##### `ConversationLoggingSettings`<sup>Required</sup> <a name="ConversationLoggingSettings" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.conversationLoggingSettings"></a>

```csharp
public GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference ConversationLoggingSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference">GoogleCesAppLoggingSettingsConversationLoggingSettingsOutputReference</a>

---

##### `RedactionConfig`<sup>Required</sup> <a name="RedactionConfig" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.redactionConfig"></a>

```csharp
public GoogleCesAppLoggingSettingsRedactionConfigOutputReference RedactionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference">GoogleCesAppLoggingSettingsRedactionConfigOutputReference</a>

---

##### `AudioRecordingConfigInput`<sup>Optional</sup> <a name="AudioRecordingConfigInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.audioRecordingConfigInput"></a>

```csharp
public GoogleCesAppLoggingSettingsAudioRecordingConfig AudioRecordingConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsAudioRecordingConfig">GoogleCesAppLoggingSettingsAudioRecordingConfig</a>

---

##### `BigqueryExportSettingsInput`<sup>Optional</sup> <a name="BigqueryExportSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.bigqueryExportSettingsInput"></a>

```csharp
public GoogleCesAppLoggingSettingsBigqueryExportSettings BigqueryExportSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsBigqueryExportSettings">GoogleCesAppLoggingSettingsBigqueryExportSettings</a>

---

##### `CloudLoggingSettingsInput`<sup>Optional</sup> <a name="CloudLoggingSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.cloudLoggingSettingsInput"></a>

```csharp
public GoogleCesAppLoggingSettingsCloudLoggingSettings CloudLoggingSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsCloudLoggingSettings">GoogleCesAppLoggingSettingsCloudLoggingSettings</a>

---

##### `ConversationLoggingSettingsInput`<sup>Optional</sup> <a name="ConversationLoggingSettingsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.conversationLoggingSettingsInput"></a>

```csharp
public GoogleCesAppLoggingSettingsConversationLoggingSettings ConversationLoggingSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsConversationLoggingSettings">GoogleCesAppLoggingSettingsConversationLoggingSettings</a>

---

##### `RedactionConfigInput`<sup>Optional</sup> <a name="RedactionConfigInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.redactionConfigInput"></a>

```csharp
public GoogleCesAppLoggingSettingsRedactionConfig RedactionConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppLoggingSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettings">GoogleCesAppLoggingSettings</a>

---


### GoogleCesAppLoggingSettingsRedactionConfigOutputReference <a name="GoogleCesAppLoggingSettingsRedactionConfigOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppLoggingSettingsRedactionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate">ResetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction">ResetEnableRedaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate">ResetInspectTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeidentifyTemplate` <a name="ResetDeidentifyTemplate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetDeidentifyTemplate"></a>

```csharp
private void ResetDeidentifyTemplate()
```

##### `ResetEnableRedaction` <a name="ResetEnableRedaction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetEnableRedaction"></a>

```csharp
private void ResetEnableRedaction()
```

##### `ResetInspectTemplate` <a name="ResetInspectTemplate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.resetInspectTemplate"></a>

```csharp
private void ResetInspectTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput">DeidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput">EnableRedactionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput">InspectTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction">EnableRedaction</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeidentifyTemplateInput`<sup>Optional</sup> <a name="DeidentifyTemplateInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplateInput"></a>

```csharp
public string DeidentifyTemplateInput { get; }
```

- *Type:* string

---

##### `EnableRedactionInput`<sup>Optional</sup> <a name="EnableRedactionInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedactionInput"></a>

```csharp
public bool|IResolvable EnableRedactionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InspectTemplateInput`<sup>Optional</sup> <a name="InspectTemplateInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplateInput"></a>

```csharp
public string InspectTemplateInput { get; }
```

- *Type:* string

---

##### `DeidentifyTemplate`<sup>Required</sup> <a name="DeidentifyTemplate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; }
```

- *Type:* string

---

##### `EnableRedaction`<sup>Required</sup> <a name="EnableRedaction" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.enableRedaction"></a>

```csharp
public bool|IResolvable EnableRedaction { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InspectTemplate`<sup>Required</sup> <a name="InspectTemplate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppLoggingSettingsRedactionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppLoggingSettingsRedactionConfig">GoogleCesAppLoggingSettingsRedactionConfig</a>

---


### GoogleCesAppModelSettingsOutputReference <a name="GoogleCesAppModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppModelSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resetTemperature">ResetTemperature</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModel` <a name="ResetModel" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetTemperature` <a name="ResetTemperature" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.resetTemperature"></a>

```csharp
private void ResetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.temperatureInput">TemperatureInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.temperature">Temperature</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `TemperatureInput`<sup>Optional</sup> <a name="TemperatureInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.temperatureInput"></a>

```csharp
public double TemperatureInput { get; }
```

- *Type:* double

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Temperature`<sup>Required</sup> <a name="Temperature" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.temperature"></a>

```csharp
public double Temperature { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppModelSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppModelSettings">GoogleCesAppModelSettings</a>

---


### GoogleCesAppTimeoutsOutputReference <a name="GoogleCesAppTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAppTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeouts">GoogleCesAppTimeouts</a>

---


### GoogleCesAppTimeZoneSettingsOutputReference <a name="GoogleCesAppTimeZoneSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppTimeZoneSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppTimeZoneSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppTimeZoneSettings">GoogleCesAppTimeZoneSettings</a>

---


### GoogleCesAppVariableDeclarationsList <a name="GoogleCesAppVariableDeclarationsList" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppVariableDeclarationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.get"></a>

```csharp
private GoogleCesAppVariableDeclarationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAppVariableDeclarations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>[]

---


### GoogleCesAppVariableDeclarationsOutputReference <a name="GoogleCesAppVariableDeclarationsOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppVariableDeclarationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema">PutSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema"></a>

```csharp
private void PutSchema(GoogleCesAppVariableDeclarationsSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference">GoogleCesAppVariableDeclarationsSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.schema"></a>

```csharp
public GoogleCesAppVariableDeclarationsSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference">GoogleCesAppVariableDeclarationsSchemaOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.schemaInput"></a>

```csharp
public GoogleCesAppVariableDeclarationsSchema SchemaInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleCesAppVariableDeclarations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarations">GoogleCesAppVariableDeclarations</a>

---


### GoogleCesAppVariableDeclarationsSchemaOutputReference <a name="GoogleCesAppVariableDeclarationsSchemaOutputReference" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleCesAppVariableDeclarationsSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetAnyOf">ResetAnyOf</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDefs">ResetDefs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetItems">ResetItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetNullable">ResetNullable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems">ResetPrefixItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetRef">ResetRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems">ResetUniqueItems</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnyOf` <a name="ResetAnyOf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetAnyOf"></a>

```csharp
private void ResetAnyOf()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDefs` <a name="ResetDefs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDefs"></a>

```csharp
private void ResetDefs()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetEnum"></a>

```csharp
private void ResetEnum()
```

##### `ResetItems` <a name="ResetItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetItems"></a>

```csharp
private void ResetItems()
```

##### `ResetNullable` <a name="ResetNullable" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetNullable"></a>

```csharp
private void ResetNullable()
```

##### `ResetPrefixItems` <a name="ResetPrefixItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetPrefixItems"></a>

```csharp
private void ResetPrefixItems()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetRef` <a name="ResetRef" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetRef"></a>

```csharp
private void ResetRef()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetUniqueItems` <a name="ResetUniqueItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.resetUniqueItems"></a>

```csharp
private void ResetUniqueItems()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput">AnyOfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defsInput">DefsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.enumInput">EnumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.itemsInput">ItemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.nullableInput">NullableInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput">PrefixItemsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.refInput">RefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.requiredInput">RequiredInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput">UniqueItemsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.anyOf">AnyOf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defs">Defs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.enum">Enum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.items">Items</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.nullable">Nullable</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.prefixItems">PrefixItems</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.properties">Properties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.ref">Ref</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.required">Required</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems">UniqueItems</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.additionalPropertiesInput"></a>

```csharp
public string AdditionalPropertiesInput { get; }
```

- *Type:* string

---

##### `AnyOfInput`<sup>Optional</sup> <a name="AnyOfInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.anyOfInput"></a>

```csharp
public string AnyOfInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DefsInput`<sup>Optional</sup> <a name="DefsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defsInput"></a>

```csharp
public string DefsInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.enumInput"></a>

```csharp
public string[] EnumInput { get; }
```

- *Type:* string[]

---

##### `ItemsInput`<sup>Optional</sup> <a name="ItemsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.itemsInput"></a>

```csharp
public string ItemsInput { get; }
```

- *Type:* string

---

##### `NullableInput`<sup>Optional</sup> <a name="NullableInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.nullableInput"></a>

```csharp
public bool|IResolvable NullableInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixItemsInput`<sup>Optional</sup> <a name="PrefixItemsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.prefixItemsInput"></a>

```csharp
public string PrefixItemsInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.propertiesInput"></a>

```csharp
public string PropertiesInput { get; }
```

- *Type:* string

---

##### `RefInput`<sup>Optional</sup> <a name="RefInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.refInput"></a>

```csharp
public string RefInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.requiredInput"></a>

```csharp
public string[] RequiredInput { get; }
```

- *Type:* string[]

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UniqueItemsInput`<sup>Optional</sup> <a name="UniqueItemsInput" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.uniqueItemsInput"></a>

```csharp
public bool|IResolvable UniqueItemsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.additionalProperties"></a>

```csharp
public string AdditionalProperties { get; }
```

- *Type:* string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.anyOf"></a>

```csharp
public string AnyOf { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Defs`<sup>Required</sup> <a name="Defs" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.defs"></a>

```csharp
public string Defs { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.enum"></a>

```csharp
public string[] Enum { get; }
```

- *Type:* string[]

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.items"></a>

```csharp
public string Items { get; }
```

- *Type:* string

---

##### `Nullable`<sup>Required</sup> <a name="Nullable" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.nullable"></a>

```csharp
public bool|IResolvable Nullable { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixItems`<sup>Required</sup> <a name="PrefixItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.prefixItems"></a>

```csharp
public string PrefixItems { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.properties"></a>

```csharp
public string Properties { get; }
```

- *Type:* string

---

##### `Ref`<sup>Required</sup> <a name="Ref" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.ref"></a>

```csharp
public string Ref { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.required"></a>

```csharp
public string[] Required { get; }
```

- *Type:* string[]

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UniqueItems`<sup>Required</sup> <a name="UniqueItems" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.uniqueItems"></a>

```csharp
public bool|IResolvable UniqueItems { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchemaOutputReference.property.internalValue"></a>

```csharp
public GoogleCesAppVariableDeclarationsSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesApp.GoogleCesAppVariableDeclarationsSchema">GoogleCesAppVariableDeclarationsSchema</a>

---



