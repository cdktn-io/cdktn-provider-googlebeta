# `googleChronicleNativeDashboard` Submodule <a name="`googleChronicleNativeDashboard` Submodule" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleNativeDashboard <a name="GoogleChronicleNativeDashboard" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard google_chronicle_native_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboard(Construct Scope, string Id, GoogleChronicleNativeDashboardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig">GoogleChronicleNativeDashboardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig">GoogleChronicleNativeDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putCharts">PutCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetCharts">ResetCharts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetIsPinned">ResetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCharts` <a name="PutCharts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putCharts"></a>

```csharp
private void PutCharts(IResolvable|GoogleChronicleNativeDashboardCharts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putCharts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putFilters"></a>

```csharp
private void PutFilters(IResolvable|GoogleChronicleNativeDashboardFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleChronicleNativeDashboardTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetAccess"></a>

```csharp
private void ResetAccess()
```

##### `ResetCharts` <a name="ResetCharts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetCharts"></a>

```csharp
private void ResetCharts()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsPinned` <a name="ResetIsPinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetIsPinned"></a>

```csharp
private void ResetIsPinned()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleNativeDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleNativeDashboard.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleNativeDashboard.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleNativeDashboard.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleNativeDashboard.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleChronicleNativeDashboard resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleNativeDashboard to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleNativeDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleNativeDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.charts">Charts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList">GoogleChronicleNativeDashboardChartsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createUserId">CreateUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dashboardId">DashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList">GoogleChronicleNativeDashboardFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lastViewedTime">LastViewedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference">GoogleChronicleNativeDashboardTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateUserId">UpdateUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.chartsInput">ChartsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filtersInput">FiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinnedInput">IsPinnedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinned">IsPinned</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Charts`<sup>Required</sup> <a name="Charts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.charts"></a>

```csharp
public GoogleChronicleNativeDashboardChartsList Charts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList">GoogleChronicleNativeDashboardChartsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CreateUserId`<sup>Required</sup> <a name="CreateUserId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.createUserId"></a>

```csharp
public string CreateUserId { get; }
```

- *Type:* string

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.dashboardId"></a>

```csharp
public string DashboardId { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filters"></a>

```csharp
public GoogleChronicleNativeDashboardFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList">GoogleChronicleNativeDashboardFiltersList</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `LastViewedTime`<sup>Required</sup> <a name="LastViewedTime" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.lastViewedTime"></a>

```csharp
public string LastViewedTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeouts"></a>

```csharp
public GoogleChronicleNativeDashboardTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference">GoogleChronicleNativeDashboardTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UpdateUserId`<sup>Required</sup> <a name="UpdateUserId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.updateUserId"></a>

```csharp
public string UpdateUserId { get; }
```

- *Type:* string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `ChartsInput`<sup>Optional</sup> <a name="ChartsInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.chartsInput"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardCharts[] ChartsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.filtersInput"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardFilters[] FiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `IsPinnedInput`<sup>Optional</sup> <a name="IsPinnedInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinnedInput"></a>

```csharp
public bool|IResolvable IsPinnedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `IsPinned`<sup>Required</sup> <a name="IsPinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.isPinned"></a>

```csharp
public bool|IResolvable IsPinned { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboard.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleNativeDashboardCharts <a name="GoogleChronicleNativeDashboardCharts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardCharts {
    GoogleChronicleNativeDashboardChartsChartLayout ChartLayout = null,
    string DashboardChart = null,
    string[] FiltersIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.chartLayout">ChartLayout</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a></code> | chart_layout block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.dashboardChart">DashboardChart</a></code> | <code>string</code> | The resource name of the associated DashboardChart. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.filtersIds">FiltersIds</a></code> | <code>string[]</code> | List of dashboard filter IDs applied to this chart. |

---

##### `ChartLayout`<sup>Optional</sup> <a name="ChartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.chartLayout"></a>

```csharp
public GoogleChronicleNativeDashboardChartsChartLayout ChartLayout { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

chart_layout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#chart_layout GoogleChronicleNativeDashboard#chart_layout}

---

##### `DashboardChart`<sup>Optional</sup> <a name="DashboardChart" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.dashboardChart"></a>

```csharp
public string DashboardChart { get; set; }
```

- *Type:* string

The resource name of the associated DashboardChart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#dashboard_chart GoogleChronicleNativeDashboard#dashboard_chart}

---

##### `FiltersIds`<sup>Optional</sup> <a name="FiltersIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts.property.filtersIds"></a>

```csharp
public string[] FiltersIds { get; set; }
```

- *Type:* string[]

List of dashboard filter IDs applied to this chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#filters_ids GoogleChronicleNativeDashboard#filters_ids}

---

### GoogleChronicleNativeDashboardChartsChartLayout <a name="GoogleChronicleNativeDashboardChartsChartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardChartsChartLayout {
    double SpanX,
    double SpanY,
    double StartX = null,
    double StartY = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanX">SpanX</a></code> | <code>double</code> | The number of columns the chart spans. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanY">SpanY</a></code> | <code>double</code> | The number of rows the chart spans. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startX">StartX</a></code> | <code>double</code> | The starting X coordinate. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startY">StartY</a></code> | <code>double</code> | The starting Y coordinate. |

---

##### `SpanX`<sup>Required</sup> <a name="SpanX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanX"></a>

```csharp
public double SpanX { get; set; }
```

- *Type:* double

The number of columns the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#span_x GoogleChronicleNativeDashboard#span_x}

---

##### `SpanY`<sup>Required</sup> <a name="SpanY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.spanY"></a>

```csharp
public double SpanY { get; set; }
```

- *Type:* double

The number of rows the chart spans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#span_y GoogleChronicleNativeDashboard#span_y}

---

##### `StartX`<sup>Optional</sup> <a name="StartX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startX"></a>

```csharp
public double StartX { get; set; }
```

- *Type:* double

The starting X coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#start_x GoogleChronicleNativeDashboard#start_x}

---

##### `StartY`<sup>Optional</sup> <a name="StartY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout.property.startY"></a>

```csharp
public double StartY { get; set; }
```

- *Type:* double

The starting Y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#start_y GoogleChronicleNativeDashboard#start_y}

---

### GoogleChronicleNativeDashboardConfig <a name="GoogleChronicleNativeDashboardConfig" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Instance,
    string Location,
    string Access = null,
    IResolvable|GoogleChronicleNativeDashboardCharts[] Charts = null,
    string Description = null,
    IResolvable|GoogleChronicleNativeDashboardFilters[] Filters = null,
    string Id = null,
    bool|IResolvable IsPinned = null,
    string Project = null,
    GoogleChronicleNativeDashboardTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name/title of the dashboard visible to users. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.instance">Instance</a></code> | <code>string</code> | The ID of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.location">Location</a></code> | <code>string</code> | The location of the Chronicle instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.access">Access</a></code> | <code>string</code> | The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.charts">Charts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]</code> | charts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.description">Description</a></code> | <code>string</code> | A description of the dashboard. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.filters">Filters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]</code> | filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.isPinned">IsPinned</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the dashboard is pinned by the user. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#project GoogleChronicleNativeDashboard#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.type">Type</a></code> | <code>string</code> | The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name/title of the dashboard visible to users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#display_name GoogleChronicleNativeDashboard#display_name}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The ID of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#instance GoogleChronicleNativeDashboard#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the Chronicle instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#location GoogleChronicleNativeDashboard#location}

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

The access level of the dashboard. Possible values: DASHBOARD_PRIVATE DASHBOARD_PUBLIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#access GoogleChronicleNativeDashboard#access}

---

##### `Charts`<sup>Optional</sup> <a name="Charts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.charts"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardCharts[] Charts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]

charts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#charts GoogleChronicleNativeDashboard#charts}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#description GoogleChronicleNativeDashboard#description}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.filters"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardFilters[] Filters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#filters GoogleChronicleNativeDashboard#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsPinned`<sup>Optional</sup> <a name="IsPinned" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.isPinned"></a>

```csharp
public bool|IResolvable IsPinned { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the dashboard is pinned by the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#is_pinned GoogleChronicleNativeDashboard#is_pinned}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#project GoogleChronicleNativeDashboard#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.timeouts"></a>

```csharp
public GoogleChronicleNativeDashboardTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#timeouts GoogleChronicleNativeDashboard#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of dashboard. Possible values: CURATED, PRIVATE, PUBLIC, CUSTOM, MARKETPLACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#type GoogleChronicleNativeDashboard#type}

---

### GoogleChronicleNativeDashboardFilters <a name="GoogleChronicleNativeDashboardFilters" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardFilters {
    string[] ChartIds = null,
    string DataSource = null,
    string DisplayName = null,
    string FieldPath = null,
    IResolvable|GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] FilterOperatorAndFieldValues = null,
    string Id = null,
    bool|IResolvable IsMandatory = null,
    bool|IResolvable IsStandardTimeRangeFilter = null,
    bool|IResolvable IsStandardTimeRangeFilterEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.chartIds">ChartIds</a></code> | <code>string[]</code> | The IDs of charts that this filter applies to. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.dataSource">DataSource</a></code> | <code>string</code> | The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the filter. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.fieldPath">FieldPath</a></code> | <code>string</code> | The UDM field path being filtered. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues">FilterOperatorAndFieldValues</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]</code> | filter_operator_and_field_values block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.id">Id</a></code> | <code>string</code> | The unique ID of the filter. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isMandatory">IsMandatory</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the filter is mandatory for the dashboard consumer. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter">IsStandardTimeRangeFilter</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the filter is a standard time range filter. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled">IsStandardTimeRangeFilterEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the standard time range filter is currently enabled. |

---

##### `ChartIds`<sup>Optional</sup> <a name="ChartIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.chartIds"></a>

```csharp
public string[] ChartIds { get; set; }
```

- *Type:* string[]

The IDs of charts that this filter applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#chart_ids GoogleChronicleNativeDashboard#chart_ids}

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.dataSource"></a>

```csharp
public string DataSource { get; set; }
```

- *Type:* string

The data source for the filter. Possible values: UDM, ENTITY, INGESTION_METRICS, RULE_DETECTIONS, RULESETS, GLOBAL, IOC_MATCHES, RULES, SOAR_CASES, SOAR_PLAYBOOKS, SOAR_CASE_HISTORY, DATA_TABLE, INVESTIGATION, INVESTIGATION_FEEDBACK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#data_source GoogleChronicleNativeDashboard#data_source}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#display_name GoogleChronicleNativeDashboard#display_name}

---

##### `FieldPath`<sup>Optional</sup> <a name="FieldPath" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.fieldPath"></a>

```csharp
public string FieldPath { get; set; }
```

- *Type:* string

The UDM field path being filtered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#field_path GoogleChronicleNativeDashboard#field_path}

---

##### `FilterOperatorAndFieldValues`<sup>Optional</sup> <a name="FilterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.filterOperatorAndFieldValues"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] FilterOperatorAndFieldValues { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

filter_operator_and_field_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#filter_operator_and_field_values GoogleChronicleNativeDashboard#filter_operator_and_field_values}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#id GoogleChronicleNativeDashboard#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsMandatory`<sup>Optional</sup> <a name="IsMandatory" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isMandatory"></a>

```csharp
public bool|IResolvable IsMandatory { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the filter is mandatory for the dashboard consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#is_mandatory GoogleChronicleNativeDashboard#is_mandatory}

---

##### `IsStandardTimeRangeFilter`<sup>Optional</sup> <a name="IsStandardTimeRangeFilter" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilter"></a>

```csharp
public bool|IResolvable IsStandardTimeRangeFilter { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the filter is a standard time range filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#is_standard_time_range_filter GoogleChronicleNativeDashboard#is_standard_time_range_filter}

---

##### `IsStandardTimeRangeFilterEnabled`<sup>Optional</sup> <a name="IsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters.property.isStandardTimeRangeFilterEnabled"></a>

```csharp
public bool|IResolvable IsStandardTimeRangeFilterEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the standard time range filter is currently enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#is_standard_time_range_filter_enabled GoogleChronicleNativeDashboard#is_standard_time_range_filter_enabled}

---

### GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues <a name="GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues {
    string[] FieldValues = null,
    string FilterOperator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues">FieldValues</a></code> | <code>string[]</code> | The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator">FilterOperator</a></code> | <code>string</code> | The operator to apply to the field. |

---

##### `FieldValues`<sup>Optional</sup> <a name="FieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.fieldValues"></a>

```csharp
public string[] FieldValues { get; set; }
```

- *Type:* string[]

The values for the modifier. All operators should have a single value other than 'IN' and 'BETWEEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#field_values GoogleChronicleNativeDashboard#field_values}

---

##### `FilterOperator`<sup>Optional</sup> <a name="FilterOperator" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues.property.filterOperator"></a>

```csharp
public string FilterOperator { get; set; }
```

- *Type:* string

The operator to apply to the field.

Possible values: ["EQUAL", "NOT_EQUAL", "IN", "GREATER_THAN", "GREATER_THAN_OR_EQUAL_TO", "LESS_THAN", "LESS_THAN_OR_EQUAL_TO", "BETWEEN", "PAST", "IS_NULL", "IS_NOT_NULL", "STARTS_WITH", "ENDS_WITH", "DOES_NOT_STARTS_WITH", "DOES_NOT_ENDS_WITH", "NOT_IN", "CONTAINS", "DOES_NOT_CONTAIN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#filter_operator GoogleChronicleNativeDashboard#filter_operator}

---

### GoogleChronicleNativeDashboardTimeouts <a name="GoogleChronicleNativeDashboardTimeouts" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#create GoogleChronicleNativeDashboard#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#delete GoogleChronicleNativeDashboard#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#update GoogleChronicleNativeDashboard#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#create GoogleChronicleNativeDashboard#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#delete GoogleChronicleNativeDashboard#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_chronicle_native_dashboard#update GoogleChronicleNativeDashboard#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleNativeDashboardChartsChartLayoutOutputReference <a name="GoogleChronicleNativeDashboardChartsChartLayoutOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardChartsChartLayoutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX">ResetStartX</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY">ResetStartY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStartX` <a name="ResetStartX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartX"></a>

```csharp
private void ResetStartX()
```

##### `ResetStartY` <a name="ResetStartY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.resetStartY"></a>

```csharp
private void ResetStartY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput">SpanXInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput">SpanYInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput">StartXInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput">StartYInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX">SpanX</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY">SpanY</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX">StartX</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY">StartY</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpanXInput`<sup>Optional</sup> <a name="SpanXInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanXInput"></a>

```csharp
public double SpanXInput { get; }
```

- *Type:* double

---

##### `SpanYInput`<sup>Optional</sup> <a name="SpanYInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanYInput"></a>

```csharp
public double SpanYInput { get; }
```

- *Type:* double

---

##### `StartXInput`<sup>Optional</sup> <a name="StartXInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startXInput"></a>

```csharp
public double StartXInput { get; }
```

- *Type:* double

---

##### `StartYInput`<sup>Optional</sup> <a name="StartYInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startYInput"></a>

```csharp
public double StartYInput { get; }
```

- *Type:* double

---

##### `SpanX`<sup>Required</sup> <a name="SpanX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanX"></a>

```csharp
public double SpanX { get; }
```

- *Type:* double

---

##### `SpanY`<sup>Required</sup> <a name="SpanY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.spanY"></a>

```csharp
public double SpanY { get; }
```

- *Type:* double

---

##### `StartX`<sup>Required</sup> <a name="StartX" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startX"></a>

```csharp
public double StartX { get; }
```

- *Type:* double

---

##### `StartY`<sup>Required</sup> <a name="StartY" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.startY"></a>

```csharp
public double StartY { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference.property.internalValue"></a>

```csharp
public GoogleChronicleNativeDashboardChartsChartLayout InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

---


### GoogleChronicleNativeDashboardChartsList <a name="GoogleChronicleNativeDashboardChartsList" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardChartsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.get"></a>

```csharp
private GoogleChronicleNativeDashboardChartsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardCharts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>[]

---


### GoogleChronicleNativeDashboardChartsOutputReference <a name="GoogleChronicleNativeDashboardChartsOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardChartsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout">PutChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetChartLayout">ResetChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetDashboardChart">ResetDashboardChart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetFiltersIds">ResetFiltersIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChartLayout` <a name="PutChartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout"></a>

```csharp
private void PutChartLayout(GoogleChronicleNativeDashboardChartsChartLayout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.putChartLayout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

---

##### `ResetChartLayout` <a name="ResetChartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetChartLayout"></a>

```csharp
private void ResetChartLayout()
```

##### `ResetDashboardChart` <a name="ResetDashboardChart" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetDashboardChart"></a>

```csharp
private void ResetDashboardChart()
```

##### `ResetFiltersIds` <a name="ResetFiltersIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.resetFiltersIds"></a>

```csharp
private void ResetFiltersIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayout">ChartLayout</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference">GoogleChronicleNativeDashboardChartsChartLayoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput">ChartLayoutInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput">DashboardChartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput">FiltersIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChart">DashboardChart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIds">FiltersIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChartLayout`<sup>Required</sup> <a name="ChartLayout" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayout"></a>

```csharp
public GoogleChronicleNativeDashboardChartsChartLayoutOutputReference ChartLayout { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayoutOutputReference">GoogleChronicleNativeDashboardChartsChartLayoutOutputReference</a>

---

##### `ChartLayoutInput`<sup>Optional</sup> <a name="ChartLayoutInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.chartLayoutInput"></a>

```csharp
public GoogleChronicleNativeDashboardChartsChartLayout ChartLayoutInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsChartLayout">GoogleChronicleNativeDashboardChartsChartLayout</a>

---

##### `DashboardChartInput`<sup>Optional</sup> <a name="DashboardChartInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChartInput"></a>

```csharp
public string DashboardChartInput { get; }
```

- *Type:* string

---

##### `FiltersIdsInput`<sup>Optional</sup> <a name="FiltersIdsInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIdsInput"></a>

```csharp
public string[] FiltersIdsInput { get; }
```

- *Type:* string[]

---

##### `DashboardChart`<sup>Required</sup> <a name="DashboardChart" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.dashboardChart"></a>

```csharp
public string DashboardChart { get; }
```

- *Type:* string

---

##### `FiltersIds`<sup>Required</sup> <a name="FiltersIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.filtersIds"></a>

```csharp
public string[] FiltersIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardChartsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardCharts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardCharts">GoogleChronicleNativeDashboardCharts</a>

---


### GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList <a name="GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get"></a>

```csharp
private GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

---


### GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference <a name="GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues">ResetFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator">ResetFilterOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldValues` <a name="ResetFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFieldValues"></a>

```csharp
private void ResetFieldValues()
```

##### `ResetFilterOperator` <a name="ResetFilterOperator" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.resetFilterOperator"></a>

```csharp
private void ResetFilterOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput">FieldValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput">FilterOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues">FieldValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator">FilterOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldValuesInput`<sup>Optional</sup> <a name="FieldValuesInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValuesInput"></a>

```csharp
public string[] FieldValuesInput { get; }
```

- *Type:* string[]

---

##### `FilterOperatorInput`<sup>Optional</sup> <a name="FilterOperatorInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperatorInput"></a>

```csharp
public string FilterOperatorInput { get; }
```

- *Type:* string

---

##### `FieldValues`<sup>Required</sup> <a name="FieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.fieldValues"></a>

```csharp
public string[] FieldValues { get; }
```

- *Type:* string[]

---

##### `FilterOperator`<sup>Required</sup> <a name="FilterOperator" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.filterOperator"></a>

```csharp
public string FilterOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>

---


### GoogleChronicleNativeDashboardFiltersList <a name="GoogleChronicleNativeDashboardFiltersList" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.get"></a>

```csharp
private GoogleChronicleNativeDashboardFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>[]

---


### GoogleChronicleNativeDashboardFiltersOutputReference <a name="GoogleChronicleNativeDashboardFiltersOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues">PutFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetChartIds">ResetChartIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDataSource">ResetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFieldPath">ResetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues">ResetFilterOperatorAndFieldValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsMandatory">ResetIsMandatory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter">ResetIsStandardTimeRangeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled">ResetIsStandardTimeRangeFilterEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilterOperatorAndFieldValues` <a name="PutFilterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues"></a>

```csharp
private void PutFilterOperatorAndFieldValues(IResolvable|GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.putFilterOperatorAndFieldValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

---

##### `ResetChartIds` <a name="ResetChartIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetChartIds"></a>

```csharp
private void ResetChartIds()
```

##### `ResetDataSource` <a name="ResetDataSource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDataSource"></a>

```csharp
private void ResetDataSource()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFieldPath` <a name="ResetFieldPath" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFieldPath"></a>

```csharp
private void ResetFieldPath()
```

##### `ResetFilterOperatorAndFieldValues` <a name="ResetFilterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetFilterOperatorAndFieldValues"></a>

```csharp
private void ResetFilterOperatorAndFieldValues()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsMandatory` <a name="ResetIsMandatory" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsMandatory"></a>

```csharp
private void ResetIsMandatory()
```

##### `ResetIsStandardTimeRangeFilter` <a name="ResetIsStandardTimeRangeFilter" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilter"></a>

```csharp
private void ResetIsStandardTimeRangeFilter()
```

##### `ResetIsStandardTimeRangeFilterEnabled` <a name="ResetIsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.resetIsStandardTimeRangeFilterEnabled"></a>

```csharp
private void ResetIsStandardTimeRangeFilterEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues">FilterOperatorAndFieldValues</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput">ChartIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput">FieldPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput">FilterOperatorAndFieldValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput">IsMandatoryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput">IsStandardTimeRangeFilterEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput">IsStandardTimeRangeFilterInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIds">ChartIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSource">DataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPath">FieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatory">IsMandatory</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter">IsStandardTimeRangeFilter</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled">IsStandardTimeRangeFilterEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterOperatorAndFieldValues`<sup>Required</sup> <a name="FilterOperatorAndFieldValues" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValues"></a>

```csharp
public GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList FilterOperatorAndFieldValues { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValuesList</a>

---

##### `ChartIdsInput`<sup>Optional</sup> <a name="ChartIdsInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIdsInput"></a>

```csharp
public string[] ChartIdsInput { get; }
```

- *Type:* string[]

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSourceInput"></a>

```csharp
public string DataSourceInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FieldPathInput`<sup>Optional</sup> <a name="FieldPathInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPathInput"></a>

```csharp
public string FieldPathInput { get; }
```

- *Type:* string

---

##### `FilterOperatorAndFieldValuesInput`<sup>Optional</sup> <a name="FilterOperatorAndFieldValuesInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.filterOperatorAndFieldValuesInput"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues[] FilterOperatorAndFieldValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues">GoogleChronicleNativeDashboardFiltersFilterOperatorAndFieldValues</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsMandatoryInput`<sup>Optional</sup> <a name="IsMandatoryInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatoryInput"></a>

```csharp
public bool|IResolvable IsMandatoryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsStandardTimeRangeFilterEnabledInput`<sup>Optional</sup> <a name="IsStandardTimeRangeFilterEnabledInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabledInput"></a>

```csharp
public bool|IResolvable IsStandardTimeRangeFilterEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsStandardTimeRangeFilterInput`<sup>Optional</sup> <a name="IsStandardTimeRangeFilterInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterInput"></a>

```csharp
public bool|IResolvable IsStandardTimeRangeFilterInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ChartIds`<sup>Required</sup> <a name="ChartIds" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.chartIds"></a>

```csharp
public string[] ChartIds { get; }
```

- *Type:* string[]

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.dataSource"></a>

```csharp
public string DataSource { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.fieldPath"></a>

```csharp
public string FieldPath { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsMandatory`<sup>Required</sup> <a name="IsMandatory" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isMandatory"></a>

```csharp
public bool|IResolvable IsMandatory { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsStandardTimeRangeFilter`<sup>Required</sup> <a name="IsStandardTimeRangeFilter" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilter"></a>

```csharp
public bool|IResolvable IsStandardTimeRangeFilter { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsStandardTimeRangeFilterEnabled`<sup>Required</sup> <a name="IsStandardTimeRangeFilterEnabled" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.isStandardTimeRangeFilterEnabled"></a>

```csharp
public bool|IResolvable IsStandardTimeRangeFilterEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardFilters">GoogleChronicleNativeDashboardFilters</a>

---


### GoogleChronicleNativeDashboardTimeoutsOutputReference <a name="GoogleChronicleNativeDashboardTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleNativeDashboardTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleNativeDashboardTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleNativeDashboard.GoogleChronicleNativeDashboardTimeouts">GoogleChronicleNativeDashboardTimeouts</a>

---



