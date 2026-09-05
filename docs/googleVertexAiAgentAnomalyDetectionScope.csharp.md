# `googleVertexAiAgentAnomalyDetectionScope` Submodule <a name="`googleVertexAiAgentAnomalyDetectionScope` Submodule" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiAgentAnomalyDetectionScope <a name="GoogleVertexAiAgentAnomalyDetectionScope" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope google_vertex_ai_agent_anomaly_detection_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiAgentAnomalyDetectionScope(Construct Scope, string Id, GoogleVertexAiAgentAnomalyDetectionScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig">GoogleVertexAiAgentAnomalyDetectionScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig">GoogleVertexAiAgentAnomalyDetectionScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiAgentAnomalyDetectionScopeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiAgentAnomalyDetectionScope resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiAgentAnomalyDetectionScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiAgentAnomalyDetectionScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiAgentAnomalyDetectionScope.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiAgentAnomalyDetectionScope.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVertexAiAgentAnomalyDetectionScope resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiAgentAnomalyDetectionScope to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiAgentAnomalyDetectionScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiAgentAnomalyDetectionScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference">GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeIdInput">AgentAnomalyDetectionScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBucketsInput">LogBucketsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBucketsInput">ObservabilityBucketsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeId">AgentAnomalyDetectionScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBuckets">LogBuckets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBuckets">ObservabilityBuckets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeouts"></a>

```csharp
public GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference">GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference</a>

---

##### `AgentAnomalyDetectionScopeIdInput`<sup>Optional</sup> <a name="AgentAnomalyDetectionScopeIdInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeIdInput"></a>

```csharp
public string AgentAnomalyDetectionScopeIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogBucketsInput`<sup>Optional</sup> <a name="LogBucketsInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBucketsInput"></a>

```csharp
public string[] LogBucketsInput { get; }
```

- *Type:* string[]

---

##### `ObservabilityBucketsInput`<sup>Optional</sup> <a name="ObservabilityBucketsInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBucketsInput"></a>

```csharp
public string[] ObservabilityBucketsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVertexAiAgentAnomalyDetectionScopeTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

---

##### `AgentAnomalyDetectionScopeId`<sup>Required</sup> <a name="AgentAnomalyDetectionScopeId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeId"></a>

```csharp
public string AgentAnomalyDetectionScopeId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogBuckets`<sup>Required</sup> <a name="LogBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBuckets"></a>

```csharp
public string[] LogBuckets { get; }
```

- *Type:* string[]

---

##### `ObservabilityBuckets`<sup>Required</sup> <a name="ObservabilityBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBuckets"></a>

```csharp
public string[] ObservabilityBuckets { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiAgentAnomalyDetectionScopeConfig <a name="GoogleVertexAiAgentAnomalyDetectionScopeConfig" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiAgentAnomalyDetectionScopeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AgentAnomalyDetectionScopeId,
    string[] LogBuckets,
    string[] ObservabilityBuckets,
    string Region,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    GoogleVertexAiAgentAnomalyDetectionScopeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.agentAnomalyDetectionScopeId">AgentAnomalyDetectionScopeId</a></code> | <code>string</code> | The ID to use for the AgentAnomalyDetectionScope, which will become the final component of the scope's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.logBuckets">LogBuckets</a></code> | <code>string[]</code> | Customer owned Cloud Logging bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.observabilityBuckets">ObservabilityBuckets</a></code> | <code>string[]</code> | Customer owned Cloud Observability bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.region">Region</a></code> | <code>string</code> | The region of the AgentAnomalyDetectionScope, e.g. us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User provided display name of the AgentAnomalyDetectionScope. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentAnomalyDetectionScopeId`<sup>Required</sup> <a name="AgentAnomalyDetectionScopeId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.agentAnomalyDetectionScopeId"></a>

```csharp
public string AgentAnomalyDetectionScopeId { get; set; }
```

- *Type:* string

The ID to use for the AgentAnomalyDetectionScope, which will become the final component of the scope's resource name.

This value should be 1-63
characters and valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#agent_anomaly_detection_scope_id GoogleVertexAiAgentAnomalyDetectionScope#agent_anomaly_detection_scope_id}

---

##### `LogBuckets`<sup>Required</sup> <a name="LogBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.logBuckets"></a>

```csharp
public string[] LogBuckets { get; set; }
```

- *Type:* string[]

Customer owned Cloud Logging bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#log_buckets GoogleVertexAiAgentAnomalyDetectionScope#log_buckets}

---

##### `ObservabilityBuckets`<sup>Required</sup> <a name="ObservabilityBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.observabilityBuckets"></a>

```csharp
public string[] ObservabilityBuckets { get; set; }
```

- *Type:* string[]

Customer owned Cloud Observability bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#observability_buckets GoogleVertexAiAgentAnomalyDetectionScope#observability_buckets}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the AgentAnomalyDetectionScope, e.g. us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#region GoogleVertexAiAgentAnomalyDetectionScope#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#deletion_policy GoogleVertexAiAgentAnomalyDetectionScope#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User provided display name of the AgentAnomalyDetectionScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#display_name GoogleVertexAiAgentAnomalyDetectionScope#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiAgentAnomalyDetectionScopeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#timeouts GoogleVertexAiAgentAnomalyDetectionScope#timeouts}

---

### GoogleVertexAiAgentAnomalyDetectionScopeTimeouts <a name="GoogleVertexAiAgentAnomalyDetectionScopeTimeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiAgentAnomalyDetectionScopeTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#create GoogleVertexAiAgentAnomalyDetectionScope#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#delete GoogleVertexAiAgentAnomalyDetectionScope#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#create GoogleVertexAiAgentAnomalyDetectionScope#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#delete GoogleVertexAiAgentAnomalyDetectionScope#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference <a name="GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiAgentAnomalyDetectionScopeTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

---



