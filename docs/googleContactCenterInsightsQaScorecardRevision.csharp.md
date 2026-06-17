# `googleContactCenterInsightsQaScorecardRevision` Submodule <a name="`googleContactCenterInsightsQaScorecardRevision` Submodule" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContactCenterInsightsQaScorecardRevision <a name="GoogleContactCenterInsightsQaScorecardRevision" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision google_contact_center_insights_qa_scorecard_revision}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsQaScorecardRevision(Construct Scope, string Id, GoogleContactCenterInsightsQaScorecardRevisionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig">GoogleContactCenterInsightsQaScorecardRevisionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig">GoogleContactCenterInsightsQaScorecardRevisionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetQaScorecardRevisionId">ResetQaScorecardRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleContactCenterInsightsQaScorecardRevisionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetQaScorecardRevisionId` <a name="ResetQaScorecardRevisionId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetQaScorecardRevisionId"></a>

```csharp
private void ResetQaScorecardRevisionId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleContactCenterInsightsQaScorecardRevision.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleContactCenterInsightsQaScorecardRevision.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleContactCenterInsightsQaScorecardRevision.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleContactCenterInsightsQaScorecardRevision.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleContactCenterInsightsQaScorecardRevision resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleContactCenterInsightsQaScorecardRevision to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleContactCenterInsightsQaScorecardRevision that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleContactCenterInsightsQaScorecardRevision to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.alternateIds">AlternateIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList">GoogleContactCenterInsightsQaScorecardRevisionSnapshotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference">GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardInput">QaScorecardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionIdInput">QaScorecardRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecard">QaScorecard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionId">QaScorecardRevisionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AlternateIds`<sup>Required</sup> <a name="AlternateIds" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.alternateIds"></a>

```csharp
public string[] AlternateIds { get; }
```

- *Type:* string[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.snapshot"></a>

```csharp
public GoogleContactCenterInsightsQaScorecardRevisionSnapshotList Snapshot { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList">GoogleContactCenterInsightsQaScorecardRevisionSnapshotList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeouts"></a>

```csharp
public GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference">GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QaScorecardInput`<sup>Optional</sup> <a name="QaScorecardInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardInput"></a>

```csharp
public string QaScorecardInput { get; }
```

- *Type:* string

---

##### `QaScorecardRevisionIdInput`<sup>Optional</sup> <a name="QaScorecardRevisionIdInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionIdInput"></a>

```csharp
public string QaScorecardRevisionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleContactCenterInsightsQaScorecardRevisionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `QaScorecard`<sup>Required</sup> <a name="QaScorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecard"></a>

```csharp
public string QaScorecard { get; }
```

- *Type:* string

---

##### `QaScorecardRevisionId`<sup>Required</sup> <a name="QaScorecardRevisionId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.qaScorecardRevisionId"></a>

```csharp
public string QaScorecardRevisionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevision.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContactCenterInsightsQaScorecardRevisionConfig <a name="GoogleContactCenterInsightsQaScorecardRevisionConfig" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsQaScorecardRevisionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string QaScorecard,
    string Id = null,
    string Project = null,
    string QaScorecardRevisionId = null,
    GoogleContactCenterInsightsQaScorecardRevisionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecard">QaScorecard</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#id GoogleContactCenterInsightsQaScorecardRevision#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#project GoogleContactCenterInsightsQaScorecardRevision#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecardRevisionId">QaScorecardRevisionId</a></code> | <code>string</code> | A unique ID for the new QaScorecardRevision. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#location GoogleContactCenterInsightsQaScorecardRevision#location}

---

##### `QaScorecard`<sup>Required</sup> <a name="QaScorecard" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecard"></a>

```csharp
public string QaScorecard { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#qa_scorecard GoogleContactCenterInsightsQaScorecardRevision#qa_scorecard}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#id GoogleContactCenterInsightsQaScorecardRevision#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#project GoogleContactCenterInsightsQaScorecardRevision#project}.

---

##### `QaScorecardRevisionId`<sup>Optional</sup> <a name="QaScorecardRevisionId" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.qaScorecardRevisionId"></a>

```csharp
public string QaScorecardRevisionId { get; set; }
```

- *Type:* string

A unique ID for the new QaScorecardRevision.

This ID will become the final
component of the QaScorecardRevision's resource name.
If no ID is specified this resource will get the latest revision on the given scorecard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#qa_scorecard_revision_id GoogleContactCenterInsightsQaScorecardRevision#qa_scorecard_revision_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionConfig.property.timeouts"></a>

```csharp
public GoogleContactCenterInsightsQaScorecardRevisionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#timeouts GoogleContactCenterInsightsQaScorecardRevision#timeouts}

---

### GoogleContactCenterInsightsQaScorecardRevisionSnapshot <a name="GoogleContactCenterInsightsQaScorecardRevisionSnapshot" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsQaScorecardRevisionSnapshot {

};
```


### GoogleContactCenterInsightsQaScorecardRevisionTimeouts <a name="GoogleContactCenterInsightsQaScorecardRevisionTimeouts" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsQaScorecardRevisionTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#create GoogleContactCenterInsightsQaScorecardRevision#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#delete GoogleContactCenterInsightsQaScorecardRevision#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#create GoogleContactCenterInsightsQaScorecardRevision#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_contact_center_insights_qa_scorecard_revision#delete GoogleContactCenterInsightsQaScorecardRevision#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContactCenterInsightsQaScorecardRevisionSnapshotList <a name="GoogleContactCenterInsightsQaScorecardRevisionSnapshotList" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsQaScorecardRevisionSnapshotList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.get"></a>

```csharp
private GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference <a name="GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.isDefault">IsDefault</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot">GoogleContactCenterInsightsQaScorecardRevisionSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshotOutputReference.property.internalValue"></a>

```csharp
public GoogleContactCenterInsightsQaScorecardRevisionSnapshot InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionSnapshot">GoogleContactCenterInsightsQaScorecardRevisionSnapshot</a>

---


### GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference <a name="GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleContactCenterInsightsQaScorecardRevisionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleContactCenterInsightsQaScorecardRevision.GoogleContactCenterInsightsQaScorecardRevisionTimeouts">GoogleContactCenterInsightsQaScorecardRevisionTimeouts</a>

---



