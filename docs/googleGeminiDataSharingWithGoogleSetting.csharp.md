# `googleGeminiDataSharingWithGoogleSetting` Submodule <a name="`googleGeminiDataSharingWithGoogleSetting` Submodule" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleGeminiDataSharingWithGoogleSetting <a name="GoogleGeminiDataSharingWithGoogleSetting" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting google_gemini_data_sharing_with_google_setting}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGeminiDataSharingWithGoogleSetting(Construct Scope, string Id, GoogleGeminiDataSharingWithGoogleSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig">GoogleGeminiDataSharingWithGoogleSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig">GoogleGeminiDataSharingWithGoogleSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetEnableDataSharing">ResetEnableDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetEnablePreviewDataSharing">ResetEnablePreviewDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleGeminiDataSharingWithGoogleSettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts">GoogleGeminiDataSharingWithGoogleSettingTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEnableDataSharing` <a name="ResetEnableDataSharing" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetEnableDataSharing"></a>

```csharp
private void ResetEnableDataSharing()
```

##### `ResetEnablePreviewDataSharing` <a name="ResetEnablePreviewDataSharing" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetEnablePreviewDataSharing"></a>

```csharp
private void ResetEnablePreviewDataSharing()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleGeminiDataSharingWithGoogleSetting resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGeminiDataSharingWithGoogleSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGeminiDataSharingWithGoogleSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGeminiDataSharingWithGoogleSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleGeminiDataSharingWithGoogleSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleGeminiDataSharingWithGoogleSetting resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleGeminiDataSharingWithGoogleSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleGeminiDataSharingWithGoogleSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleGeminiDataSharingWithGoogleSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference">GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingIdInput">DataSharingWithGoogleSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.enableDataSharingInput">EnableDataSharingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharingInput">EnablePreviewDataSharingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts">GoogleGeminiDataSharingWithGoogleSettingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingId">DataSharingWithGoogleSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.enableDataSharing">EnableDataSharing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharing">EnablePreviewDataSharing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.timeouts"></a>

```csharp
public GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference">GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DataSharingWithGoogleSettingIdInput`<sup>Optional</sup> <a name="DataSharingWithGoogleSettingIdInput" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingIdInput"></a>

```csharp
public string DataSharingWithGoogleSettingIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `EnableDataSharingInput`<sup>Optional</sup> <a name="EnableDataSharingInput" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.enableDataSharingInput"></a>

```csharp
public bool|IResolvable EnableDataSharingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePreviewDataSharingInput`<sup>Optional</sup> <a name="EnablePreviewDataSharingInput" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharingInput"></a>

```csharp
public bool|IResolvable EnablePreviewDataSharingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleGeminiDataSharingWithGoogleSettingTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts">GoogleGeminiDataSharingWithGoogleSettingTimeouts</a>

---

##### `DataSharingWithGoogleSettingId`<sup>Required</sup> <a name="DataSharingWithGoogleSettingId" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.dataSharingWithGoogleSettingId"></a>

```csharp
public string DataSharingWithGoogleSettingId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `EnableDataSharing`<sup>Required</sup> <a name="EnableDataSharing" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.enableDataSharing"></a>

```csharp
public bool|IResolvable EnableDataSharing { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnablePreviewDataSharing`<sup>Required</sup> <a name="EnablePreviewDataSharing" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.enablePreviewDataSharing"></a>

```csharp
public bool|IResolvable EnablePreviewDataSharing { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleGeminiDataSharingWithGoogleSettingConfig <a name="GoogleGeminiDataSharingWithGoogleSettingConfig" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGeminiDataSharingWithGoogleSettingConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataSharingWithGoogleSettingId,
    string DeletionPolicy = null,
    bool|IResolvable EnableDataSharing = null,
    bool|IResolvable EnablePreviewDataSharing = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    GoogleGeminiDataSharingWithGoogleSettingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.dataSharingWithGoogleSettingId">DataSharingWithGoogleSettingId</a></code> | <code>string</code> | Id of the Data Sharing With Google Setting. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.enableDataSharing">EnableDataSharing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether data sharing should be enabled in GA products. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.enablePreviewDataSharing">EnablePreviewDataSharing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether data sharing should be enabled in Preview products. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#id GoogleGeminiDataSharingWithGoogleSetting#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#project GoogleGeminiDataSharingWithGoogleSetting#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts">GoogleGeminiDataSharingWithGoogleSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataSharingWithGoogleSettingId`<sup>Required</sup> <a name="DataSharingWithGoogleSettingId" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.dataSharingWithGoogleSettingId"></a>

```csharp
public string DataSharingWithGoogleSettingId { get; set; }
```

- *Type:* string

Id of the Data Sharing With Google Setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#data_sharing_with_google_setting_id GoogleGeminiDataSharingWithGoogleSetting#data_sharing_with_google_setting_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#deletion_policy GoogleGeminiDataSharingWithGoogleSetting#deletion_policy}

---

##### `EnableDataSharing`<sup>Optional</sup> <a name="EnableDataSharing" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.enableDataSharing"></a>

```csharp
public bool|IResolvable EnableDataSharing { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether data sharing should be enabled in GA products.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#enable_data_sharing GoogleGeminiDataSharingWithGoogleSetting#enable_data_sharing}

---

##### `EnablePreviewDataSharing`<sup>Optional</sup> <a name="EnablePreviewDataSharing" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.enablePreviewDataSharing"></a>

```csharp
public bool|IResolvable EnablePreviewDataSharing { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether data sharing should be enabled in Preview products.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#enable_preview_data_sharing GoogleGeminiDataSharingWithGoogleSetting#enable_preview_data_sharing}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#id GoogleGeminiDataSharingWithGoogleSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#labels GoogleGeminiDataSharingWithGoogleSetting#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#location GoogleGeminiDataSharingWithGoogleSetting#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#project GoogleGeminiDataSharingWithGoogleSetting#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingConfig.property.timeouts"></a>

```csharp
public GoogleGeminiDataSharingWithGoogleSettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts">GoogleGeminiDataSharingWithGoogleSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#timeouts GoogleGeminiDataSharingWithGoogleSetting#timeouts}

---

### GoogleGeminiDataSharingWithGoogleSettingTimeouts <a name="GoogleGeminiDataSharingWithGoogleSettingTimeouts" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGeminiDataSharingWithGoogleSettingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#create GoogleGeminiDataSharingWithGoogleSetting#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#delete GoogleGeminiDataSharingWithGoogleSetting#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#update GoogleGeminiDataSharingWithGoogleSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#create GoogleGeminiDataSharingWithGoogleSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#delete GoogleGeminiDataSharingWithGoogleSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_gemini_data_sharing_with_google_setting#update GoogleGeminiDataSharingWithGoogleSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference <a name="GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts">GoogleGeminiDataSharingWithGoogleSettingTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleGeminiDataSharingWithGoogleSettingTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleGeminiDataSharingWithGoogleSetting.GoogleGeminiDataSharingWithGoogleSettingTimeouts">GoogleGeminiDataSharingWithGoogleSettingTimeouts</a>

---



