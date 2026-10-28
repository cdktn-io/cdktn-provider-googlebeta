# `googleVertexAiModelDevelopmentCluster` Submodule <a name="`googleVertexAiModelDevelopmentCluster` Submodule" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiModelDevelopmentCluster <a name="GoogleVertexAiModelDevelopmentCluster" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster google_vertex_ai_model_development_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentCluster(Construct Scope, string Id, GoogleVertexAiModelDevelopmentClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig">GoogleVertexAiModelDevelopmentClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig">GoogleVertexAiModelDevelopmentClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putLustreExportConfig">PutLustreExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNodePools">PutNodePools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putOrchestratorSpec">PutOrchestratorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putRuntimeSpec">PutRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetLustreExportConfig">ResetLustreExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetRuntimeSpec">ResetRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLustreExportConfig` <a name="PutLustreExportConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putLustreExportConfig"></a>

```csharp
private void PutLustreExportConfig(GoogleVertexAiModelDevelopmentClusterLustreExportConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putLustreExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNetwork"></a>

```csharp
private void PutNetwork(GoogleVertexAiModelDevelopmentClusterNetwork Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a>

---

##### `PutNodePools` <a name="PutNodePools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNodePools"></a>

```csharp
private void PutNodePools(IResolvable|GoogleVertexAiModelDevelopmentClusterNodePools[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putNodePools.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>[]

---

##### `PutOrchestratorSpec` <a name="PutOrchestratorSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putOrchestratorSpec"></a>

```csharp
private void PutOrchestratorSpec(GoogleVertexAiModelDevelopmentClusterOrchestratorSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putOrchestratorSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

---

##### `PutRuntimeSpec` <a name="PutRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putRuntimeSpec"></a>

```csharp
private void PutRuntimeSpec(GoogleVertexAiModelDevelopmentClusterRuntimeSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putRuntimeSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleVertexAiModelDevelopmentClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLustreExportConfig` <a name="ResetLustreExportConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetLustreExportConfig"></a>

```csharp
private void ResetLustreExportConfig()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRuntimeSpec` <a name="ResetRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetRuntimeSpec"></a>

```csharp
private void ResetRuntimeSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiModelDevelopmentCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiModelDevelopmentCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiModelDevelopmentCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiModelDevelopmentCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleVertexAiModelDevelopmentCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleVertexAiModelDevelopmentCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiModelDevelopmentCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiModelDevelopmentCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiModelDevelopmentCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.clusterEvents">ClusterEvents</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList">GoogleVertexAiModelDevelopmentClusterClusterEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.clusterStatus">ClusterStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList">GoogleVertexAiModelDevelopmentClusterClusterStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lustreExportConfig">LustreExportConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference">GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.network">Network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference">GoogleVertexAiModelDevelopmentClusterNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.nodePools">NodePools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList">GoogleVertexAiModelDevelopmentClusterNodePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.orchestratorSpec">OrchestratorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtime">Runtime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList">GoogleVertexAiModelDevelopmentClusterRuntimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtimeSpec">RuntimeSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference">GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference">GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lustreExportConfigInput">LustreExportConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.modelDevelopmentClusterIdInput">ModelDevelopmentClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.nodePoolsInput">NodePoolsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.orchestratorSpecInput">OrchestratorSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtimeSpecInput">RuntimeSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.modelDevelopmentClusterId">ModelDevelopmentClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterEvents`<sup>Required</sup> <a name="ClusterEvents" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.clusterEvents"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterClusterEventsList ClusterEvents { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList">GoogleVertexAiModelDevelopmentClusterClusterEventsList</a>

---

##### `ClusterStatus`<sup>Required</sup> <a name="ClusterStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.clusterStatus"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterClusterStatusList ClusterStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList">GoogleVertexAiModelDevelopmentClusterClusterStatusList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `LustreExportConfig`<sup>Required</sup> <a name="LustreExportConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lustreExportConfig"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference LustreExportConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference">GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.network"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNetworkOutputReference Network { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference">GoogleVertexAiModelDevelopmentClusterNetworkOutputReference</a>

---

##### `NodePools`<sup>Required</sup> <a name="NodePools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.nodePools"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsList NodePools { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList">GoogleVertexAiModelDevelopmentClusterNodePoolsList</a>

---

##### `OrchestratorSpec`<sup>Required</sup> <a name="OrchestratorSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.orchestratorSpec"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference OrchestratorSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference</a>

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtime"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeList Runtime { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList">GoogleVertexAiModelDevelopmentClusterRuntimeList</a>

---

##### `RuntimeSpec`<sup>Required</sup> <a name="RuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtimeSpec"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference RuntimeSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference">GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.timeouts"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference">GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LustreExportConfigInput`<sup>Optional</sup> <a name="LustreExportConfigInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.lustreExportConfigInput"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterLustreExportConfig LustreExportConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a>

---

##### `ModelDevelopmentClusterIdInput`<sup>Optional</sup> <a name="ModelDevelopmentClusterIdInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.modelDevelopmentClusterIdInput"></a>

```csharp
public string ModelDevelopmentClusterIdInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.networkInput"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNetwork NetworkInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a>

---

##### `NodePoolsInput`<sup>Optional</sup> <a name="NodePoolsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.nodePoolsInput"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterNodePools[] NodePoolsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>[]

---

##### `OrchestratorSpecInput`<sup>Optional</sup> <a name="OrchestratorSpecInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.orchestratorSpecInput"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpec OrchestratorSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuntimeSpecInput`<sup>Optional</sup> <a name="RuntimeSpecInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.runtimeSpecInput"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeSpec RuntimeSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ModelDevelopmentClusterId`<sup>Required</sup> <a name="ModelDevelopmentClusterId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.modelDevelopmentClusterId"></a>

```csharp
public string ModelDevelopmentClusterId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiModelDevelopmentClusterClusterEvents <a name="GoogleVertexAiModelDevelopmentClusterClusterEvents" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterEvents {

};
```


### GoogleVertexAiModelDevelopmentClusterClusterStatus <a name="GoogleVertexAiModelDevelopmentClusterClusterStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterStatus {

};
```


### GoogleVertexAiModelDevelopmentClusterClusterStatusError <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusError" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterStatusError {

};
```


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus {

};
```


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost {

};
```


### GoogleVertexAiModelDevelopmentClusterConfig <a name="GoogleVertexAiModelDevelopmentClusterConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ModelDevelopmentClusterId,
    IResolvable|GoogleVertexAiModelDevelopmentClusterNodePools[] NodePools,
    GoogleVertexAiModelDevelopmentClusterOrchestratorSpec OrchestratorSpec,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    GoogleVertexAiModelDevelopmentClusterLustreExportConfig LustreExportConfig = null,
    GoogleVertexAiModelDevelopmentClusterNetwork Network = null,
    string Project = null,
    string Region = null,
    GoogleVertexAiModelDevelopmentClusterRuntimeSpec RuntimeSpec = null,
    GoogleVertexAiModelDevelopmentClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.modelDevelopmentClusterId">ModelDevelopmentClusterId</a></code> | <code>string</code> | The ID to use for the cluster, which is the final component of the ModelDevelopmentCluster's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.nodePools">NodePools</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>[]</code> | node_pools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.orchestratorSpec">OrchestratorSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a></code> | orchestrator_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the ModelDevelopmentCluster. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize PersistentResource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.lustreExportConfig">LustreExportConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a></code> | lustre_export_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.network">Network</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a></code> | network block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#project GoogleVertexAiModelDevelopmentCluster#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.region">Region</a></code> | <code>string</code> | The region of the ModelDevelopmentCluster. eg us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.runtimeSpec">RuntimeSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a></code> | runtime_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ModelDevelopmentClusterId`<sup>Required</sup> <a name="ModelDevelopmentClusterId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.modelDevelopmentClusterId"></a>

```csharp
public string ModelDevelopmentClusterId { get; set; }
```

- *Type:* string

The ID to use for the cluster, which is the final component of the ModelDevelopmentCluster's resource name.

This value should be 1-10 characters, and valid characters
are '/^[a-z](%5Ba-z0-9-%5D%7B0,8%7D%5Ba-z0-9%5D)?$/'. When using 'slurm_spec',
hyphens are not allowed ('/^[a-z][a-z0-9]{0,9}$/').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#model_development_cluster_id GoogleVertexAiModelDevelopmentCluster#model_development_cluster_id}

---

##### `NodePools`<sup>Required</sup> <a name="NodePools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.nodePools"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterNodePools[] NodePools { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>[]

node_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_pools GoogleVertexAiModelDevelopmentCluster#node_pools}

---

##### `OrchestratorSpec`<sup>Required</sup> <a name="OrchestratorSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.orchestratorSpec"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpec OrchestratorSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

orchestrator_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#orchestrator_spec GoogleVertexAiModelDevelopmentCluster#orchestrator_spec}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#deletion_policy GoogleVertexAiModelDevelopmentCluster#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the ModelDevelopmentCluster.

The name can be up to 128 characters long and can consist of any UTF-8
characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#display_name GoogleVertexAiModelDevelopmentCluster#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize PersistentResource.

Label keys and values can be no longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.

See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#labels GoogleVertexAiModelDevelopmentCluster#labels}

---

##### `LustreExportConfig`<sup>Optional</sup> <a name="LustreExportConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.lustreExportConfig"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterLustreExportConfig LustreExportConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a>

lustre_export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#lustre_export_config GoogleVertexAiModelDevelopmentCluster#lustre_export_config}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.network"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNetwork Network { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#network GoogleVertexAiModelDevelopmentCluster#network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#project GoogleVertexAiModelDevelopmentCluster#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the ModelDevelopmentCluster. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#region GoogleVertexAiModelDevelopmentCluster#region}

---

##### `RuntimeSpec`<sup>Optional</sup> <a name="RuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.runtimeSpec"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeSpec RuntimeSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a>

runtime_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#runtime_spec GoogleVertexAiModelDevelopmentCluster#runtime_spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterConfig.property.timeouts"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#timeouts GoogleVertexAiModelDevelopmentCluster#timeouts}

---

### GoogleVertexAiModelDevelopmentClusterLustreExportConfig <a name="GoogleVertexAiModelDevelopmentClusterLustreExportConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterLustreExportConfig {
    string DestinationBucket,
    string[] DaysOfWeek = null,
    string[] Lustres = null,
    GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.destinationBucket">DestinationBucket</a></code> | <code>string</code> | The Cloud Storage bucket that backups are written to, without the "gs://" scheme. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Days of the week on which a backup runs, each at most once and none of them DAY_OF_WEEK_UNSPECIFIED. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.lustres">Lustres</a></code> | <code>string[]</code> | The Managed Lustre instances to back up, each named as "projects/{project}/locations/{zone}/instances/{instance}". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a></code> | start_time block. |

---

##### `DestinationBucket`<sup>Required</sup> <a name="DestinationBucket" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.destinationBucket"></a>

```csharp
public string DestinationBucket { get; set; }
```

- *Type:* string

The Cloud Storage bucket that backups are written to, without the "gs://" scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#destination_bucket GoogleVertexAiModelDevelopmentCluster#destination_bucket}

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Days of the week on which a backup runs, each at most once and none of them DAY_OF_WEEK_UNSPECIFIED.

If empty, a backup runs every day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#days_of_week GoogleVertexAiModelDevelopmentCluster#days_of_week}

---

##### `Lustres`<sup>Optional</sup> <a name="Lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.lustres"></a>

```csharp
public string[] Lustres { get; set; }
```

- *Type:* string[]

The Managed Lustre instances to back up, each named as "projects/{project}/locations/{zone}/instances/{instance}".

Every entry
must be attached to one of the cluster's node pools, and no entry may
repeat. If empty, every attached instance is backed up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#lustres GoogleVertexAiModelDevelopmentCluster#lustres}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig.property.startTime"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime StartTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#start_time GoogleVertexAiModelDevelopmentCluster#start_time}

---

### GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime <a name="GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime {
    double Hours = null,
    double Minutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.property.hours">Hours</a></code> | <code>double</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of a day in 24 hour format.

Must be greater than or equal to 0 and
typically must be less than or equal to 23. An API may choose to allow the
value "24:00:00" for scenarios like business closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#hours GoogleVertexAiModelDevelopmentCluster#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#minutes GoogleVertexAiModelDevelopmentCluster#minutes}

---

### GoogleVertexAiModelDevelopmentClusterNetwork <a name="GoogleVertexAiModelDevelopmentClusterNetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNetwork {
    string Network,
    string Subnetwork = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.property.network">Network</a></code> | <code>string</code> | The name of the VPC network where to create the cluster. The 'default' network is used if not specified. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.property.subnetwork">Subnetwork</a></code> | <code>string</code> | The name of the subnetwork in the above network to create the cluster. |

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name of the VPC network where to create the cluster. The 'default' network is used if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#network GoogleVertexAiModelDevelopmentCluster#network}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork.property.subnetwork"></a>

```csharp
public string Subnetwork { get; set; }
```

- *Type:* string

The name of the subnetwork in the above network to create the cluster.

If not specified:

* for auto mode VPC, the subnet in corresponding region is auto-selected;
* for custom mode VPC, a new subnet will be automatically created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#subnetwork GoogleVertexAiModelDevelopmentCluster#subnetwork}

---

### GoogleVertexAiModelDevelopmentClusterNodePools <a name="GoogleVertexAiModelDevelopmentClusterNodePools" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNodePools {
    string Id,
    GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec MachineSpec,
    GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk BootDisk = null,
    bool|IResolvable EnablePublicIps = null,
    string[] Filestores = null,
    string FlexStartMaxDuration = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string[] Lustres = null,
    string NodeImage = null,
    string ProvisioningModel = null,
    GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec ScalingSpec = null,
    string StartupScript = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.id">Id</a></code> | <code>string</code> | The unique ID referring to this node pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.enablePublicIps">EnablePublicIps</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable public IPs for the node pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.filestores">Filestores</a></code> | <code>string[]</code> | List of the existing Filestore instances to be mounted. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.flexStartMaxDuration">FlexStartMaxDuration</a></code> | <code>string</code> | The maximum duration for instances in this node pool. This field is only applicable when 'provisioning_model' is set to 'FLEX_START'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize the node pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.lustres">Lustres</a></code> | <code>string[]</code> | List of the existing Google Managed Lustre instances to be mounted. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.nodeImage">NodeImage</a></code> | <code>string</code> | The node image to be used for the VMs in the node pool. In format of "projects//global/images/" or "projects/test-project/global/images/family/". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.provisioningModel">ProvisioningModel</a></code> | <code>string</code> | Specifies the provisioning model for the node pool. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.scalingSpec">ScalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a></code> | scaling_spec block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.startupScript">StartupScript</a></code> | <code>string</code> | Startup script for the node pool instances. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.zone">Zone</a></code> | <code>string</code> | The zone of the node pool. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID referring to this node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.machineSpec"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec MachineSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#machine_spec GoogleVertexAiModelDevelopmentCluster#machine_spec}

---

##### `BootDisk`<sup>Optional</sup> <a name="BootDisk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.bootDisk"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk BootDisk { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#boot_disk GoogleVertexAiModelDevelopmentCluster#boot_disk}

---

##### `EnablePublicIps`<sup>Optional</sup> <a name="EnablePublicIps" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.enablePublicIps"></a>

```csharp
public bool|IResolvable EnablePublicIps { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable public IPs for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#enable_public_ips GoogleVertexAiModelDevelopmentCluster#enable_public_ips}

---

##### `Filestores`<sup>Optional</sup> <a name="Filestores" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.filestores"></a>

```csharp
public string[] Filestores { get; set; }
```

- *Type:* string[]

List of the existing Filestore instances to be mounted.

For example:
if "projects/my-project/locations/us-central1-a/instances/my-instance" is
specified, the instance will be mounted to the node pool under the path
"mnt/filestore/"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#filestores GoogleVertexAiModelDevelopmentCluster#filestores}

---

##### `FlexStartMaxDuration`<sup>Optional</sup> <a name="FlexStartMaxDuration" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.flexStartMaxDuration"></a>

```csharp
public string FlexStartMaxDuration { get; set; }
```

- *Type:* string

The maximum duration for instances in this node pool. This field is only applicable when 'provisioning_model' is set to 'FLEX_START'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#flex_start_max_duration GoogleVertexAiModelDevelopmentCluster#flex_start_max_duration}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize the node pool.

These
labels are applied to the underlying compute resources (for example, the
VM instances) of the node pool, so they appear in billing exports and
Cloud Monitoring filters.

Label keys and values can be no longer than 64 characters
(Unicode codepoints), can only contain lowercase letters, numeric
characters, underscores and dashes. International characters are allowed.

See https://goo.gl/xmQnxf for more information and examples of labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#labels GoogleVertexAiModelDevelopmentCluster#labels}

---

##### `Lustres`<sup>Optional</sup> <a name="Lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.lustres"></a>

```csharp
public string[] Lustres { get; set; }
```

- *Type:* string[]

List of the existing Google Managed Lustre instances to be mounted.

Similar to the filestores, the instance will be mounted to the node pool
under the path "/mnt/lustre/"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#lustres GoogleVertexAiModelDevelopmentCluster#lustres}

---

##### `NodeImage`<sup>Optional</sup> <a name="NodeImage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.nodeImage"></a>

```csharp
public string NodeImage { get; set; }
```

- *Type:* string

The node image to be used for the VMs in the node pool. In format of "projects//global/images/" or "projects/test-project/global/images/family/".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_image GoogleVertexAiModelDevelopmentCluster#node_image}

---

##### `ProvisioningModel`<sup>Optional</sup> <a name="ProvisioningModel" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.provisioningModel"></a>

```csharp
public string ProvisioningModel { get; set; }
```

- *Type:* string

Specifies the provisioning model for the node pool.

Behavior for 'PROVISIONING_MODEL_UNSPECIFIED':

* For CPU node pools: Defaults to 'ON_DEMAND'.
* For GPU node pools:
* If
  'machine_spec.reservation_affinity'
  is set, it defaults to 'RESERVATION'.
* If
  'machine_spec.reservation_affinity'
  is NOT set, this is an INVALID state and the request will be rejected.
  An explicit 'provisioning_model' must be provided.

## Constraints:

'machine_spec.reservation_affinity'
must not be set if 'provisioning_model' is 'ON_DEMAND', 'SPOT' or

## 'FLEX_START'.

'machine_spec.reservation_affinity'
must be set if 'provisioning_model' is 'RESERVATION'.
Possible values:
ON_DEMAND
RESERVATION
SPOT
FLEX_START

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#provisioning_model GoogleVertexAiModelDevelopmentCluster#provisioning_model}

---

##### `ScalingSpec`<sup>Optional</sup> <a name="ScalingSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.scalingSpec"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec ScalingSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a>

scaling_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#scaling_spec GoogleVertexAiModelDevelopmentCluster#scaling_spec}

---

##### `StartupScript`<sup>Optional</sup> <a name="StartupScript" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.startupScript"></a>

```csharp
public string StartupScript { get; set; }
```

- *Type:* string

Startup script for the node pool instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#startup_script GoogleVertexAiModelDevelopmentCluster#startup_script}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone of the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#zone GoogleVertexAiModelDevelopmentCluster#zone}

---

### GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk {
    double BootDiskSizeGb = null,
    string BootDiskType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | Size in GB of the boot disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | Type of the boot disk. |

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; set; }
```

- *Type:* double

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#boot_disk_size_gb GoogleVertexAiModelDevelopmentCluster#boot_disk_size_gb}

---

##### `BootDiskType`<sup>Optional</sup> <a name="BootDiskType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; set; }
```

- *Type:* string

Type of the boot disk.

For non-A3U machines, the default value is
"pd-ssd", for A3U machines, the default value is "hyperdisk-balanced".
Valid values: "pd-ssd" (Persistent Disk Solid State Drive),
"pd-standard" (Persistent Disk Hard Disk Drive) or "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#boot_disk_type GoogleVertexAiModelDevelopmentCluster#boot_disk_type}

---

### GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec {
    string MachineType,
    GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity ReservationAffinity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.property.machineType">MachineType</a></code> | <code>string</code> | The type of the machine. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a></code> | reservation_affinity block. |

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The type of the machine.

See the [list of machine types supported for
prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)

See the [list of machine types supported for custom
training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).

For DeployedModel this field is optional, and the default
value is 'n1-standard-2'. For BatchPredictionJob or as part of
WorkerPoolSpec this field is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#machine_type GoogleVertexAiModelDevelopmentCluster#machine_type}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec.property.reservationAffinity"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity ReservationAffinity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#reservation_affinity GoogleVertexAiModelDevelopmentCluster#reservation_affinity}

---

### GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity {
    string ReservationAffinityType,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.property.reservationAffinityType">ReservationAffinityType</a></code> | <code>string</code> | Specifies the reservation affinity type. Possible values: NO_RESERVATION ANY_RESERVATION SPECIFIC_RESERVATION. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.property.values">Values</a></code> | <code>string[]</code> | Corresponds to the label values of a reservation resource. |

---

##### `ReservationAffinityType`<sup>Required</sup> <a name="ReservationAffinityType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.property.reservationAffinityType"></a>

```csharp
public string ReservationAffinityType { get; set; }
```

- *Type:* string

Specifies the reservation affinity type. Possible values: NO_RESERVATION ANY_RESERVATION SPECIFIC_RESERVATION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#reservation_affinity_type GoogleVertexAiModelDevelopmentCluster#reservation_affinity_type}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Corresponds to the label values of a reservation resource.

This must be the
resource name of the reservation, reservation block, or reservation sub-
block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#values GoogleVertexAiModelDevelopmentCluster#values}

---

### GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec {
    double MaxNodeCount = null,
    double MinNodeCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | maximum size of the node pool, must be ≥ min_node_count. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | minimum size of the node pool, must be >= 0 and <= max_node_count. |

---

##### `MaxNodeCount`<sup>Optional</sup> <a name="MaxNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; set; }
```

- *Type:* double

maximum size of the node pool, must be ≥ min_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#max_node_count GoogleVertexAiModelDevelopmentCluster#max_node_count}

---

##### `MinNodeCount`<sup>Optional</sup> <a name="MinNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; set; }
```

- *Type:* double

minimum size of the node pool, must be >= 0 and <= max_node_count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#min_node_count GoogleVertexAiModelDevelopmentCluster#min_node_count}

---

### GoogleVertexAiModelDevelopmentClusterOrchestratorSpec <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpec {
    GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec SlurmSpec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec.property.slurmSpec">SlurmSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a></code> | slurm_spec block. |

---

##### `SlurmSpec`<sup>Optional</sup> <a name="SlurmSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec.property.slurmSpec"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec SlurmSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a>

slurm_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#slurm_spec GoogleVertexAiModelDevelopmentCluster#slurm_spec}

---

### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec {
    string HomeDirectoryStorage,
    string LoginNodePoolId,
    System.Collections.Generic.IDictionary<string, string> Config = null,
    string DefaultPartitionId = null,
    string[] EpilogBashScripts = null,
    IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets[] NodeSets = null,
    IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions[] Partitions = null,
    string[] PrologBashScripts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.homeDirectoryStorage">HomeDirectoryStorage</a></code> | <code>string</code> | Full name of the Filestore to be mounted as /home directory on every node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.loginNodePoolId">LoginNodePoolId</a></code> | <code>string</code> | The node pool id to be used as slurm login node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.config">Config</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Cluster-scoped Slurm settings, emitted as global 'Key=Value' lines in slurm.conf. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.defaultPartitionId">DefaultPartitionId</a></code> | <code>string</code> | Id of the partition that Slurm jobs submitted without an explicit partition run on, for example 'sbatch' without '--partition'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.epilogBashScripts">EpilogBashScripts</a></code> | <code>string[]</code> | Custom bash scripts executed after each slurm job on every allocated node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.nodeSets">NodeSets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>[]</code> | node_sets block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.partitions">Partitions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>[]</code> | partitions block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.prologBashScripts">PrologBashScripts</a></code> | <code>string[]</code> | Custom bash scripts executed before each slurm job on every allocated node. |

---

##### `HomeDirectoryStorage`<sup>Required</sup> <a name="HomeDirectoryStorage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.homeDirectoryStorage"></a>

```csharp
public string HomeDirectoryStorage { get; set; }
```

- *Type:* string

Full name of the Filestore to be mounted as /home directory on every node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#home_directory_storage GoogleVertexAiModelDevelopmentCluster#home_directory_storage}

---

##### `LoginNodePoolId`<sup>Required</sup> <a name="LoginNodePoolId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.loginNodePoolId"></a>

```csharp
public string LoginNodePoolId { get; set; }
```

- *Type:* string

The node pool id to be used as slurm login node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#login_node_pool_id GoogleVertexAiModelDevelopmentCluster#login_node_pool_id}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.config"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Config { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Cluster-scoped Slurm settings, emitted as global 'Key=Value' lines in slurm.conf.

Keys are Slurm parameter names exactly as documented by SchedMD
(https://slurm.schedmd.com/slurm.conf.html), matched case-insensitively.
Values are written the way slurm.conf writes them, including composite
forms such as 'bf_window=1440,bf_resolution=600'.

Example:
{ "PriorityType":            "priority/multifactor",
"PriorityWeightAge":       "1000",
"PreemptMode":             "SUSPEND,GANG",
"SchedulerParameters":     "bf_window=1440,bf_resolution=600" }

Unsupported, reserved, or misspelled parameters, and values that are not
legal for the parameter, are rejected at request time with the offending
parameter named; they are never silently dropped. Settings
that apply to a single partition or node pool belong in
'SlurmPartition.config' or 'SlurmNodeSet.config' instead -
several parameters (e.g. 'DefMemPerCPU', 'OverTimeLimit', 'PreemptMode')
are valid at more than one scope with different meanings and different
legal values.

On update this map is replaced wholesale; supply the complete desired set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#config GoogleVertexAiModelDevelopmentCluster#config}

---

##### `DefaultPartitionId`<sup>Optional</sup> <a name="DefaultPartitionId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.defaultPartitionId"></a>

```csharp
public string DefaultPartitionId { get; set; }
```

- *Type:* string

Id of the partition that Slurm jobs submitted without an explicit partition run on, for example 'sbatch' without '--partition'.

Must match
the 'id' of one of 'partitions'.

If unset, the service uses the first entry of 'partitions' and this field
stays empty; the cluster always has a default partition whether or not this
field is set. Setting it makes the choice independent of list order, which
matters because 'partitions' is replaced wholesale on update: reordering
the list, or prepending a partition to it, otherwise moves the default and
silently redirects every job submitted without '--partition'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#default_partition_id GoogleVertexAiModelDevelopmentCluster#default_partition_id}

---

##### `EpilogBashScripts`<sup>Optional</sup> <a name="EpilogBashScripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.epilogBashScripts"></a>

```csharp
public string[] EpilogBashScripts { get; set; }
```

- *Type:* string[]

Custom bash scripts executed after each slurm job on every allocated node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#epilog_bash_scripts GoogleVertexAiModelDevelopmentCluster#epilog_bash_scripts}

---

##### `NodeSets`<sup>Optional</sup> <a name="NodeSets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.nodeSets"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets[] NodeSets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>[]

node_sets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_sets GoogleVertexAiModelDevelopmentCluster#node_sets}

---

##### `Partitions`<sup>Optional</sup> <a name="Partitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.partitions"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions[] Partitions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>[]

partitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#partitions GoogleVertexAiModelDevelopmentCluster#partitions}

---

##### `PrologBashScripts`<sup>Optional</sup> <a name="PrologBashScripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec.property.prologBashScripts"></a>

```csharp
public string[] PrologBashScripts { get; set; }
```

- *Type:* string[]

Custom bash scripts executed before each slurm job on every allocated node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#prolog_bash_scripts GoogleVertexAiModelDevelopmentCluster#prolog_bash_scripts}

---

### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets {
    string NodePoolId,
    System.Collections.Generic.IDictionary<string, string> Config = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.property.nodePoolId">NodePoolId</a></code> | <code>string</code> | Id of the node pool these settings apply to. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.property.config">Config</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Node-scoped Slurm settings, emitted as additional 'Key=Value' pairs on the 'NodeName=' line for this node pool's nodes in slurm.conf. |

---

##### `NodePoolId`<sup>Required</sup> <a name="NodePoolId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.property.nodePoolId"></a>

```csharp
public string NodePoolId { get; set; }
```

- *Type:* string

Id of the node pool these settings apply to.

Must match the 'id' of one of
the node pools in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_pool_id GoogleVertexAiModelDevelopmentCluster#node_pool_id}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets.property.config"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Config { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Node-scoped Slurm settings, emitted as additional 'Key=Value' pairs on the 'NodeName=' line for this node pool's nodes in slurm.conf.

Example:
{ "Features":     "a3mega,nvlink",
"Weight":       "10",
"MemSpecLimit": "4096" }

On update this map is replaced wholesale; supply the complete desired set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#config GoogleVertexAiModelDevelopmentCluster#config}

---

### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions {
    string Id,
    string[] NodePoolIds,
    System.Collections.Generic.IDictionary<string, string> Config = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.id">Id</a></code> | <code>string</code> | Id of the slurm partiton. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.nodePoolIds">NodePoolIds</a></code> | <code>string[]</code> | Node pools for the slurm partition. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.config">Config</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Partition-scoped Slurm settings, emitted as additional 'Key=Value' pairs on this partition's 'PartitionName=' line in slurm.conf. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Id of the slurm partiton.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#id GoogleVertexAiModelDevelopmentCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodePoolIds`<sup>Required</sup> <a name="NodePoolIds" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.nodePoolIds"></a>

```csharp
public string[] NodePoolIds { get; set; }
```

- *Type:* string[]

Node pools for the slurm partition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#node_pool_ids GoogleVertexAiModelDevelopmentCluster#node_pool_ids}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions.property.config"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Config { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Partition-scoped Slurm settings, emitted as additional 'Key=Value' pairs on this partition's 'PartitionName=' line in slurm.conf.

Example:
{ "MaxTime":       "4-00:00:00",
"DenyAccounts":  "low-pri",
"PriorityTier":  "20",
"OverSubscribe": "YES:4" }

Note: values set here take precedence over service-computed defaults for
the same parameter (for example 'OverSubscribe' and 'DefMemPerCPU', which
the service otherwise derives from the partition's exclusivity and from
the memory per CPU of its nodes).

'Default' is rejected here: which partition is the default is a
cluster-scoped choice, so it belongs in 'SlurmSpec.default_partition_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#config GoogleVertexAiModelDevelopmentCluster#config}

---

### GoogleVertexAiModelDevelopmentClusterRuntime <a name="GoogleVertexAiModelDevelopmentClusterRuntime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntime {

};
```


### GoogleVertexAiModelDevelopmentClusterRuntimeSpec <a name="GoogleVertexAiModelDevelopmentClusterRuntimeSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeSpec {
    string ServiceAccount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | The default service account used by the cluster when running any workloads on it. |

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

The default service account used by the cluster when running any workloads on it.

If not specified, the default compute engine service account will be
used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#service_account GoogleVertexAiModelDevelopmentCluster#service_account}

---

### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices {

};
```


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec {

};
```


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus {

};
```


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanager <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanager" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeXmanager {

};
```


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError {

};
```


### GoogleVertexAiModelDevelopmentClusterTimeouts <a name="GoogleVertexAiModelDevelopmentClusterTimeouts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#create GoogleVertexAiModelDevelopmentCluster#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#delete GoogleVertexAiModelDevelopmentCluster#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#update GoogleVertexAiModelDevelopmentCluster#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#create GoogleVertexAiModelDevelopmentCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#delete GoogleVertexAiModelDevelopmentCluster#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.9.0/docs/resources/google_vertex_ai_model_development_cluster#update GoogleVertexAiModelDevelopmentCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiModelDevelopmentClusterClusterEventsList <a name="GoogleVertexAiModelDevelopmentClusterClusterEventsList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterEventsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventMessage">EventMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventTime">EventTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents">GoogleVertexAiModelDevelopmentClusterClusterEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventMessage`<sup>Required</sup> <a name="EventMessage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventMessage"></a>

```csharp
public string EventMessage { get; }
```

- *Type:* string

---

##### `EventTime`<sup>Required</sup> <a name="EventTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventTime"></a>

```csharp
public string EventTime { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEventsOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterClusterEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterEvents">GoogleVertexAiModelDevelopmentClusterClusterEvents</a>

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.details">Details</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError">GoogleVertexAiModelDevelopmentClusterClusterStatusError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.details"></a>

```csharp
public StringMapList Details { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterClusterStatusError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusError">GoogleVertexAiModelDevelopmentClusterClusterStatusError</a>

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusList <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.detail">Detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.lastUpdateTime">LastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodePoolId">NodePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodePoolType">NodePoolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodeState">NodeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.physicalHost">PhysicalHost</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.detail"></a>

```csharp
public string Detail { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.lastUpdateTime"></a>

```csharp
public string LastUpdateTime { get; }
```

- *Type:* string

---

##### `NodePoolId`<sup>Required</sup> <a name="NodePoolId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodePoolId"></a>

```csharp
public string NodePoolId { get; }
```

- *Type:* string

---

##### `NodePoolType`<sup>Required</sup> <a name="NodePoolType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodePoolType"></a>

```csharp
public string NodePoolType { get; }
```

- *Type:* string

---

##### `NodeState`<sup>Required</sup> <a name="NodeState" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.nodeState"></a>

```csharp
public string NodeState { get; }
```

- *Type:* string

---

##### `PhysicalHost`<sup>Required</sup> <a name="PhysicalHost" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.physicalHost"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList PhysicalHost { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatus</a>

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.blockId">BlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.hostId">HostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.subblockId">SubblockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockId`<sup>Required</sup> <a name="BlockId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.blockId"></a>

```csharp
public string BlockId { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `HostId`<sup>Required</sup> <a name="HostId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.hostId"></a>

```csharp
public string HostId { get; }
```

- *Type:* string

---

##### `SubblockId`<sup>Required</sup> <a name="SubblockId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.subblockId"></a>

```csharp
public string SubblockId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHostOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusPhysicalHost</a>

---


### GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference <a name="GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.detail">Detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList">GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.nodesStatus">NodesStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus">GoogleVertexAiModelDevelopmentClusterClusterStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.detail"></a>

```csharp
public string Detail { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.error"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList">GoogleVertexAiModelDevelopmentClusterClusterStatusErrorList</a>

---

##### `NodesStatus`<sup>Required</sup> <a name="NodesStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.nodesStatus"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList NodesStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList">GoogleVertexAiModelDevelopmentClusterClusterStatusNodesStatusList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterClusterStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterClusterStatus">GoogleVertexAiModelDevelopmentClusterClusterStatus</a>

---


### GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference <a name="GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetLustres">ResetLustres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.putStartTime"></a>

```csharp
private void PutStartTime(GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a>

---

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetLustres` <a name="ResetLustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetLustres"></a>

```csharp
private void ResetLustres()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.destinationBucketInput">DestinationBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.lustresInput">LustresInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.destinationBucket">DestinationBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.lustres">Lustres</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.startTime"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference</a>

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `DestinationBucketInput`<sup>Optional</sup> <a name="DestinationBucketInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.destinationBucketInput"></a>

```csharp
public string DestinationBucketInput { get; }
```

- *Type:* string

---

##### `LustresInput`<sup>Optional</sup> <a name="LustresInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.lustresInput"></a>

```csharp
public string[] LustresInput { get; }
```

- *Type:* string[]

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.startTimeInput"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime StartTimeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a>

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `DestinationBucket`<sup>Required</sup> <a name="DestinationBucket" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.destinationBucket"></a>

```csharp
public string DestinationBucket { get; }
```

- *Type:* string

---

##### `Lustres`<sup>Required</sup> <a name="Lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.lustres"></a>

```csharp
public string[] Lustres { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterLustreExportConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfig">GoogleVertexAiModelDevelopmentClusterLustreExportConfig</a>

---


### GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference <a name="GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTimeOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime">GoogleVertexAiModelDevelopmentClusterLustreExportConfigStartTime</a>

---


### GoogleVertexAiModelDevelopmentClusterNetworkOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNetworkOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNetworkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.resetSubnetwork"></a>

```csharp
private void ResetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.subnetworkInput">SubnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.subnetwork">Subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.subnetworkInput"></a>

```csharp
public string SubnetworkInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.subnetwork"></a>

```csharp
public string Subnetwork { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetworkOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNetwork InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNetwork">GoogleVertexAiModelDevelopmentClusterNetwork</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resetBootDiskType">ResetBootDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resetBootDiskSizeGb"></a>

```csharp
private void ResetBootDiskSizeGb()
```

##### `ResetBootDiskType` <a name="ResetBootDiskType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.resetBootDiskType"></a>

```csharp
private void ResetBootDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskTypeInput">BootDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskSizeGbInput"></a>

```csharp
public double BootDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `BootDiskTypeInput`<sup>Optional</sup> <a name="BootDiskTypeInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskTypeInput"></a>

```csharp
public string BootDiskTypeInput { get; }
```

- *Type:* string

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; }
```

- *Type:* double

---

##### `BootDiskType`<sup>Required</sup> <a name="BootDiskType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsList <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNodePoolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterNodePools[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>[]

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.putReservationAffinity"></a>

```csharp
private void PutReservationAffinity(GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a>

---

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.resetReservationAffinity"></a>

```csharp
private void ResetReservationAffinity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.reservationAffinity"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference ReservationAffinity { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference</a>

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.reservationAffinityInput"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity ReservationAffinityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a>

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput">ReservationAffinityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType">ReservationAffinityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReservationAffinityTypeInput`<sup>Optional</sup> <a name="ReservationAffinityTypeInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput"></a>

```csharp
public string ReservationAffinityTypeInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `ReservationAffinityType`<sup>Required</sup> <a name="ReservationAffinityType" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType"></a>

```csharp
public string ReservationAffinityType { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinityOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecReservationAffinity</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putBootDisk">PutBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putScalingSpec">PutScalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetBootDisk">ResetBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetEnablePublicIps">ResetEnablePublicIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetFilestores">ResetFilestores</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetFlexStartMaxDuration">ResetFlexStartMaxDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetLustres">ResetLustres</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetNodeImage">ResetNodeImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetProvisioningModel">ResetProvisioningModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetScalingSpec">ResetScalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetStartupScript">ResetStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBootDisk` <a name="PutBootDisk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putBootDisk"></a>

```csharp
private void PutBootDisk(GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putBootDisk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a>

---

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putMachineSpec"></a>

```csharp
private void PutMachineSpec(GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a>

---

##### `PutScalingSpec` <a name="PutScalingSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putScalingSpec"></a>

```csharp
private void PutScalingSpec(GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.putScalingSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a>

---

##### `ResetBootDisk` <a name="ResetBootDisk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetBootDisk"></a>

```csharp
private void ResetBootDisk()
```

##### `ResetEnablePublicIps` <a name="ResetEnablePublicIps" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetEnablePublicIps"></a>

```csharp
private void ResetEnablePublicIps()
```

##### `ResetFilestores` <a name="ResetFilestores" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetFilestores"></a>

```csharp
private void ResetFilestores()
```

##### `ResetFlexStartMaxDuration` <a name="ResetFlexStartMaxDuration" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetFlexStartMaxDuration"></a>

```csharp
private void ResetFlexStartMaxDuration()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLustres` <a name="ResetLustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetLustres"></a>

```csharp
private void ResetLustres()
```

##### `ResetNodeImage` <a name="ResetNodeImage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetNodeImage"></a>

```csharp
private void ResetNodeImage()
```

##### `ResetProvisioningModel` <a name="ResetProvisioningModel" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetProvisioningModel"></a>

```csharp
private void ResetProvisioningModel()
```

##### `ResetScalingSpec` <a name="ResetScalingSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetScalingSpec"></a>

```csharp
private void ResetScalingSpec()
```

##### `ResetStartupScript` <a name="ResetStartupScript" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetStartupScript"></a>

```csharp
private void ResetStartupScript()
```

##### `ResetZone` <a name="ResetZone" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.resetZone"></a>

```csharp
private void ResetZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.effectiveFlexStartMaxDuration">EffectiveFlexStartMaxDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.scalingSpec">ScalingSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.bootDiskInput">BootDiskInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.enablePublicIpsInput">EnablePublicIpsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.filestoresInput">FilestoresInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.flexStartMaxDurationInput">FlexStartMaxDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.lustresInput">LustresInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.nodeImageInput">NodeImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.provisioningModelInput">ProvisioningModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.scalingSpecInput">ScalingSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.startupScriptInput">StartupScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.enablePublicIps">EnablePublicIps</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.filestores">Filestores</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.flexStartMaxDuration">FlexStartMaxDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.lustres">Lustres</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.nodeImage">NodeImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.provisioningModel">ProvisioningModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.startupScript">StartupScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootDisk`<sup>Required</sup> <a name="BootDisk" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.bootDisk"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference BootDisk { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDiskOutputReference</a>

---

##### `EffectiveFlexStartMaxDuration`<sup>Required</sup> <a name="EffectiveFlexStartMaxDuration" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.effectiveFlexStartMaxDuration"></a>

```csharp
public string EffectiveFlexStartMaxDuration { get; }
```

- *Type:* string

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.machineSpec"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference MachineSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpecOutputReference</a>

---

##### `ScalingSpec`<sup>Required</sup> <a name="ScalingSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.scalingSpec"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference ScalingSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference</a>

---

##### `BootDiskInput`<sup>Optional</sup> <a name="BootDiskInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.bootDiskInput"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk BootDiskInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk">GoogleVertexAiModelDevelopmentClusterNodePoolsBootDisk</a>

---

##### `EnablePublicIpsInput`<sup>Optional</sup> <a name="EnablePublicIpsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.enablePublicIpsInput"></a>

```csharp
public bool|IResolvable EnablePublicIpsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FilestoresInput`<sup>Optional</sup> <a name="FilestoresInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.filestoresInput"></a>

```csharp
public string[] FilestoresInput { get; }
```

- *Type:* string[]

---

##### `FlexStartMaxDurationInput`<sup>Optional</sup> <a name="FlexStartMaxDurationInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.flexStartMaxDurationInput"></a>

```csharp
public string FlexStartMaxDurationInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LustresInput`<sup>Optional</sup> <a name="LustresInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.lustresInput"></a>

```csharp
public string[] LustresInput { get; }
```

- *Type:* string[]

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.machineSpecInput"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec MachineSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsMachineSpec</a>

---

##### `NodeImageInput`<sup>Optional</sup> <a name="NodeImageInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.nodeImageInput"></a>

```csharp
public string NodeImageInput { get; }
```

- *Type:* string

---

##### `ProvisioningModelInput`<sup>Optional</sup> <a name="ProvisioningModelInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.provisioningModelInput"></a>

```csharp
public string ProvisioningModelInput { get; }
```

- *Type:* string

---

##### `ScalingSpecInput`<sup>Optional</sup> <a name="ScalingSpecInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.scalingSpecInput"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec ScalingSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a>

---

##### `StartupScriptInput`<sup>Optional</sup> <a name="StartupScriptInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.startupScriptInput"></a>

```csharp
public string StartupScriptInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `EnablePublicIps`<sup>Required</sup> <a name="EnablePublicIps" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.enablePublicIps"></a>

```csharp
public bool|IResolvable EnablePublicIps { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Filestores`<sup>Required</sup> <a name="Filestores" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.filestores"></a>

```csharp
public string[] Filestores { get; }
```

- *Type:* string[]

---

##### `FlexStartMaxDuration`<sup>Required</sup> <a name="FlexStartMaxDuration" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.flexStartMaxDuration"></a>

```csharp
public string FlexStartMaxDuration { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Lustres`<sup>Required</sup> <a name="Lustres" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.lustres"></a>

```csharp
public string[] Lustres { get; }
```

- *Type:* string[]

---

##### `NodeImage`<sup>Required</sup> <a name="NodeImage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.nodeImage"></a>

```csharp
public string NodeImage { get; }
```

- *Type:* string

---

##### `ProvisioningModel`<sup>Required</sup> <a name="ProvisioningModel" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.provisioningModel"></a>

```csharp
public string ProvisioningModel { get; }
```

- *Type:* string

---

##### `StartupScript`<sup>Required</sup> <a name="StartupScript" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.startupScript"></a>

```csharp
public string StartupScript { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterNodePools InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePools">GoogleVertexAiModelDevelopmentClusterNodePools</a>

---


### GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resetMaxNodeCount">ResetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resetMinNodeCount">ResetMinNodeCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNodeCount` <a name="ResetMaxNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resetMaxNodeCount"></a>

```csharp
private void ResetMaxNodeCount()
```

##### `ResetMinNodeCount` <a name="ResetMinNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.resetMinNodeCount"></a>

```csharp
private void ResetMinNodeCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.maxNodeCountInput"></a>

```csharp
public double MaxNodeCountInput { get; }
```

- *Type:* double

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.minNodeCountInput"></a>

```csharp
public double MinNodeCountInput { get; }
```

- *Type:* double

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.maxNodeCount"></a>

```csharp
public double MaxNodeCount { get; }
```

- *Type:* double

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.minNodeCount"></a>

```csharp
public double MinNodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec">GoogleVertexAiModelDevelopmentClusterNodePoolsScalingSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec">PutSlurmSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resetSlurmSpec">ResetSlurmSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSlurmSpec` <a name="PutSlurmSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec"></a>

```csharp
private void PutSlurmSpec(GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.putSlurmSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a>

---

##### `ResetSlurmSpec` <a name="ResetSlurmSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.resetSlurmSpec"></a>

```csharp
private void ResetSlurmSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.slurmSpec">SlurmSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.slurmSpecInput">SlurmSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SlurmSpec`<sup>Required</sup> <a name="SlurmSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.slurmSpec"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference SlurmSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference</a>

---

##### `SlurmSpecInput`<sup>Optional</sup> <a name="SlurmSpecInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.slurmSpecInput"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec SlurmSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>[]

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.configInput">ConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.nodePoolIdInput">NodePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.config">Config</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.nodePoolId">NodePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.configInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NodePoolIdInput`<sup>Optional</sup> <a name="NodePoolIdInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.nodePoolIdInput"></a>

```csharp
public string NodePoolIdInput { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.config"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Config { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NodePoolId`<sup>Required</sup> <a name="NodePoolId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.nodePoolId"></a>

```csharp
public string NodePoolId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putNodeSets">PutNodeSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putPartitions">PutPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetDefaultPartitionId">ResetDefaultPartitionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetEpilogBashScripts">ResetEpilogBashScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetNodeSets">ResetNodeSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetPartitions">ResetPartitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetPrologBashScripts">ResetPrologBashScripts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodeSets` <a name="PutNodeSets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putNodeSets"></a>

```csharp
private void PutNodeSets(IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putNodeSets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>[]

---

##### `PutPartitions` <a name="PutPartitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putPartitions"></a>

```csharp
private void PutPartitions(IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.putPartitions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>[]

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetDefaultPartitionId` <a name="ResetDefaultPartitionId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetDefaultPartitionId"></a>

```csharp
private void ResetDefaultPartitionId()
```

##### `ResetEpilogBashScripts` <a name="ResetEpilogBashScripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetEpilogBashScripts"></a>

```csharp
private void ResetEpilogBashScripts()
```

##### `ResetNodeSets` <a name="ResetNodeSets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetNodeSets"></a>

```csharp
private void ResetNodeSets()
```

##### `ResetPartitions` <a name="ResetPartitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetPartitions"></a>

```csharp
private void ResetPartitions()
```

##### `ResetPrologBashScripts` <a name="ResetPrologBashScripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.resetPrologBashScripts"></a>

```csharp
private void ResetPrologBashScripts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.nodeSets">NodeSets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.partitions">Partitions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.configInput">ConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.defaultPartitionIdInput">DefaultPartitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.epilogBashScriptsInput">EpilogBashScriptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.homeDirectoryStorageInput">HomeDirectoryStorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.loginNodePoolIdInput">LoginNodePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.nodeSetsInput">NodeSetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.partitionsInput">PartitionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.prologBashScriptsInput">PrologBashScriptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.config">Config</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.defaultPartitionId">DefaultPartitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.epilogBashScripts">EpilogBashScripts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.homeDirectoryStorage">HomeDirectoryStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.loginNodePoolId">LoginNodePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.prologBashScripts">PrologBashScripts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeSets`<sup>Required</sup> <a name="NodeSets" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.nodeSets"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList NodeSets { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSetsList</a>

---

##### `Partitions`<sup>Required</sup> <a name="Partitions" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.partitions"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList Partitions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.configInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultPartitionIdInput`<sup>Optional</sup> <a name="DefaultPartitionIdInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.defaultPartitionIdInput"></a>

```csharp
public string DefaultPartitionIdInput { get; }
```

- *Type:* string

---

##### `EpilogBashScriptsInput`<sup>Optional</sup> <a name="EpilogBashScriptsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.epilogBashScriptsInput"></a>

```csharp
public string[] EpilogBashScriptsInput { get; }
```

- *Type:* string[]

---

##### `HomeDirectoryStorageInput`<sup>Optional</sup> <a name="HomeDirectoryStorageInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.homeDirectoryStorageInput"></a>

```csharp
public string HomeDirectoryStorageInput { get; }
```

- *Type:* string

---

##### `LoginNodePoolIdInput`<sup>Optional</sup> <a name="LoginNodePoolIdInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.loginNodePoolIdInput"></a>

```csharp
public string LoginNodePoolIdInput { get; }
```

- *Type:* string

---

##### `NodeSetsInput`<sup>Optional</sup> <a name="NodeSetsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.nodeSetsInput"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets[] NodeSetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecNodeSets</a>[]

---

##### `PartitionsInput`<sup>Optional</sup> <a name="PartitionsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.partitionsInput"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions[] PartitionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>[]

---

##### `PrologBashScriptsInput`<sup>Optional</sup> <a name="PrologBashScriptsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.prologBashScriptsInput"></a>

```csharp
public string[] PrologBashScriptsInput { get; }
```

- *Type:* string[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.config"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Config { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultPartitionId`<sup>Required</sup> <a name="DefaultPartitionId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.defaultPartitionId"></a>

```csharp
public string DefaultPartitionId { get; }
```

- *Type:* string

---

##### `EpilogBashScripts`<sup>Required</sup> <a name="EpilogBashScripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.epilogBashScripts"></a>

```csharp
public string[] EpilogBashScripts { get; }
```

- *Type:* string[]

---

##### `HomeDirectoryStorage`<sup>Required</sup> <a name="HomeDirectoryStorage" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.homeDirectoryStorage"></a>

```csharp
public string HomeDirectoryStorage { get; }
```

- *Type:* string

---

##### `LoginNodePoolId`<sup>Required</sup> <a name="LoginNodePoolId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.loginNodePoolId"></a>

```csharp
public string LoginNodePoolId { get; }
```

- *Type:* string

---

##### `PrologBashScripts`<sup>Required</sup> <a name="PrologBashScripts" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.prologBashScripts"></a>

```csharp
public string[] PrologBashScripts { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsList.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>[]

---


### GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.configInput">ConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.nodePoolIdsInput">NodePoolIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.config">Config</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.nodePoolIds">NodePoolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.configInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NodePoolIdsInput`<sup>Optional</sup> <a name="NodePoolIdsInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.nodePoolIdsInput"></a>

```csharp
public string[] NodePoolIdsInput { get; }
```

- *Type:* string[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.config"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Config { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NodePoolIds`<sup>Required</sup> <a name="NodePoolIds" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.nodePoolIds"></a>

```csharp
public string[] NodePoolIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions">GoogleVertexAiModelDevelopmentClusterOrchestratorSpecSlurmSpecPartitions</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.trainingServices">TrainingServices</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.xmanager">Xmanager</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntime">GoogleVertexAiModelDevelopmentClusterRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrainingServices`<sup>Required</sup> <a name="TrainingServices" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.trainingServices"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList TrainingServices { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList</a>

---

##### `Xmanager`<sup>Required</sup> <a name="Xmanager" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.xmanager"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList Xmanager { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntime">GoogleVertexAiModelDevelopmentClusterRuntime</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeSpec">GoogleVertexAiModelDevelopmentClusterRuntimeSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.workerNodeCount">WorkerNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.workerNodePoolId">WorkerNodePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkerNodeCount`<sup>Required</sup> <a name="WorkerNodeCount" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.workerNodeCount"></a>

```csharp
public double WorkerNodeCount { get; }
```

- *Type:* double

---

##### `WorkerNodePoolId`<sup>Required</sup> <a name="WorkerNodePoolId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.workerNodePoolId"></a>

```csharp
public string WorkerNodePoolId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpec</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.deploymentSpec">DeploymentSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.gcsBucket">GcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.serviceStatus">ServiceStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeploymentSpec`<sup>Required</sup> <a name="DeploymentSpec" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.deploymentSpec"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList DeploymentSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesDeploymentSpecList</a>

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.gcsBucket"></a>

```csharp
public string GcsBucket { get; }
```

- *Type:* string

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceStatus`<sup>Required</sup> <a name="ServiceStatus" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.serviceStatus"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList ServiceStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServices</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.detail">Detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.endpoints">Endpoints</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.detail"></a>

```csharp
public string Detail { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.endpoints"></a>

```csharp
public StringMap Endpoints { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus">GoogleVertexAiModelDevelopmentClusterRuntimeTrainingServicesServiceStatus</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.details">Details</a></code> | <code>Io.Cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.details"></a>

```csharp
public StringMapList Details { get; }
```

- *Type:* Io.Cdktn.StringMapList

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerError</a>

---


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.get"></a>

```csharp
private GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference <a name="GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.apiEndpoint">ApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.uiEndpoint">UiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager">GoogleVertexAiModelDevelopmentClusterRuntimeXmanager</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiEndpoint`<sup>Required</sup> <a name="ApiEndpoint" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.apiEndpoint"></a>

```csharp
public string ApiEndpoint { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.error"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList">GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerErrorList</a>

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UiEndpoint`<sup>Required</sup> <a name="UiEndpoint" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.uiEndpoint"></a>

```csharp
public string UiEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanagerOutputReference.property.internalValue"></a>

```csharp
public GoogleVertexAiModelDevelopmentClusterRuntimeXmanager InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterRuntimeXmanager">GoogleVertexAiModelDevelopmentClusterRuntimeXmanager</a>

---


### GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference <a name="GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleVertexAiModelDevelopmentClusterTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleVertexAiModelDevelopmentCluster.GoogleVertexAiModelDevelopmentClusterTimeouts">GoogleVertexAiModelDevelopmentClusterTimeouts</a>

---



