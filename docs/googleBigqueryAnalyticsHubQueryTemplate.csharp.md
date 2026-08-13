# `googleBigqueryAnalyticsHubQueryTemplate` Submodule <a name="`googleBigqueryAnalyticsHubQueryTemplate` Submodule" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryAnalyticsHubQueryTemplate <a name="GoogleBigqueryAnalyticsHubQueryTemplate" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template google_bigquery_analytics_hub_query_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubQueryTemplate(Construct Scope, string Id, GoogleBigqueryAnalyticsHubQueryTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig">GoogleBigqueryAnalyticsHubQueryTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig">GoogleBigqueryAnalyticsHubQueryTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putRoutine">PutRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDocumentation">ResetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetPrimaryContact">ResetPrimaryContact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetRoutine">ResetRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetSubmit">ResetSubmit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoutine` <a name="PutRoutine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putRoutine"></a>

```csharp
private void PutRoutine(GoogleBigqueryAnalyticsHubQueryTemplateRoutine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putRoutine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBigqueryAnalyticsHubQueryTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDocumentation` <a name="ResetDocumentation" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetDocumentation"></a>

```csharp
private void ResetDocumentation()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrimaryContact` <a name="ResetPrimaryContact" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetPrimaryContact"></a>

```csharp
private void ResetPrimaryContact()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRoutine` <a name="ResetRoutine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetRoutine"></a>

```csharp
private void ResetRoutine()
```

##### `ResetSubmit` <a name="ResetSubmit" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetSubmit"></a>

```csharp
private void ResetSubmit()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubQueryTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubQueryTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubQueryTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBigqueryAnalyticsHubQueryTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleBigqueryAnalyticsHubQueryTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryAnalyticsHubQueryTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryAnalyticsHubQueryTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryAnalyticsHubQueryTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.routine">Routine</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference">GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference">GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dataExchangeIdInput">DataExchangeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.documentationInput">DocumentationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.primaryContactInput">PrimaryContactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.queryTemplateIdInput">QueryTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.routineInput">RoutineInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.submitInput">SubmitInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dataExchangeId">DataExchangeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.documentation">Documentation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.primaryContact">PrimaryContact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.queryTemplateId">QueryTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.submit">Submit</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Routine`<sup>Required</sup> <a name="Routine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.routine"></a>

```csharp
public GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference Routine { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference">GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.timeouts"></a>

```csharp
public GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference">GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DataExchangeIdInput`<sup>Optional</sup> <a name="DataExchangeIdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dataExchangeIdInput"></a>

```csharp
public string DataExchangeIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DocumentationInput`<sup>Optional</sup> <a name="DocumentationInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.documentationInput"></a>

```csharp
public string DocumentationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PrimaryContactInput`<sup>Optional</sup> <a name="PrimaryContactInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.primaryContactInput"></a>

```csharp
public string PrimaryContactInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QueryTemplateIdInput`<sup>Optional</sup> <a name="QueryTemplateIdInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.queryTemplateIdInput"></a>

```csharp
public string QueryTemplateIdInput { get; }
```

- *Type:* string

---

##### `RoutineInput`<sup>Optional</sup> <a name="RoutineInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.routineInput"></a>

```csharp
public GoogleBigqueryAnalyticsHubQueryTemplateRoutine RoutineInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

---

##### `SubmitInput`<sup>Optional</sup> <a name="SubmitInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.submitInput"></a>

```csharp
public bool|IResolvable SubmitInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleBigqueryAnalyticsHubQueryTemplateTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a>

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.dataExchangeId"></a>

```csharp
public string DataExchangeId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Documentation`<sup>Required</sup> <a name="Documentation" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.documentation"></a>

```csharp
public string Documentation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PrimaryContact`<sup>Required</sup> <a name="PrimaryContact" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.primaryContact"></a>

```csharp
public string PrimaryContact { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `QueryTemplateId`<sup>Required</sup> <a name="QueryTemplateId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.queryTemplateId"></a>

```csharp
public string QueryTemplateId { get; }
```

- *Type:* string

---

##### `Submit`<sup>Required</sup> <a name="Submit" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.submit"></a>

```csharp
public bool|IResolvable Submit { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryAnalyticsHubQueryTemplateConfig <a name="GoogleBigqueryAnalyticsHubQueryTemplateConfig" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubQueryTemplateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataExchangeId,
    string DisplayName,
    string Location,
    string QueryTemplateId,
    string DeletionPolicy = null,
    string Description = null,
    string Documentation = null,
    string Id = null,
    string PrimaryContact = null,
    string Project = null,
    GoogleBigqueryAnalyticsHubQueryTemplateRoutine Routine = null,
    bool|IResolvable Submit = null,
    GoogleBigqueryAnalyticsHubQueryTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.dataExchangeId">DataExchangeId</a></code> | <code>string</code> | The ID of the data exchange. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable display name of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.location">Location</a></code> | <code>string</code> | The name of the location this data exchange query template. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.queryTemplateId">QueryTemplateId</a></code> | <code>string</code> | Unique QueryTemplate ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.description">Description</a></code> | <code>string</code> | Short description of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.documentation">Documentation</a></code> | <code>string</code> | Documentation describing the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#id GoogleBigqueryAnalyticsHubQueryTemplate#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.primaryContact">PrimaryContact</a></code> | <code>string</code> | Email or URL of the primary point of contact of the QueryTemplate. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#project GoogleBigqueryAnalyticsHubQueryTemplate#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.routine">Routine</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a></code> | routine block. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.submit">Submit</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataExchangeId`<sup>Required</sup> <a name="DataExchangeId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.dataExchangeId"></a>

```csharp
public string DataExchangeId { get; set; }
```

- *Type:* string

The ID of the data exchange.

Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#data_exchange_id GoogleBigqueryAnalyticsHubQueryTemplate#data_exchange_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable display name of the QueryTemplate.

The display name must
contain only Unicode letters, numbers (0-9), underscores (_), dashes (-),
spaces ( ), ampersands (&) and can't start or end with spaces. Default
value is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#display_name GoogleBigqueryAnalyticsHubQueryTemplate#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location this data exchange query template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#location GoogleBigqueryAnalyticsHubQueryTemplate#location}

---

##### `QueryTemplateId`<sup>Required</sup> <a name="QueryTemplateId" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.queryTemplateId"></a>

```csharp
public string QueryTemplateId { get; set; }
```

- *Type:* string

Unique QueryTemplate ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#query_template_id GoogleBigqueryAnalyticsHubQueryTemplate#query_template_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

This field uses a custom implementation please refer to documentation under /hashicorp/terraform-provider-google-beta/website/docs/r/bigquery_analytics_hub_query_template.html.markdown for specifics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#deletion_policy GoogleBigqueryAnalyticsHubQueryTemplate#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Short description of the QueryTemplate.

The description must not contain
Unicode non-characters and C0 and C1 control codes except tabs,
new lines, carriage returns, and page breaks.
Default value is an empty string. Max length: 2000 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#description GoogleBigqueryAnalyticsHubQueryTemplate#description}

---

##### `Documentation`<sup>Optional</sup> <a name="Documentation" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.documentation"></a>

```csharp
public string Documentation { get; set; }
```

- *Type:* string

Documentation describing the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#documentation GoogleBigqueryAnalyticsHubQueryTemplate#documentation}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#id GoogleBigqueryAnalyticsHubQueryTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrimaryContact`<sup>Optional</sup> <a name="PrimaryContact" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.primaryContact"></a>

```csharp
public string PrimaryContact { get; set; }
```

- *Type:* string

Email or URL of the primary point of contact of the QueryTemplate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#primary_contact GoogleBigqueryAnalyticsHubQueryTemplate#primary_contact}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#project GoogleBigqueryAnalyticsHubQueryTemplate#project}.

---

##### `Routine`<sup>Optional</sup> <a name="Routine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.routine"></a>

```csharp
public GoogleBigqueryAnalyticsHubQueryTemplateRoutine Routine { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#routine GoogleBigqueryAnalyticsHubQueryTemplate#routine}

---

##### `Submit`<sup>Optional</sup> <a name="Submit" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.submit"></a>

```csharp
public bool|IResolvable Submit { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to 'true', the QueryTemplate will be submitted for approval and cannot be updated afterwards.

This is a one-time action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#submit GoogleBigqueryAnalyticsHubQueryTemplate#submit}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateConfig.property.timeouts"></a>

```csharp
public GoogleBigqueryAnalyticsHubQueryTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#timeouts GoogleBigqueryAnalyticsHubQueryTemplate#timeouts}

---

### GoogleBigqueryAnalyticsHubQueryTemplateRoutine <a name="GoogleBigqueryAnalyticsHubQueryTemplateRoutine" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubQueryTemplateRoutine {
    string DefinitionBody = null,
    string RoutineType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.property.definitionBody">DefinitionBody</a></code> | <code>string</code> | SQL query logic. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.property.routineType">RoutineType</a></code> | <code>string</code> | Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"]. |

---

##### `DefinitionBody`<sup>Optional</sup> <a name="DefinitionBody" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.property.definitionBody"></a>

```csharp
public string DefinitionBody { get; set; }
```

- *Type:* string

SQL query logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#definition_body GoogleBigqueryAnalyticsHubQueryTemplate#definition_body}

---

##### `RoutineType`<sup>Optional</sup> <a name="RoutineType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine.property.routineType"></a>

```csharp
public string RoutineType { get; set; }
```

- *Type:* string

Type of routine (e.g., TABLE_VALUED_FUNCTION). Possible values: ["TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#routine_type GoogleBigqueryAnalyticsHubQueryTemplate#routine_type}

---

### GoogleBigqueryAnalyticsHubQueryTemplateTimeouts <a name="GoogleBigqueryAnalyticsHubQueryTemplateTimeouts" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubQueryTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#create GoogleBigqueryAnalyticsHubQueryTemplate#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#delete GoogleBigqueryAnalyticsHubQueryTemplate#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#update GoogleBigqueryAnalyticsHubQueryTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#create GoogleBigqueryAnalyticsHubQueryTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#delete GoogleBigqueryAnalyticsHubQueryTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_bigquery_analytics_hub_query_template#update GoogleBigqueryAnalyticsHubQueryTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference <a name="GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetDefinitionBody">ResetDefinitionBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetRoutineType">ResetRoutineType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinitionBody` <a name="ResetDefinitionBody" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetDefinitionBody"></a>

```csharp
private void ResetDefinitionBody()
```

##### `ResetRoutineType` <a name="ResetRoutineType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.resetRoutineType"></a>

```csharp
private void ResetRoutineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBodyInput">DefinitionBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineTypeInput">RoutineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBody">DefinitionBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineType">RoutineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinitionBodyInput`<sup>Optional</sup> <a name="DefinitionBodyInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBodyInput"></a>

```csharp
public string DefinitionBodyInput { get; }
```

- *Type:* string

---

##### `RoutineTypeInput`<sup>Optional</sup> <a name="RoutineTypeInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineTypeInput"></a>

```csharp
public string RoutineTypeInput { get; }
```

- *Type:* string

---

##### `DefinitionBody`<sup>Required</sup> <a name="DefinitionBody" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.definitionBody"></a>

```csharp
public string DefinitionBody { get; }
```

- *Type:* string

---

##### `RoutineType`<sup>Required</sup> <a name="RoutineType" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.routineType"></a>

```csharp
public string RoutineType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutineOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryAnalyticsHubQueryTemplateRoutine InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateRoutine">GoogleBigqueryAnalyticsHubQueryTemplateRoutine</a>

---


### GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference <a name="GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleBigqueryAnalyticsHubQueryTemplateTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBigqueryAnalyticsHubQueryTemplate.GoogleBigqueryAnalyticsHubQueryTemplateTimeouts">GoogleBigqueryAnalyticsHubQueryTemplateTimeouts</a>

---



