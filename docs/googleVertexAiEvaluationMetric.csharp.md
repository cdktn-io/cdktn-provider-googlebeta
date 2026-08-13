# `googleVertexAiEvaluationMetric` Submodule <a name="`googleVertexAiEvaluationMetric` Submodule" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiEvaluationMetric <a name="GoogleVertexAiEvaluationMetric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric google_vertex_ai_evaluation_metric}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiEvaluationMetric(Construct Scope, string Id, GoogleVertexAiEvaluationMetricConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig">GoogleVertexAiEvaluationMetricConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig">GoogleVertexAiEvaluationMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetEvaluationMetricId">ResetEvaluationMetricId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetGcsUri">ResetGcsUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(GoogleVertexAiEvaluationMetricEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiEvaluationMetricTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetEvaluationMetricId` <a name="ResetEvaluationMetricId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetEvaluationMetricId"></a>

```csharp
private void ResetEvaluationMetricId()
```

##### `ResetGcsUri` <a name="ResetGcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetGcsUri"></a>

```csharp
private void ResetGcsUri()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetMetric"></a>

```csharp
private void ResetMetric()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiEvaluationMetric resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiEvaluationMetric.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiEvaluationMetric.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiEvaluationMetric.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiEvaluationMetric.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVertexAiEvaluationMetric resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiEvaluationMetric to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiEvaluationMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiEvaluationMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference">GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference">GoogleVertexAiEvaluationMetricTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.evaluationMetricIdInput">EvaluationMetricIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.gcsUriInput">GcsUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.metricInput">MetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.evaluationMetricId">EvaluationMetricId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.gcsUri">GcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.metric">Metric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference">GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.timeouts"></a>

```csharp
public GoogleVertexAiEvaluationMetricTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference">GoogleVertexAiEvaluationMetricTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.encryptionSpecInput"></a>

```csharp
public GoogleVertexAiEvaluationMetricEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a>

---

##### `EvaluationMetricIdInput`<sup>Optional</sup> <a name="EvaluationMetricIdInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.evaluationMetricIdInput"></a>

```csharp
public string EvaluationMetricIdInput { get; }
```

- *Type:* string

---

##### `GcsUriInput`<sup>Optional</sup> <a name="GcsUriInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.gcsUriInput"></a>

```csharp
public string GcsUriInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.metricInput"></a>

```csharp
public string MetricInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVertexAiEvaluationMetricTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EvaluationMetricId`<sup>Required</sup> <a name="EvaluationMetricId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.evaluationMetricId"></a>

```csharp
public string EvaluationMetricId { get; }
```

- *Type:* string

---

##### `GcsUri`<sup>Required</sup> <a name="GcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.gcsUri"></a>

```csharp
public string GcsUri { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.metric"></a>

```csharp
public string Metric { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetric.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiEvaluationMetricConfig <a name="GoogleVertexAiEvaluationMetricConfig" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiEvaluationMetricConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Region,
    string DeletionPolicy = null,
    string Description = null,
    GoogleVertexAiEvaluationMetricEncryptionSpec EncryptionSpec = null,
    string EvaluationMetricId = null,
    string GcsUri = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Metric = null,
    string Project = null,
    GoogleVertexAiEvaluationMetricTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-friendly display name for the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.region">Region</a></code> | <code>string</code> | The region of the EvaluationMetric. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.description">Description</a></code> | <code>string</code> | A description of the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.evaluationMetricId">EvaluationMetricId</a></code> | <code>string</code> | The ID to use for the EvaluationMetric, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.gcsUri">GcsUri</a></code> | <code>string</code> | The Google Cloud Storage URI that stores the metric specification. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#id GoogleVertexAiEvaluationMetric#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels for the EvaluationMetric. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.metric">Metric</a></code> | <code>string</code> | The metric configuration as a JSON string. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#project GoogleVertexAiEvaluationMetric#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-friendly display name for the EvaluationMetric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#display_name GoogleVertexAiEvaluationMetric#display_name}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the EvaluationMetric. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#region GoogleVertexAiEvaluationMetric#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#deletion_policy GoogleVertexAiEvaluationMetric#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the EvaluationMetric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#description GoogleVertexAiEvaluationMetric#description}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.encryptionSpec"></a>

```csharp
public GoogleVertexAiEvaluationMetricEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#encryption_spec GoogleVertexAiEvaluationMetric#encryption_spec}

---

##### `EvaluationMetricId`<sup>Optional</sup> <a name="EvaluationMetricId" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.evaluationMetricId"></a>

```csharp
public string EvaluationMetricId { get; set; }
```

- *Type:* string

The ID to use for the EvaluationMetric, which will become the final component of the resource name.

This value should be 1-63 characters,
and valid characters are /[a-z][0-9]-/. The first character must be
a lowercase letter, and the last character must be a lowercase letter
or number. If not provided, the server will generate a unique ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#evaluation_metric_id GoogleVertexAiEvaluationMetric#evaluation_metric_id}

---

##### `GcsUri`<sup>Optional</sup> <a name="GcsUri" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.gcsUri"></a>

```csharp
public string GcsUri { get; set; }
```

- *Type:* string

The Google Cloud Storage URI that stores the metric specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#gcs_uri GoogleVertexAiEvaluationMetric#gcs_uri}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#id GoogleVertexAiEvaluationMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels for the EvaluationMetric.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#labels GoogleVertexAiEvaluationMetric#labels}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.metric"></a>

```csharp
public string Metric { get; set; }
```

- *Type:* string

The metric configuration as a JSON string.

Uses camelCase field names
to match the API format. Supports LLM-based metrics and custom code
execution metrics.
See the [API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)
for the full schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#metric GoogleVertexAiEvaluationMetric#metric}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#project GoogleVertexAiEvaluationMetric#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiEvaluationMetricTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#timeouts GoogleVertexAiEvaluationMetric#timeouts}

---

### GoogleVertexAiEvaluationMetricEncryptionSpec <a name="GoogleVertexAiEvaluationMetricEncryptionSpec" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiEvaluationMetricEncryptionSpec {
    string KmsKeyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Required. |

---

##### `KmsKeyName`<sup>Optional</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Required.

The Cloud KMS resource identifier of the customer managed encryption key
used to protect a resource. Has the form:
'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
The key needs to be in the same region as where the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#kms_key_name GoogleVertexAiEvaluationMetric#kms_key_name}

---

### GoogleVertexAiEvaluationMetricTimeouts <a name="GoogleVertexAiEvaluationMetricTimeouts" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiEvaluationMetricTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#create GoogleVertexAiEvaluationMetric#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#delete GoogleVertexAiEvaluationMetric#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#update GoogleVertexAiEvaluationMetric#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#create GoogleVertexAiEvaluationMetric#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#delete GoogleVertexAiEvaluationMetric#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_vertex_ai_evaluation_metric#update GoogleVertexAiEvaluationMetric#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference <a name="GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resetKmsKeyName">ResetKmsKeyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyName` <a name="ResetKmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.resetKmsKeyName"></a>

```csharp
private void ResetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiEvaluationMetricEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricEncryptionSpec">GoogleVertexAiEvaluationMetricEncryptionSpec</a>

---


### GoogleVertexAiEvaluationMetricTimeoutsOutputReference <a name="GoogleVertexAiEvaluationMetricTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiEvaluationMetricTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiEvaluationMetricTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiEvaluationMetric.GoogleVertexAiEvaluationMetricTimeouts">GoogleVertexAiEvaluationMetricTimeouts</a>

---



