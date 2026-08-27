# `googleChronicleBigQueryExport` Submodule <a name="`googleChronicleBigQueryExport` Submodule" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleBigQueryExport <a name="GoogleChronicleBigQueryExport" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export google_chronicle_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExport(Construct Scope, string Id, GoogleChronicleBigQueryExportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig">GoogleChronicleBigQueryExportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig">GoogleChronicleBigQueryExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings">PutEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings">PutIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings">PutRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings">PutUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings">PutUdmEventsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetBigQueryExportPackage">ResetBigQueryExportPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetEntityGraphSettings">ResetEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetIocMatchesSettings">ResetIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetRuleDetectionsSettings">ResetRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsAggregatesSettings">ResetUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsSettings">ResetUdmEventsSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntityGraphSettings` <a name="PutEntityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings"></a>

```csharp
private void PutEntityGraphSettings(GoogleChronicleBigQueryExportEntityGraphSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

---

##### `PutIocMatchesSettings` <a name="PutIocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings"></a>

```csharp
private void PutIocMatchesSettings(GoogleChronicleBigQueryExportIocMatchesSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

---

##### `PutRuleDetectionsSettings` <a name="PutRuleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings"></a>

```csharp
private void PutRuleDetectionsSettings(GoogleChronicleBigQueryExportRuleDetectionsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleChronicleBigQueryExportTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

---

##### `PutUdmEventsAggregatesSettings` <a name="PutUdmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings"></a>

```csharp
private void PutUdmEventsAggregatesSettings(GoogleChronicleBigQueryExportUdmEventsAggregatesSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---

##### `PutUdmEventsSettings` <a name="PutUdmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings"></a>

```csharp
private void PutUdmEventsSettings(GoogleChronicleBigQueryExportUdmEventsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

---

##### `ResetBigQueryExportPackage` <a name="ResetBigQueryExportPackage" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetBigQueryExportPackage"></a>

```csharp
private void ResetBigQueryExportPackage()
```

##### `ResetEntityGraphSettings` <a name="ResetEntityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetEntityGraphSettings"></a>

```csharp
private void ResetEntityGraphSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIocMatchesSettings` <a name="ResetIocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetIocMatchesSettings"></a>

```csharp
private void ResetIocMatchesSettings()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRuleDetectionsSettings` <a name="ResetRuleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetRuleDetectionsSettings"></a>

```csharp
private void ResetRuleDetectionsSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUdmEventsAggregatesSettings` <a name="ResetUdmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsAggregatesSettings"></a>

```csharp
private void ResetUdmEventsAggregatesSettings()
```

##### `ResetUdmEventsSettings` <a name="ResetUdmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsSettings"></a>

```csharp
private void ResetUdmEventsSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleBigQueryExport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleBigQueryExport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleBigQueryExport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleBigQueryExport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleBigQueryExport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleChronicleBigQueryExport resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleBigQueryExport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettings">EntityGraphSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference">GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettings">IocMatchesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference">GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioned">Provisioned</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettings">RuleDetectionsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference">GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference">GoogleChronicleBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettings">UdmEventsAggregatesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettings">UdmEventsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackageInput">BigQueryExportPackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettingsInput">EntityGraphSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettingsInput">IocMatchesSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettingsInput">RuleDetectionsSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput">UdmEventsAggregatesSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettingsInput">UdmEventsSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackage">BigQueryExportPackage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EntityGraphSettings`<sup>Required</sup> <a name="EntityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettings"></a>

```csharp
public GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference EntityGraphSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference">GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference</a>

---

##### `IocMatchesSettings`<sup>Required</sup> <a name="IocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettings"></a>

```csharp
public GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference IocMatchesSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference">GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Provisioned`<sup>Required</sup> <a name="Provisioned" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioned"></a>

```csharp
public IResolvable Provisioned { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RuleDetectionsSettings`<sup>Required</sup> <a name="RuleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettings"></a>

```csharp
public GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference RuleDetectionsSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference">GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeouts"></a>

```csharp
public GoogleChronicleBigQueryExportTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference">GoogleChronicleBigQueryExportTimeoutsOutputReference</a>

---

##### `UdmEventsAggregatesSettings`<sup>Required</sup> <a name="UdmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettings"></a>

```csharp
public GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference UdmEventsAggregatesSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a>

---

##### `UdmEventsSettings`<sup>Required</sup> <a name="UdmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettings"></a>

```csharp
public GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference UdmEventsSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference</a>

---

##### `BigQueryExportPackageInput`<sup>Optional</sup> <a name="BigQueryExportPackageInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackageInput"></a>

```csharp
public string BigQueryExportPackageInput { get; }
```

- *Type:* string

---

##### `EntityGraphSettingsInput`<sup>Optional</sup> <a name="EntityGraphSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettingsInput"></a>

```csharp
public GoogleChronicleBigQueryExportEntityGraphSettings EntityGraphSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `IocMatchesSettingsInput`<sup>Optional</sup> <a name="IocMatchesSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettingsInput"></a>

```csharp
public GoogleChronicleBigQueryExportIocMatchesSettings IocMatchesSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RuleDetectionsSettingsInput`<sup>Optional</sup> <a name="RuleDetectionsSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettingsInput"></a>

```csharp
public GoogleChronicleBigQueryExportRuleDetectionsSettings RuleDetectionsSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleChronicleBigQueryExportTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

---

##### `UdmEventsAggregatesSettingsInput`<sup>Optional</sup> <a name="UdmEventsAggregatesSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput"></a>

```csharp
public GoogleChronicleBigQueryExportUdmEventsAggregatesSettings UdmEventsAggregatesSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---

##### `UdmEventsSettingsInput`<sup>Optional</sup> <a name="UdmEventsSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettingsInput"></a>

```csharp
public GoogleChronicleBigQueryExportUdmEventsSettings UdmEventsSettingsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

---

##### `BigQueryExportPackage`<sup>Required</sup> <a name="BigQueryExportPackage" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackage"></a>

```csharp
public string BigQueryExportPackage { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleBigQueryExportConfig <a name="GoogleChronicleBigQueryExportConfig" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Instance,
    string Location,
    string BigQueryExportPackage = null,
    GoogleChronicleBigQueryExportEntityGraphSettings EntityGraphSettings = null,
    string Id = null,
    GoogleChronicleBigQueryExportIocMatchesSettings IocMatchesSettings = null,
    string Project = null,
    GoogleChronicleBigQueryExportRuleDetectionsSettings RuleDetectionsSettings = null,
    GoogleChronicleBigQueryExportTimeouts Timeouts = null,
    GoogleChronicleBigQueryExportUdmEventsAggregatesSettings UdmEventsAggregatesSettings = null,
    GoogleChronicleBigQueryExportUdmEventsSettings UdmEventsSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.instance">Instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.bigQueryExportPackage">BigQueryExportPackage</a></code> | <code>string</code> | The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.entityGraphSettings">EntityGraphSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | entity_graph_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.iocMatchesSettings">IocMatchesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | ioc_matches_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.ruleDetectionsSettings">RuleDetectionsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | rule_detections_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings">UdmEventsAggregatesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | udm_events_aggregates_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsSettings">UdmEventsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | udm_events_settings block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#instance GoogleChronicleBigQueryExport#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#location GoogleChronicleBigQueryExport#location}

---

##### `BigQueryExportPackage`<sup>Optional</sup> <a name="BigQueryExportPackage" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.bigQueryExportPackage"></a>

```csharp
public string BigQueryExportPackage { get; set; }
```

- *Type:* string

The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#big_query_export_package GoogleChronicleBigQueryExport#big_query_export_package}

---

##### `EntityGraphSettings`<sup>Optional</sup> <a name="EntityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.entityGraphSettings"></a>

```csharp
public GoogleChronicleBigQueryExportEntityGraphSettings EntityGraphSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

entity_graph_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#entity_graph_settings GoogleChronicleBigQueryExport#entity_graph_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IocMatchesSettings`<sup>Optional</sup> <a name="IocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.iocMatchesSettings"></a>

```csharp
public GoogleChronicleBigQueryExportIocMatchesSettings IocMatchesSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

ioc_matches_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#ioc_matches_settings GoogleChronicleBigQueryExport#ioc_matches_settings}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}.

---

##### `RuleDetectionsSettings`<sup>Optional</sup> <a name="RuleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.ruleDetectionsSettings"></a>

```csharp
public GoogleChronicleBigQueryExportRuleDetectionsSettings RuleDetectionsSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

rule_detections_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#rule_detections_settings GoogleChronicleBigQueryExport#rule_detections_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.timeouts"></a>

```csharp
public GoogleChronicleBigQueryExportTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#timeouts GoogleChronicleBigQueryExport#timeouts}

---

##### `UdmEventsAggregatesSettings`<sup>Optional</sup> <a name="UdmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings"></a>

```csharp
public GoogleChronicleBigQueryExportUdmEventsAggregatesSettings UdmEventsAggregatesSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

udm_events_aggregates_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#udm_events_aggregates_settings GoogleChronicleBigQueryExport#udm_events_aggregates_settings}

---

##### `UdmEventsSettings`<sup>Optional</sup> <a name="UdmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsSettings"></a>

```csharp
public GoogleChronicleBigQueryExportUdmEventsSettings UdmEventsSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

udm_events_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#udm_events_settings GoogleChronicleBigQueryExport#udm_events_settings}

---

### GoogleChronicleBigQueryExportEntityGraphSettings <a name="GoogleChronicleBigQueryExportEntityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportEntityGraphSettings {
    bool|IResolvable Enabled,
    double RetentionDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.retentionDays">RetentionDays</a></code> | <code>double</code> | The retention period for the data source in days. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportIocMatchesSettings <a name="GoogleChronicleBigQueryExportIocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportIocMatchesSettings {
    bool|IResolvable Enabled,
    double RetentionDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.retentionDays">RetentionDays</a></code> | <code>double</code> | The retention period for the data source in days. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportRuleDetectionsSettings <a name="GoogleChronicleBigQueryExportRuleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportRuleDetectionsSettings {
    bool|IResolvable Enabled,
    double RetentionDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays">RetentionDays</a></code> | <code>double</code> | The retention period for the data source in days. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportTimeouts <a name="GoogleChronicleBigQueryExportTimeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#create GoogleChronicleBigQueryExport#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#delete GoogleChronicleBigQueryExport#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#update GoogleChronicleBigQueryExport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#create GoogleChronicleBigQueryExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#delete GoogleChronicleBigQueryExport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#update GoogleChronicleBigQueryExport#update}.

---

### GoogleChronicleBigQueryExportUdmEventsAggregatesSettings <a name="GoogleChronicleBigQueryExportUdmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportUdmEventsAggregatesSettings {
    bool|IResolvable Enabled,
    double RetentionDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays">RetentionDays</a></code> | <code>double</code> | The retention period for the data source in days. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportUdmEventsSettings <a name="GoogleChronicleBigQueryExportUdmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportUdmEventsSettings {
    bool|IResolvable Enabled,
    double RetentionDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.retentionDays">RetentionDays</a></code> | <code>double</code> | The retention period for the data source in days. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference <a name="GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime">DataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume">DataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState">LatestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataFreshnessTime`<sup>Required</sup> <a name="DataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime"></a>

```csharp
public string DataFreshnessTime { get; }
```

- *Type:* string

---

##### `DataVolume`<sup>Required</sup> <a name="DataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume"></a>

```csharp
public string DataVolume { get; }
```

- *Type:* string

---

##### `LatestExportJobState`<sup>Required</sup> <a name="LatestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState"></a>

```csharp
public string LatestExportJobState { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleChronicleBigQueryExportEntityGraphSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

---


### GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference <a name="GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime">DataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume">DataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState">LatestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataFreshnessTime`<sup>Required</sup> <a name="DataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime"></a>

```csharp
public string DataFreshnessTime { get; }
```

- *Type:* string

---

##### `DataVolume`<sup>Required</sup> <a name="DataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume"></a>

```csharp
public string DataVolume { get; }
```

- *Type:* string

---

##### `LatestExportJobState`<sup>Required</sup> <a name="LatestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState"></a>

```csharp
public string LatestExportJobState { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleChronicleBigQueryExportIocMatchesSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

---


### GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference <a name="GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime">DataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume">DataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState">LatestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataFreshnessTime`<sup>Required</sup> <a name="DataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime"></a>

```csharp
public string DataFreshnessTime { get; }
```

- *Type:* string

---

##### `DataVolume`<sup>Required</sup> <a name="DataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume"></a>

```csharp
public string DataVolume { get; }
```

- *Type:* string

---

##### `LatestExportJobState`<sup>Required</sup> <a name="LatestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState"></a>

```csharp
public string LatestExportJobState { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleChronicleBigQueryExportRuleDetectionsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

---


### GoogleChronicleBigQueryExportTimeoutsOutputReference <a name="GoogleChronicleBigQueryExportTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleBigQueryExportTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

---


### GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference <a name="GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime">DataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume">DataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState">LatestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataFreshnessTime`<sup>Required</sup> <a name="DataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime"></a>

```csharp
public string DataFreshnessTime { get; }
```

- *Type:* string

---

##### `DataVolume`<sup>Required</sup> <a name="DataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume"></a>

```csharp
public string DataVolume { get; }
```

- *Type:* string

---

##### `LatestExportJobState`<sup>Required</sup> <a name="LatestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState"></a>

```csharp
public string LatestExportJobState { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleChronicleBigQueryExportUdmEventsAggregatesSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---


### GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference <a name="GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime">DataFreshnessTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume">DataVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState">LatestExportJobState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataFreshnessTime`<sup>Required</sup> <a name="DataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime"></a>

```csharp
public string DataFreshnessTime { get; }
```

- *Type:* string

---

##### `DataVolume`<sup>Required</sup> <a name="DataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume"></a>

```csharp
public string DataVolume { get; }
```

- *Type:* string

---

##### `LatestExportJobState`<sup>Required</sup> <a name="LatestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState"></a>

```csharp
public string LatestExportJobState { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue"></a>

```csharp
public GoogleChronicleBigQueryExportUdmEventsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

---



