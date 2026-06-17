# `googleChronicleFindingsRefinement` Submodule <a name="`googleChronicleFindingsRefinement` Submodule" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleFindingsRefinement <a name="GoogleChronicleFindingsRefinement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement google_chronicle_findings_refinement}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleFindingsRefinement(Construct Scope, string Id, GoogleChronicleFindingsRefinementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig">GoogleChronicleFindingsRefinementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig">GoogleChronicleFindingsRefinementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putOutcomeFilters">PutOutcomeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetOutcomeFilters">ResetOutcomeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOutcomeFilters` <a name="PutOutcomeFilters" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putOutcomeFilters"></a>

```csharp
private void PutOutcomeFilters(IResolvable|GoogleChronicleFindingsRefinementOutcomeFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putOutcomeFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleChronicleFindingsRefinementTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOutcomeFilters` <a name="ResetOutcomeFilters" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetOutcomeFilters"></a>

```csharp
private void ResetOutcomeFilters()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetQuery"></a>

```csharp
private void ResetQuery()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleFindingsRefinement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleFindingsRefinement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleFindingsRefinement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleFindingsRefinement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleChronicleFindingsRefinement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleChronicleFindingsRefinement resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleFindingsRefinement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleFindingsRefinement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleFindingsRefinement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.outcomeFilters">OutcomeFilters</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList">GoogleChronicleFindingsRefinementOutcomeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference">GoogleChronicleFindingsRefinementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.outcomeFiltersInput">OutcomeFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutcomeFilters`<sup>Required</sup> <a name="OutcomeFilters" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.outcomeFilters"></a>

```csharp
public GoogleChronicleFindingsRefinementOutcomeFiltersList OutcomeFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList">GoogleChronicleFindingsRefinementOutcomeFiltersList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.timeouts"></a>

```csharp
public GoogleChronicleFindingsRefinementTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference">GoogleChronicleFindingsRefinementTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `OutcomeFiltersInput`<sup>Optional</sup> <a name="OutcomeFiltersInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.outcomeFiltersInput"></a>

```csharp
public IResolvable|GoogleChronicleFindingsRefinementOutcomeFilters[] OutcomeFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleChronicleFindingsRefinementTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleFindingsRefinementConfig <a name="GoogleChronicleFindingsRefinementConfig" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleFindingsRefinementConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Instance,
    string Location,
    string DisplayName = null,
    string Id = null,
    IResolvable|GoogleChronicleFindingsRefinementOutcomeFilters[] OutcomeFilters = null,
    string Project = null,
    string Query = null,
    GoogleChronicleFindingsRefinementTimeouts Timeouts = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.instance">Instance</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name of the findings refinement. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#id GoogleChronicleFindingsRefinement#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.outcomeFilters">OutcomeFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>[]</code> | outcome_filters block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#project GoogleChronicleFindingsRefinement#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.query">Query</a></code> | <code>string</code> | The query for the findings refinement. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.type">Type</a></code> | <code>string</code> | DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#instance GoogleChronicleFindingsRefinement#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#location GoogleChronicleFindingsRefinement#location}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name of the findings refinement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#display_name GoogleChronicleFindingsRefinement#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#id GoogleChronicleFindingsRefinement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OutcomeFilters`<sup>Optional</sup> <a name="OutcomeFilters" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.outcomeFilters"></a>

```csharp
public IResolvable|GoogleChronicleFindingsRefinementOutcomeFilters[] OutcomeFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>[]

outcome_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#outcome_filters GoogleChronicleFindingsRefinement#outcome_filters}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#project GoogleChronicleFindingsRefinement#project}.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The query for the findings refinement.

Works in conjunction with the type
field to determine the findings refinement behavior. The syntax of this
query is the same as a UDM search string. See the following for more
information:
https://cloud.google.com/chronicle/docs/investigation/udm-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#query GoogleChronicleFindingsRefinement#query}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.timeouts"></a>

```csharp
public GoogleChronicleFindingsRefinementTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#timeouts GoogleChronicleFindingsRefinement#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

DETECTION_EXCLUSION is the only supported type of findings refinement. Possible values: DETECTION_EXCLUSION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#type GoogleChronicleFindingsRefinement#type}

---

### GoogleChronicleFindingsRefinementOutcomeFilters <a name="GoogleChronicleFindingsRefinementOutcomeFilters" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleFindingsRefinementOutcomeFilters {
    string OutcomeFilterOperator,
    string OutcomeValue,
    string OutcomeVariable
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.property.outcomeFilterOperator">OutcomeFilterOperator</a></code> | <code>string</code> | The operator to be applied to the outcome variable. Possible values: EQUAL CONTAINS MATCHES_REGEX MATCHES_CIDR. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.property.outcomeValue">OutcomeValue</a></code> | <code>string</code> | The value of the outcome variable to match. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.property.outcomeVariable">OutcomeVariable</a></code> | <code>string</code> | The outcome variable name. |

---

##### `OutcomeFilterOperator`<sup>Required</sup> <a name="OutcomeFilterOperator" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.property.outcomeFilterOperator"></a>

```csharp
public string OutcomeFilterOperator { get; set; }
```

- *Type:* string

The operator to be applied to the outcome variable. Possible values: EQUAL CONTAINS MATCHES_REGEX MATCHES_CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#outcome_filter_operator GoogleChronicleFindingsRefinement#outcome_filter_operator}

---

##### `OutcomeValue`<sup>Required</sup> <a name="OutcomeValue" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.property.outcomeValue"></a>

```csharp
public string OutcomeValue { get; set; }
```

- *Type:* string

The value of the outcome variable to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#outcome_value GoogleChronicleFindingsRefinement#outcome_value}

---

##### `OutcomeVariable`<sup>Required</sup> <a name="OutcomeVariable" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters.property.outcomeVariable"></a>

```csharp
public string OutcomeVariable { get; set; }
```

- *Type:* string

The outcome variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#outcome_variable GoogleChronicleFindingsRefinement#outcome_variable}

---

### GoogleChronicleFindingsRefinementTimeouts <a name="GoogleChronicleFindingsRefinementTimeouts" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleFindingsRefinementTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#create GoogleChronicleFindingsRefinement#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#delete GoogleChronicleFindingsRefinement#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#update GoogleChronicleFindingsRefinement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#create GoogleChronicleFindingsRefinement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#delete GoogleChronicleFindingsRefinement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_findings_refinement#update GoogleChronicleFindingsRefinement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleFindingsRefinementOutcomeFiltersList <a name="GoogleChronicleFindingsRefinementOutcomeFiltersList" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleFindingsRefinementOutcomeFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.get"></a>

```csharp
private GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersList.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleFindingsRefinementOutcomeFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>[]

---


### GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference <a name="GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperatorInput">OutcomeFilterOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValueInput">OutcomeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariableInput">OutcomeVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperator">OutcomeFilterOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValue">OutcomeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariable">OutcomeVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutcomeFilterOperatorInput`<sup>Optional</sup> <a name="OutcomeFilterOperatorInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperatorInput"></a>

```csharp
public string OutcomeFilterOperatorInput { get; }
```

- *Type:* string

---

##### `OutcomeValueInput`<sup>Optional</sup> <a name="OutcomeValueInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValueInput"></a>

```csharp
public string OutcomeValueInput { get; }
```

- *Type:* string

---

##### `OutcomeVariableInput`<sup>Optional</sup> <a name="OutcomeVariableInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariableInput"></a>

```csharp
public string OutcomeVariableInput { get; }
```

- *Type:* string

---

##### `OutcomeFilterOperator`<sup>Required</sup> <a name="OutcomeFilterOperator" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeFilterOperator"></a>

```csharp
public string OutcomeFilterOperator { get; }
```

- *Type:* string

---

##### `OutcomeValue`<sup>Required</sup> <a name="OutcomeValue" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeValue"></a>

```csharp
public string OutcomeValue { get; }
```

- *Type:* string

---

##### `OutcomeVariable`<sup>Required</sup> <a name="OutcomeVariable" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.outcomeVariable"></a>

```csharp
public string OutcomeVariable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleFindingsRefinementOutcomeFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementOutcomeFilters">GoogleChronicleFindingsRefinementOutcomeFilters</a>

---


### GoogleChronicleFindingsRefinementTimeoutsOutputReference <a name="GoogleChronicleFindingsRefinementTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleChronicleFindingsRefinementTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleChronicleFindingsRefinementTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleFindingsRefinement.GoogleChronicleFindingsRefinementTimeouts">GoogleChronicleFindingsRefinementTimeouts</a>

---



