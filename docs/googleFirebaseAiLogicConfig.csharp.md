# `googleFirebaseAiLogicConfig` Submodule <a name="`googleFirebaseAiLogicConfig` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAiLogicConfig <a name="GoogleFirebaseAiLogicConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config google_firebase_ai_logic_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicConfig(Construct Scope, string Id, GoogleFirebaseAiLogicConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig">GoogleFirebaseAiLogicConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig">GoogleFirebaseAiLogicConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig">PutGenerativeLanguageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig">PutTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTrafficFilter">PutTrafficFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetGenerativeLanguageConfig">ResetGenerativeLanguageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTelemetryConfig">ResetTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTrafficFilter">ResetTrafficFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGenerativeLanguageConfig` <a name="PutGenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig"></a>

```csharp
private void PutGenerativeLanguageConfig(GoogleFirebaseAiLogicConfigGenerativeLanguageConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

---

##### `PutTelemetryConfig` <a name="PutTelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig"></a>

```csharp
private void PutTelemetryConfig(GoogleFirebaseAiLogicConfigTelemetryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleFirebaseAiLogicConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

---

##### `PutTrafficFilter` <a name="PutTrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTrafficFilter"></a>

```csharp
private void PutTrafficFilter(GoogleFirebaseAiLogicConfigTrafficFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTrafficFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetGenerativeLanguageConfig` <a name="ResetGenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetGenerativeLanguageConfig"></a>

```csharp
private void ResetGenerativeLanguageConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTelemetryConfig` <a name="ResetTelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTelemetryConfig"></a>

```csharp
private void ResetTelemetryConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTrafficFilter` <a name="ResetTrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTrafficFilter"></a>

```csharp
private void ResetTrafficFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseAiLogicConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseAiLogicConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseAiLogicConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseAiLogicConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleFirebaseAiLogicConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleFirebaseAiLogicConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAiLogicConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAiLogicConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAiLogicConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfig">GenerativeLanguageConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference">GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference">GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference">GoogleFirebaseAiLogicConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilter">TrafficFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference">GoogleFirebaseAiLogicConfigTrafficFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfigInput">GenerativeLanguageConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfigInput">TelemetryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilterInput">TrafficFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GenerativeLanguageConfig`<sup>Required</sup> <a name="GenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfig"></a>

```csharp
public GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference GenerativeLanguageConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference">GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TelemetryConfig`<sup>Required</sup> <a name="TelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfig"></a>

```csharp
public GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference TelemetryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference">GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeouts"></a>

```csharp
public GoogleFirebaseAiLogicConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference">GoogleFirebaseAiLogicConfigTimeoutsOutputReference</a>

---

##### `TrafficFilter`<sup>Required</sup> <a name="TrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilter"></a>

```csharp
public GoogleFirebaseAiLogicConfigTrafficFilterOutputReference TrafficFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference">GoogleFirebaseAiLogicConfigTrafficFilterOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `GenerativeLanguageConfigInput`<sup>Optional</sup> <a name="GenerativeLanguageConfigInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfigInput"></a>

```csharp
public GoogleFirebaseAiLogicConfigGenerativeLanguageConfig GenerativeLanguageConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TelemetryConfigInput`<sup>Optional</sup> <a name="TelemetryConfigInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfigInput"></a>

```csharp
public GoogleFirebaseAiLogicConfigTelemetryConfig TelemetryConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleFirebaseAiLogicConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

---

##### `TrafficFilterInput`<sup>Optional</sup> <a name="TrafficFilterInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilterInput"></a>

```csharp
public GoogleFirebaseAiLogicConfigTrafficFilter TrafficFilterInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAiLogicConfigConfig <a name="GoogleFirebaseAiLogicConfigConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DeletionPolicy = null,
    GoogleFirebaseAiLogicConfigGenerativeLanguageConfig GenerativeLanguageConfig = null,
    string Id = null,
    string Location = null,
    string Project = null,
    GoogleFirebaseAiLogicConfigTelemetryConfig TelemetryConfig = null,
    GoogleFirebaseAiLogicConfigTimeouts Timeouts = null,
    GoogleFirebaseAiLogicConfigTrafficFilter TrafficFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.generativeLanguageConfig">GenerativeLanguageConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | generative_language_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#id GoogleFirebaseAiLogicConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#project GoogleFirebaseAiLogicConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.telemetryConfig">TelemetryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | telemetry_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.trafficFilter">TrafficFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | traffic_filter block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#deletion_policy GoogleFirebaseAiLogicConfig#deletion_policy}

---

##### `GenerativeLanguageConfig`<sup>Optional</sup> <a name="GenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.generativeLanguageConfig"></a>

```csharp
public GoogleFirebaseAiLogicConfigGenerativeLanguageConfig GenerativeLanguageConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

generative_language_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#generative_language_config GoogleFirebaseAiLogicConfig#generative_language_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#id GoogleFirebaseAiLogicConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#location GoogleFirebaseAiLogicConfig#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#project GoogleFirebaseAiLogicConfig#project}.

---

##### `TelemetryConfig`<sup>Optional</sup> <a name="TelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.telemetryConfig"></a>

```csharp
public GoogleFirebaseAiLogicConfigTelemetryConfig TelemetryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#telemetry_config GoogleFirebaseAiLogicConfig#telemetry_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.timeouts"></a>

```csharp
public GoogleFirebaseAiLogicConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#timeouts GoogleFirebaseAiLogicConfig#timeouts}

---

##### `TrafficFilter`<sup>Optional</sup> <a name="TrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.trafficFilter"></a>

```csharp
public GoogleFirebaseAiLogicConfigTrafficFilter TrafficFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

traffic_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#traffic_filter GoogleFirebaseAiLogicConfig#traffic_filter}

---

### GoogleFirebaseAiLogicConfigGenerativeLanguageConfig <a name="GoogleFirebaseAiLogicConfigGenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicConfigGenerativeLanguageConfig {
    string ApiKey = null,
    string ApiKeyWo = null,
    string ApiKeyWoVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKey">ApiKey</a></code> | <code>string</code> | The value of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWo">ApiKeyWo</a></code> | <code>string</code> | The value of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWoVersion">ApiKeyWoVersion</a></code> | <code>string</code> | Triggers update of 'api_key_wo' write-only. |

---

##### `ApiKey`<sup>Optional</sup> <a name="ApiKey" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKey"></a>

```csharp
public string ApiKey { get; set; }
```

- *Type:* string

The value of the API key.

The API key must have
'generativelanguage.googleapis.com' in its "API restrictions" allowlist.
Note that this API is sometimes called the *Generative Language API* in
the Google Cloud console.

Do **not** add this Gemini API key into your app's codebase

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#api_key GoogleFirebaseAiLogicConfig#api_key}

---

##### `ApiKeyWo`<sup>Optional</sup> <a name="ApiKeyWo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWo"></a>

```csharp
public string ApiKeyWo { get; set; }
```

- *Type:* string

The value of the API key.

The API key must have
'generativelanguage.googleapis.com' in its "API restrictions" allowlist.
Note that this API is sometimes called the *Generative Language API* in
the Google Cloud console.

Do **not** add this Gemini API key into your app's codebase

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#api_key_wo GoogleFirebaseAiLogicConfig#api_key_wo}

---

##### `ApiKeyWoVersion`<sup>Optional</sup> <a name="ApiKeyWoVersion" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWoVersion"></a>

```csharp
public string ApiKeyWoVersion { get; set; }
```

- *Type:* string

Triggers update of 'api_key_wo' write-only.

Increment this value when an update to 'api_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#api_key_wo_version GoogleFirebaseAiLogicConfig#api_key_wo_version}

---

### GoogleFirebaseAiLogicConfigTelemetryConfig <a name="GoogleFirebaseAiLogicConfigTelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicConfigTelemetryConfig {
    string Mode = null,
    double SamplingRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.mode">Mode</a></code> | <code>string</code> | The current monitoring mode used for this project. Possible values: NONE ALL. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.samplingRate">SamplingRate</a></code> | <code>double</code> | The percentage of requests to be sampled, expressed as a fraction in the range (0,1]. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The current monitoring mode used for this project. Possible values: NONE ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#mode GoogleFirebaseAiLogicConfig#mode}

---

##### `SamplingRate`<sup>Optional</sup> <a name="SamplingRate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.samplingRate"></a>

```csharp
public double SamplingRate { get; set; }
```

- *Type:* double

The percentage of requests to be sampled, expressed as a fraction in the range (0,1].

Note that the actual sampling rate may be lower than
the specified value if the system is overloaded. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#sampling_rate GoogleFirebaseAiLogicConfig#sampling_rate}

---

### GoogleFirebaseAiLogicConfigTimeouts <a name="GoogleFirebaseAiLogicConfigTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#create GoogleFirebaseAiLogicConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#delete GoogleFirebaseAiLogicConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#update GoogleFirebaseAiLogicConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#create GoogleFirebaseAiLogicConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#delete GoogleFirebaseAiLogicConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#update GoogleFirebaseAiLogicConfig#update}.

---

### GoogleFirebaseAiLogicConfigTrafficFilter <a name="GoogleFirebaseAiLogicConfigTrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicConfigTrafficFilter {
    bool|IResolvable TemplateOnly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter.property.templateOnly">TemplateOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Only allows users to use AI Logic via prompt templates for this project. |

---

##### `TemplateOnly`<sup>Optional</sup> <a name="TemplateOnly" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter.property.templateOnly"></a>

```csharp
public bool|IResolvable TemplateOnly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Only allows users to use AI Logic via prompt templates for this project.

If true, only calls using server templates are permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#template_only GoogleFirebaseAiLogicConfig#template_only}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference <a name="GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKey">ResetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWo">ResetApiKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWoVersion">ResetApiKeyWoVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKey` <a name="ResetApiKey" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKey"></a>

```csharp
private void ResetApiKey()
```

##### `ResetApiKeyWo` <a name="ResetApiKeyWo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWo"></a>

```csharp
private void ResetApiKeyWo()
```

##### `ResetApiKeyWoVersion` <a name="ResetApiKeyWoVersion" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWoVersion"></a>

```csharp
private void ResetApiKeyWoVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyInput">ApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoInput">ApiKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersionInput">ApiKeyWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKey">ApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWo">ApiKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersion">ApiKeyWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiKeyInput`<sup>Optional</sup> <a name="ApiKeyInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyInput"></a>

```csharp
public string ApiKeyInput { get; }
```

- *Type:* string

---

##### `ApiKeyWoInput`<sup>Optional</sup> <a name="ApiKeyWoInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoInput"></a>

```csharp
public string ApiKeyWoInput { get; }
```

- *Type:* string

---

##### `ApiKeyWoVersionInput`<sup>Optional</sup> <a name="ApiKeyWoVersionInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersionInput"></a>

```csharp
public string ApiKeyWoVersionInput { get; }
```

- *Type:* string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKey"></a>

```csharp
public string ApiKey { get; }
```

- *Type:* string

---

##### `ApiKeyWo`<sup>Required</sup> <a name="ApiKeyWo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWo"></a>

```csharp
public string ApiKeyWo { get; }
```

- *Type:* string

---

##### `ApiKeyWoVersion`<sup>Required</sup> <a name="ApiKeyWoVersion" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersion"></a>

```csharp
public string ApiKeyWoVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleFirebaseAiLogicConfigGenerativeLanguageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

---


### GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference <a name="GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetSamplingRate">ResetSamplingRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetSamplingRate` <a name="ResetSamplingRate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetSamplingRate"></a>

```csharp
private void ResetSamplingRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRateInput">SamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRate">SamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `SamplingRateInput`<sup>Optional</sup> <a name="SamplingRateInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRateInput"></a>

```csharp
public double SamplingRateInput { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRate"></a>

```csharp
public double SamplingRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleFirebaseAiLogicConfigTelemetryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

---


### GoogleFirebaseAiLogicConfigTimeoutsOutputReference <a name="GoogleFirebaseAiLogicConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleFirebaseAiLogicConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

---


### GoogleFirebaseAiLogicConfigTrafficFilterOutputReference <a name="GoogleFirebaseAiLogicConfigTrafficFilterOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleFirebaseAiLogicConfigTrafficFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resetTemplateOnly">ResetTemplateOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTemplateOnly` <a name="ResetTemplateOnly" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resetTemplateOnly"></a>

```csharp
private void ResetTemplateOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnlyInput">TemplateOnlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnly">TemplateOnly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TemplateOnlyInput`<sup>Optional</sup> <a name="TemplateOnlyInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnlyInput"></a>

```csharp
public bool|IResolvable TemplateOnlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TemplateOnly`<sup>Required</sup> <a name="TemplateOnly" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnly"></a>

```csharp
public bool|IResolvable TemplateOnly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.internalValue"></a>

```csharp
public GoogleFirebaseAiLogicConfigTrafficFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

---



